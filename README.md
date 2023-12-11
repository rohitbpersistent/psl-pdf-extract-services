# PDF Document Data Extraction Utility

 [![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg?style=flat-square)](https://expressjs.com/)
 [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg?logo=javascript&style=flat-square)](http://es6.io/)
 [![Adobe PDF Extract API](https://img.shields.io/badge/Adobe%20PDF%20Extract%20API-v1-blue.svg?logo=adobe-acrobat-reader&style=flat-square&logoColor=red)](https://developer.adobe.com/document-services/apis/pdf-extract/)
 [![Adobe PDF Services Node SDK](https://img.shields.io/badge/%40adobe/pdfservices--node--sdk-3.4.2-blue.svg?logo=adobe-acrobat-reader&style=flat-square&logoColor=red)](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/)
 [![axios](https://img.shields.io/badge/axios-0.21.1-blue.svg?logo=axios&style=flat-square&logoColor=rgb(90,41,228))](https://axios-http.com/)
 [![Node.js](https://img.shields.io/badge/Node.js-18.16.x-green.svg?logo=node.js&style=flat-square)](https://nodejs.org/)

## About the project
This is a basic utility which extracts data from PDF file(s) and transforms the extracted data to the [Searchassist](https://kore.ai/searchassist/) required format.
This utility is internally using [Adobe PDF Extract API](https://developer.adobe.com/document-services/apis/pdf-extract/) to extract the data from PDF files 

This utility assigns templates (classification) to file pages based on nature & structure of page viz. 
* Plain text template 
* text-image template 
* text-image-table template

Based on the templates it applies validation rules on the extracted data and transforms the data into the [Searchassist](https://kore.ai/searchassist/) required format. 
E.g.

`{title: "Header line from document", content:"Paragraph and/or paragraphSpan element from extracted data as a content"}`

## Built With
Project is built with the following technologies,

* [![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg?style=flat-square)](https://expressjs.com/)
* [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg?logo=javascript&style=flat-square)](http://es6.io/)
* [![Adobe PDF Extract API](https://img.shields.io/badge/Adobe%20PDF%20Extract%20API-v1-blue.svg?logo=adobe-acrobat-reader&style=flat-square&logoColor=red)](https://developer.adobe.com/document-services/apis/pdf-extract/)
* [![Adobe PDF Services Node SDK](https://img.shields.io/badge/%40adobe/pdfservices--node--sdk-3.4.2-blue.svg?logo=adobe-acrobat-reader&style=flat-square&logoColor=red)](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/)
* [![axios](https://img.shields.io/badge/axios-0.21.1-blue.svg?logo=axios&style=flat-square&logoColor=rgb(90,41,228))](https://axios-http.com/)
* [![Node.js](https://img.shields.io/badge/Node.js-18.16.x-green.svg?logo=node.js&style=flat-square)](https://nodejs.org/)

## Getting Started
