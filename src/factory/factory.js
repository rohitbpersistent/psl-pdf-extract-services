/**
- Get json file data in chunks. 
- Route to templateidentifiers as per.
 */
// const fs = require('fs')
const AdmZip = require('adm-zip');
const ApiService = require('./apiService')

const JSON_FILE_NAME = 'structuredData.json';
const JSON_FILE_FOLDER = '../factory/output/ExtractTextInfoFromPDF/';
const CLIENT_DOC_URL = 'https://www.conference-board.org/publications/';


const Factory = {
    process : (outputpath, PDF_SOURCE_FILE_NAME) => {
        
        // Delete file if already exist
        // if (fs.existsSync(outputpath)) fs.unlinkSync(outputpath);
        // Read json file
        try {
            let zip = new AdmZip(outputpath);
            let jsondata = zip.readAsText(JSON_FILE_NAME);
            let data = JSON.parse(jsondata);
            
            // Prepare data for search assist api
            let preparedData = prepareStructureData(data, PDF_SOURCE_FILE_NAME);
            ApiService(preparedData) // call api service
            
        } catch (err) {
            console.log('Exception encountered while executing operation', err);
        }
    }
}

const prepareStructureData = (rawData, PDF_SOURCE_FILE_NAME) => {
    // Filter data
    rawData.elements = rawData.elements.map((row) => {
        if (row.Path.includes('/Lbl')) {
            row.Text = ' \n ' + row.Text
        }
        return row;
    })

    //Get all section 
    let allSectionArr = rawData.elements.map((ele) => ele.Path.split('/').filter((e) => e.includes('Sect'))[0])
    let allSections = [...new Set(allSectionArr)]
    
    let structureRows = allSections.map((section) => {
        if (section && section !== 'Sect') {
            // Get sectionwise data from rawData
            let sectionData = rawData.elements.filter((ele) => ele.Path.includes(section));
            let type = getSectionType(sectionData, section)
            
            let sectionArr = []
            // Identify template
            switch(type) {
                case 'text-only':
                    sectionArr = getSectionwiseData(sectionData, section, PDF_SOURCE_FILE_NAME, rawData)
                    break;
                case 'text-image':
                    sectionArr = getSectionwiseData(sectionData, section, PDF_SOURCE_FILE_NAME, rawData)
                    break;
                case 'text-image-table':
                    break;
                case 'text-image-table':
                    break;
            }

            return sectionArr;
        }
    })
    
    return structureRows;    
}

const getSectionType = (sectionData, sectionName) => {
    let sectionArr = sectionData.find((ele) => isImage(ele));    
    if (sectionArr) {
        return 'text-image'
    } 
    return 'text-only'        
}

const isTitle = (row) => {
    return row.Path.includes('/Title') ? true : false;
}

const isHeader = (row) => {
    return row.Path.includes('/H') ? true : false;
}

const isParagraph = (row) => {
    return row.Path.includes('/P') || row.Path.includes('/Figure') || row.Path.includes('/LBody') || row.Path.includes('/Lbl') || row.Path.includes('/ParagraphSpan') ? true : false;
}

const isImage = (row) => {
    return row.Path.includes('/Figure') ? true : false;
}

const getSectionwiseTextData = (sectionData, section, PDF_SOURCE_FILE_NAME, rawData) => {
    // Get Section name from path
    
    let titleArr = []
    let titleStr = ''

    if (section === 'Sect2') {
        // Check Title is present
        let strTitle = sectionData.filter((e) => isTitle(e)).map((mEle) => mEle.Text)[0];
        // console.log('strTitle', strTitle)
        // For only section-2
        titleStr = sectionData.filter((e) => isHeader(e)).map((mEle) => mEle.Text)[0];
    } else {
        // For other sections
        titleStr = sectionData.filter((e) => isHeader(e)).map((mEle) => mEle.Text)[0];
    }

    
    titleArr.push(titleStr)
    
    let content = sectionData.filter((e) => isParagraph(e)).map((mEle) => mEle.Text).join(' ')
    
    // Replace string
    content = content.replaceAll('•', '\n•')

    return {
        title: titleArr,
        content: content,
        doc_name: PDF_SOURCE_FILE_NAME
    };
}

module.exports = Factory
