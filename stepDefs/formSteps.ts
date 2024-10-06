import { Then, When } from '@cucumber/cucumber';
import { FormPage } from '../pages/formPage';
import { page } from '../lib/helpers';

var formPage = new FormPage();
var frame: any;

When(/^I click on run button$/, async () => {
    await page.locator(formPage.runButton).click();
    frame = page.frameLocator('#ResultBrowserIframe');
});

Then(/^I enter name as '(.*?)'$/, async (name) => {
    await frame.locator(formPage.nameTextBox).fill(name);
});

Then(/^I enter email as '(.*?)'$/, async (email) => {
    await frame.locator(formPage.emailTextBox).fill(email);
});

Then(/^I enter password as '(.*?)'$/, async (password) => {
    await frame.locator(formPage.passwordTextBox).fill(password);
});

Then(/^I enter confirm password as '(.*?)'$/, async (confirmPassword) => {
    await frame.locator(formPage.confirmPasswordTextBox).fill(confirmPassword);
});

Then(/^I enter DOB as '(.*?)'$/, async (dob) => {
    await frame.locator(formPage.dobTextBox).click();
    var values = dob.split("");
    for(let i=0; i<values.length; i++) {
        await page.keyboard.press(values[i]);
    }
});

Then(/^I select Gender as '(.*?)'$/, async (gender) => {
    await frame.locator(formPage.genderDropDown).selectOption(gender);
});

Then(/^I select Country as '(.*?)'$/, async (country) => {
    await frame.locator(formPage.countryDropdown).selectOption(country);
});

Then(/^I click on music checkbox$/, async () => {
    await frame.locator(formPage.musicCheckbox).click();
});

Then(/^I click on sports checkbox$/, async () => {
    await frame.locator(formPage.sportsCheckbox).click();
});

Then(/^I click on reading checkbox$/, async () => {
    await frame.locator(formPage.readingCheckbox).click();
});

Then(/^I click on terms & conditions checkbox$/, async () => {
    await frame.locator(formPage.termsCheckbox).click();
});

Then(/^I click on submit button$/, async () => {
    await frame.locator(formPage.submitButton).click();
});
