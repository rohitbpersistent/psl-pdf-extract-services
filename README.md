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
### Prerequisites
\
As this utility is using [Node.JS](https://nodejs.org/en), your system should have [Node.JS](https://nodejs.org/en) installed.\
Currently it tested on [V18.16.1](https://nodejs.org/en/blog/release/v18.16.1)\
If you dont have NodeJS installed, You can follow installation step from [Install NodeJS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

1. You can clone the repo using, 

   > `https://github.com/rohitbpersistent/psl-pdf-extract-services.git`

   If http github authentication is not allowed then you can clone the project using SSH, Visit [psl-pdf-extract-services](https://github.com/rohitbpersistent/psl-pdf-extract-services) utility page.

2. To use the Adobe Document Extract API, you need to create account of Adobe and generate the credentials.\
    
   Create account/Sign up on [Adobe](https://developer.adobe.com/document-services/apis/pdf-extract/)

3. Once done with Sign up, you can generate the credentials using `Generate Credendials` menu button.\
   Copy the newly generated credentials such as ClientId, ClientSecret etc. and paste it into the `.env` file of project.

4. Add PDF file from which you want to extract data to `psl-pdf-extract-services/resources/` folder

5. Now, open project directory in terminal/command prompt,\ 
   > `cd psl-pdf-extract-services`

6. Install dependencies
   > `npm install`

6. After dependencies installation, go to factory folder where the utility service is present
   > `cd src/factory`

7. Run utility using following command,
   > `node service.js`


This command will start the utility process to extract the PDF files and transform it to the Searchassist format followed by ingesting the data to Searchassist App.




   



