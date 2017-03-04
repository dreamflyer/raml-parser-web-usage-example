var parser = require("raml-1-parser");

var apiPath = "https://raw.githubusercontent.com/raml-org/raml-js-parser-2/master/src/raml1/test/data/TCK/raml-1.0/Types/xsdscheme/test001/apiInvalid.raml";

function report(elementName, message) {
    var bodyElement = document.body;

    var element = document.createElement(elementName);

    element.innerHTML = message;

    bodyElement.appendChild(element);
}

parser.loadApi(apiPath).then(function(api) {
    report("h2", "XML Validator test:");
    
    var errors = api.errors();
    
    if(errors.length === 0) {
        report("p", "No errors found");
        
        return;
    }

    errors.forEach(function(error) {
        report("p", error.message);
    });
});


apiPath = "https://raw.githubusercontent.com/raml-org/raml-js-parser-2/master/src/raml1/test/data/TCK/raml-1.0/jsonscheme/test4/apiInvalid.raml";

parser.loadApi(apiPath).then(function(api) {
    report("h2", "JSON Validator test:");

    var errors = api.errors();

    if(errors.length === 0) {
        report("p", "No errors found");

        return;
    }

    errors.forEach(function(error) {
        report("p", error.message);
    });
});