var sheets=process.argv[3]
const excelToJson = require('convert-excel-to-json');
const { exit } = require('process');
var root={}
// var results=[];
const fs=require('fs');
function convertExcelToJson(individualSheet){
    var results=[];
    var result = excelToJson({
        sourceFile: process.argv[2],
        sheets:[{
            name: individualSheet,
            header:{
                rows: 1
            },
            columnToKey: {
                '*': '{{columnHeader}}'
            }
        }]
    });
    for( var row in result[individualSheet]){
        if(result[individualSheet][row]['Run']!=undefined){
            if(result[individualSheet][row]['Run'].toString().valueOf()==("Yes").valueOf()){
                results.push(result[individualSheet][row])
            }}}
    return results
}
if(sheets!=undefined){
for(var i=0;i<sheets.split(';').length;i++){
    var individualSheet=sheets.split(';')[i]
    var result=convertExcelToJson(individualSheet)
    root[individualSheet]=result
}}
else{
    var XLSX=require('xlsx')
    var workbook = XLSX.readFile(process.argv[2]);
    var sheet_name_list = workbook.SheetNames;
    sheet_name_list.forEach(function(individualSheet) {
    var result= convertExcelToJson(individualSheet)
    root[individualSheet]=result
})
}
fs.writeFileSync(
    "cypress/fixtures/sample/testcase.json",
    JSON.stringify(root, null, 4),
    "utf-8"
  );