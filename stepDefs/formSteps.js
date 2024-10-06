"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const formPage_1 = require("../pages/formPage");
const helpers_1 = require("../lib/helpers");
var formPage = new formPage_1.FormPage();
var frame;
(0, cucumber_1.When)(/^I click on run button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield helpers_1.page.locator(formPage.runButton).click();
    frame = helpers_1.page.frameLocator('#ResultBrowserIframe');
}));
(0, cucumber_1.Then)(/^I enter name as '(.*?)'$/, (name) => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.nameTextBox).fill(name);
}));
(0, cucumber_1.Then)(/^I enter email as '(.*?)'$/, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.emailTextBox).fill(email);
}));
(0, cucumber_1.Then)(/^I enter password as '(.*?)'$/, (password) => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.passwordTextBox).fill(password);
}));
(0, cucumber_1.Then)(/^I enter confirm password as '(.*?)'$/, (confirmPassword) => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.confirmPasswordTextBox).fill(confirmPassword);
}));
(0, cucumber_1.Then)(/^I enter DOB as '(.*?)'$/, (dob) => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.dobTextBox).click();
    var values = dob.split("");
    for (let i = 0; i < values.length; i++) {
        yield helpers_1.page.keyboard.press(values[i]);
    }
}));
(0, cucumber_1.Then)(/^I select Gender as '(.*?)'$/, (gender) => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.genderDropDown).selectOption(gender);
}));
(0, cucumber_1.Then)(/^I select Country as '(.*?)'$/, (country) => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.countryDropdown).selectOption(country);
}));
(0, cucumber_1.Then)(/^I click on music checkbox$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.musicCheckbox).click();
}));
(0, cucumber_1.Then)(/^I click on sports checkbox$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.sportsCheckbox).click();
}));
(0, cucumber_1.Then)(/^I click on reading checkbox$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.readingCheckbox).click();
}));
(0, cucumber_1.Then)(/^I click on terms & conditions checkbox$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.termsCheckbox).click();
}));
(0, cucumber_1.Then)(/^I click on submit button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield frame.locator(formPage.submitButton).click();
}));
