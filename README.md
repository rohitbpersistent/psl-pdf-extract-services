# psl-pdf-extract-services

# PDF Document Data Extraction Utility

## About the project
This is a basic utility which extracts data from standard formated PDF file(s) and transforms the extracted data to the [Searchassist](https://kore.ai/searchassist/) required format.
This utility is internally using [Adobe PDF Extract API](https://developer.adobe.com/document-services/apis/pdf-extract/) to extract the data from PDF files 

This utility assigns templates (classification) to file pages based on nature & structure of page viz. 
* Plain text template 
* text-image template 
* text-image-table template

Based on the templates it applies validation rules on the extracted data and transforms the data into the [Searchassist](https://kore.ai/searchassist/) required format. 
E.g.

`{title: "Header line from document", content:"Paragraph and/or paragraphSpan element from extracted data as a content"}`

## Built With


