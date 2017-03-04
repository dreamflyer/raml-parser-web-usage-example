var webpack = require("webpack");

var path = require('path');

var target = path.resolve(__dirname, './site');

var dummyFsPath = path.resolve(__dirname, './node_modules/raml-1-parser/web-tools/modules/emptyFS.js');

var jsonValidationPath = path.resolve(__dirname, './node_modules/raml-1-parser/node_modules/raml-definition-system/node_modules/raml-typesystem/node_modules/raml-json-validation');
var xmlValidationPath = path.resolve(__dirname, './node_modules/raml-1-parser/node_modules/raml-definition-system/node_modules/raml-typesystem/node_modules/raml-xml-validation');

var config = {
    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        path: target,

        filename: 'index.js'
    },

    plugins: [],

    resolve: {
      alias: {
          fs: dummyFsPath,
          "raml-xml-validation": xmlValidationPath,
          "raml-json-validation": jsonValidationPath
      }
    },

    node: {
        console: false,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true
    }
};

webpack(config, function(err, stats) {
    if(err) {
        console.log(err.message);

        return;
    }

    console.log("Webpack Building Browser Bundle:");

    console.log(stats.toString({reasons: true, maxModules: Infinity, exclude: undefined, errorDetails: true}));
});