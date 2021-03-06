# TextMeta Demo Application

This is a demo web application that allows for uploading of PDFs and rules to be processed by the [TextMeta](https://github.com/m-gagne/TextMeta) node module.

## What is TextMeta?

[TextMeta](https://github.com/m-gagne/TextMeta) is a simple utility module that makes it easy to extract text and metadata from PDFs. The text is extracted using [PDF.js](https://github.com/mozilla/pdf.js) and the metadat is extracted using a simple regex based rules engine ([detailed here](https://github.com/m-gagne/textmeta).)


## Running locally

To run locally run the following

    git clone https://github.com/m-gagne/TextMetaDemoApp.git
    cd TextMetaDemoApp
    npm install
    npm start
   

## Configuration

To track usage with Application Insights, set a value for `AppInsightsInstrumentationKey` in the Web Applications `Application Settings > App Settings`.