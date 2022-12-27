import { Console } from 'console';
import TestDriver from '../support/Drivers/TestDriver';

var testcase=require('../../cypress/fixtures/sample/testcase.json')
describe('TEST application Framework', () => {
    for(var i in testcase){
        describe(i,function(){
            for(var j in testcase[i]){
            it(testcase[i][j]['QC_ID'],function(){
                let testDriver = new TestDriver();
                testDriver.testDriver(testcase[i][j]);
            })
            }
    })
    }
})

