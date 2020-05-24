const fs = require('fs')
const path = require('path')

const csvtojson=require('csvtojson');

const csvFile = 'customer-data.csv';
const xlsFile = 'customer-data.xls';

const c = new csvtojson();
c.fromFile(csvFile).then ( (jsonObj) =>{
    fs.writeFileSync(path.join(__dirname,'customer-data.json'),
	    JSON.stringify(jsonObj,null,1));
});

c.fromFile(xlsFile).then ( (jsonObj) =>{
    fs.writeFileSync(path.join(__dirname,'customer-data.json'),
	    JSON.stringify(jsonObj,null,1));
});
