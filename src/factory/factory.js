/**
- Get json file data in chunks. 
- Route to templateidentifiers as per.
 */
const fs = require('fs')
const AdmZip = require('adm-zip');

const JSON_FILE_NAME = 'structuredData.json';

const Factory = {
    process : (outputpath) => {
    // if (fs.existsSync(outputpath)) fs.unlinkSync(outputpath);
        
        // Read json file
        try {
            let zip = new AdmZip(outputpath);
            let jsondata = zip.readAsText(JSON_FILE_NAME);
            let data = JSON.parse(jsondata);

            console.log(data)

        } catch (err) {
            console.log('Exception encountered while executing operation', err);
        }
    }
}

module.exports = Factory

