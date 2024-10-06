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
exports.Helpers = exports.frame = exports.page = exports.browser = void 0;
const playwright_1 = require("playwright");
class Helpers {
    launchBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            exports.browser = yield playwright_1.chromium.launch({ headless: false, slowMo: 100, args: ['--start-maximized'] });
            exports.page = yield exports.browser.newPage();
            exports.page.setDefaultTimeout(30000);
        });
    }
    launchUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.page.goto(url, { waitUntil: 'domcontentloaded' });
        });
    }
    closeBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.browser.close();
        });
    }
    takeScreenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            const screenshot = yield exports.page.screenshot();
            return screenshot;
        });
    }
}
exports.Helpers = Helpers;
