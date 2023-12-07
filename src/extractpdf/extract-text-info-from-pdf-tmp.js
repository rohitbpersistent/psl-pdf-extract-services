/*
 * Copyright 2019 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it. If you have received this file from a source other than Adobe,
 * then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 */
const Factory = require('../factory/factory')
const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');
const PDF_SOURCE_FILE_NAME = 'O&S Educational Assistance Program Policy.pdf'
// const PDF_SOURCE_FILE_NAME = 'ERISA Appeals Procedure_2023.pdf'
/**
 * This sample illustrates how to extract Text Information from PDF.
 * <p>
 * Refer to README.md for instructions on how to run the samples & understand output zip file.
 */
try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
        .servicePrincipalCredentialsBuilder("67791E54653F804A0A495C34@AdobeOrg")
        .withClientId("d47569f0293642c089f66b75b9bf2559")
        .withClientSecret('p8e-l2PXXm84prRYp3EZjUYzoGSQ6GJD-534')
        .build();

    // Create an ExecutionContext using credentials
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

    // Build extractPDF options
    const options = new PDFServicesSdk.ExtractPDF.options.ExtractPdfOptions.Builder()
        .addElementsToExtract(PDFServicesSdk.ExtractPDF.options.ExtractElementType.TEXT).build()

    // Create a new operation instance.
    const extractPDFOperation = PDFServicesSdk.ExtractPDF.Operation.createNew(),
        input = PDFServicesSdk.FileRef.createFromLocalFile(
            '../../resources/' + PDF_SOURCE_FILE_NAME,
            // '../../resources/Manager Career Conversation Guide (1).pdf',
            PDFServicesSdk.ExtractPDF.SupportedSourceFormat.pdf
        );

    // Set operation input from a source file.
    extractPDFOperation.setInput(input);

    // Set options
    extractPDFOperation.setOptions(options);

    //Generating a file name
    let outputFilePath = createOutputFilePath();
console.log('outputFilePath', outputFilePath); 
    extractPDFOperation.execute(executionContext)
        .then(result => result.saveAsFile(outputFilePath))
        .then(() => {
            console.log('Routing to Factory')
            Factory.process(`../extractpdf/${outputFilePath}`, PDF_SOURCE_FILE_NAME)
        })
        .catch(err => {
            if(err instanceof PDFServicesSdk.Error.ServiceApiError
                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
                console.log('Exception encountered while executing operation', err);
            } else {
                console.log('Exception encountered while executing operation', err);
            }
        });

    //Generates a string containing a directory structure and file name for the output file.
    function createOutputFilePath() {
        let date = new Date();
        let dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
            ("0" + date.getDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + "-" +
            ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
        return ("output/ExtractTextInfoFromPDF/extract" + dateString + ".zip");
    }

} catch (err) {
    console.log('Exception encountered while executing operation', err);
}
