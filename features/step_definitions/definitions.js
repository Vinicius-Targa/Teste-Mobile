const { Given, When, Then } = require('cucumber')
const assert = require('assert');
const { driver } = require('../support/get_driver');
const $ = require('webdriverio');

const short_time = 2000;
const long_time = 5000;

Given("I'm on the home page", async function () {
    await driver.pause(short_time);
});


Given("I click on the {string} button", async function (arg1) {
    await driver.pause(long_time);
    await driver.click(`android=new UiSelector().description("${arg1}")`);
});

Given("The field with the text {string} is filled with {string}", async function (arg1, arg2) {
    await driver.pause(long_time);
    await driver.setValue(`android=new UiSelector().textMatches("${arg1}")`, arg2);
}); 

Given("I wait {string} seconds", async function (arg1) {
    await driver.pause(arg1);
}); 

Given("I click on the item which has coordinates x = {string} and y = {string}", async function (arg1, arg2) {
    await driver.pause(short_time);
    await driver.touchPerform([{
        action: 'tap',
        options: {
            x: arg1,
            y: arg2
        }
    }]);
});
