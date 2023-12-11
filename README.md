# PDF Document Data Extraction Utility

 [![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg?style=flat-square)](https://expressjs.com/)
 [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg?logo=javascript&style=flat-square)](http://es6.io/)
 [![Adobe PDF Extract API](https://img.shields.io/badge/Adobe%20PDF%20Extract%20API-v1-blue.svg?logo=adobe-acrobat-reader&style=flat-square&logoColor=red)](https://developer.adobe.com/document-services/apis/pdf-extract/)
 [![Adobe PDF Services Node SDK](https://img.shields.io/badge/%40adobe/pdfservices--node--sdk-3.4.2-blue.svg?logo=adobe-acrobat-reader&style=flat-square&logoColor=red)](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/)
 [![axios](https://img.shields.io/badge/axios-0.21.1-blue.svg?logo=axios&style=flat-square&logoColor=rgb(90,41,228))](https://axios-http.com/)
 [![Node.js](https://img.shields.io/badge/Node.js-18.16.x-green.svg?logo=node.js&style=flat-square)](https://nodejs.org/)

## About the project

![Alt text](/assets/utility-PLT.jpg)

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

4. Require Searchassist configuration - API url and auth configure into .env file.
 
5. Add PDF file from which you want to extract data to `psl-pdf-extract-services/resources/` folder

6. Now, open project directory in terminal/command prompt,\ 
   > `cd psl-pdf-extract-services`

7. Install dependencies
   > `npm install`

8. After dependencies installation, go to factory folder where the utility service is present
   > `cd src/factory`

9. Run utility using following command,
   > `node service.js`


This command will start the utility process to extract the PDF files and transform it to the Searchassist format followed by ingesting the data to Searchassist App.




## In Scope
  #### File Type : PDF 
  Document extraction for following types of pdf's:
  1. Plain text pdf's
  2. Pdf's with images, priority is to extract text only, rather than images or text from images
  3. pdf's with multiple images

  * Utility should extract special character such as /, %, &, $, - etc. within the content as well as title.
  * Utility should extract title/heading,content/paragraph.
  * Utility should extract numbered bullet pointers from paragraph.
  * If paragraph/content continuing from one page to another page, it should consider as a single paragraph.

## Out of Scope
   #### Any document format other than PDF.
   1. Excel file extraction
   2. Word file extraction
   3. PDF created from email
   4. PDF created from PPT
   5. PDF created from web
   6. Any non-standard PDF format

   * Text in multiple tables in same row is not getting extracted accurately.
   * Pages with complex structure which include multiple images and multiple tables is not getting extracted
   * Hyperlink from paragraph/content is not getting extracted,
     it is considering as a separate heading.
   * Visual diagrams such as pie chart,bar chart, graphs etc.are not covered.
   * Searchassist specific functionality such as spell check,contextual meaning,length of content etc.
   * Any new cases occurring in adobe extraction.



   

