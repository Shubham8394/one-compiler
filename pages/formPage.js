"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormPage = void 0;
class FormPage {
    get runButton() {
        return "[class='MuiGrid-root MuiGrid-item'] > button[class*='Secondary']";
    }
    get nameTextBox() {
        return "#name";
    }
    get emailTextBox() {
        return "#email";
    }
    get passwordTextBox() {
        return "#password";
    }
    get confirmPasswordTextBox() {
        return "#confirm-password";
    }
    get dobTextBox() {
        return "#dob";
    }
    get genderDropDown() {
        return "#gender";
    }
    get countryDropdown() {
        return "#country";
    }
    get musicCheckbox() {
        return "#interest-music";
    }
    get sportsCheckbox() {
        return "#interest-sports";
    }
    get readingCheckbox() {
        return "#interest-reading";
    }
    get termsCheckbox() {
        return "#terms";
    }
    get submitButton() {
        return "button[type='submit']";
    }
}
exports.FormPage = FormPage;
