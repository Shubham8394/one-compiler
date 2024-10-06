const report = require('multiple-cucumber-html-reporter');
const moment = require('moment-timezone');

report.generate({
    jsonDir: './reports/',
    reportPath: './reports/',
    // openReportInBrowser: true,
    displayDuration: true,
    pageTitle: 'Test Report',
    reportName: 'UI Automation Report',
    automaticallyGenerateReport:true,
    disableLog: true,
    // displayReportTime: true,
    metadata:{
        browser: {
            name: 'chrome',
            version: '90'
        },
        device: 'MacBook Pro 13',
        platform: {
            name: 'OSX',
            version: '10.15.6'
        }
    },
    customData: {
        title: 'Run Info',
        data: [
            {label: 'Project', value: 'Playwright Project'},
            {label: 'Date and Time', value: moment().format('DD-MMM-YYYY hh:mm:ss A')}
        ]
    }
});