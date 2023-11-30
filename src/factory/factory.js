/**
- Get json file data in chunks. 
- Route to templateidentifiers as per.
 */
// const fs = require('fs')
const AdmZip = require('adm-zip');
const ApiService = require('./apiService')

const JSON_FILE_NAME = 'structuredData.json';
const JSON_FILE_FOLDER = '../extractpdf/output/ExtractTextInfoFromPDF/';

const Factory = {
    process : (outputpath) => {
        // Delete file if already exist
        // if (fs.existsSync(outputpath)) fs.unlinkSync(outputpath);        
        // Read json file
        try {
            let zip = new AdmZip(outputpath);
            let jsondata = zip.readAsText(JSON_FILE_NAME);
            let data = JSON.parse(jsondata);
            
            // Prepare data for search assist api
            let preparedData = prepareStructureData(data);
            ApiService(preparedData) // call api service
            
        } catch (err) {
            console.log('Exception encountered while executing operation', err);
        }
    }
}

const processPagewiseData = (extractedRawData) => {

}

const onlyTextPageProcess = () => {

}

const imageTextPageProcess = () => {
    
}

const prepareStructureData = (rawData) => {
    //Get all section 
    let allSectionArr = rawData.elements.map((ele) => ele.Path.split('/').filter((e) => e.includes('Sect'))[0])
    let allSections = [...new Set(allSectionArr)]
    
    let structureRows = allSections.map((section) => {
        if (section) {
            // Get sectionwise data from rawData            
            let sectionArr = getSectionwiseData(rawData, section)
            
            // Identify template
            // switch(type) {
            //     case 'text-only':
            //         break;
            //     case 'text-image':
            //         break;
            //     case 'text-image-table':
            //         break;
            //     case 'text-image-table':
            //         break;
            // }

            return sectionArr;
        }
    })
    
    return structureRows;    
}

const isLastNode = (prevSection, ele) => {

    return 
}

const isTitle = (row) => {
    return row.Path.includes('/Title') ? true : false;
}

const isHeader = (row) => {
    return row.Path.includes('/H') ? true : false;
}

const isParagraph = (row) => {
    return row.Path.includes('/P') || row.Path.includes('/LBody') || row.Path.includes('/Lbl') || row.Path.includes('/ParagraphSpan') ? true : false;
}

const getSectionwiseData = (rawData, sectionName) => {
    // Get Section name from path    
    let sectionArr = rawData.elements.filter((ele) => ele.Path.includes(sectionName));
    let titleArr = []
    let titleStr = sectionArr.filter((e) => isHeader(e)).map((mEle) => mEle.Text)[0];    
    titleArr.push(titleStr)
    let content = sectionArr.filter((e) => isParagraph(e)).map((mEle) => mEle.Text).join(' ')
    
    return {
        title: titleArr,
        content: content
    };
}

module.exports = Factory

