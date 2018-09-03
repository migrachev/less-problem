let less = require("less");
let fs = require("fs");
let path = require("path");

let inputFileName = "less/index.less";
let outputFileName = "index.css";

let lessInput = fs.readFileSync(inputFileName).toString();

less.render(lessInput, {
    paths:["../less"],
    //paths:[path.resolve(__dirname, "../less")],
    relativeUrls: true
}).then(function(output) {
    fs.writeFileSync(outputFileName, output.css);
}, function(error) {
    console.log("Error during lessc of: %s !", inputFileName);
    console.log("Error : %s !", error);
});