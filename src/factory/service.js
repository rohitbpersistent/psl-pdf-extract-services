const fs = require('fs');

const ExtractTextFromPdf = require('../extractpdf/extract-text-info-from-pdf')

const RESOURCE_DIR = '../../resources/upload/'

function startService() {
    processDirectory(RESOURCE_DIR)
}

function processDirectory(path, recPath = '') {
    fs.readdir(path, function(err, filenames) {

        if (err) {
            onError(err);
            return;
        }

        filenames.forEach(function(filename) {            
            if (isDir(RESOURCE_DIR + recPath + filename)) {
                recPath = `${recPath}${filename}/`
                processDirectory(RESOURCE_DIR + recPath, recPath)
            } else {
                console.log('Process extract ---------->>', filename)
                ExtractTextFromPdf(path + filename)
            }
        });
    });
}

function isDir(path) {
    try {
        return fs.lstatSync(path).isDirectory()
    } catch(e) {
        return false
    }    
}

startService()