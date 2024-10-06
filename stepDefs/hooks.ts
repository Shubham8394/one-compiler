import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { Helpers } from '../lib/helpers';

var helpers = new Helpers();

BeforeAll(async () => {
    await helpers.launchBrowser();
});

Before(async () => {
    await helpers.launchUrl("https://onecompiler.com/html/42kh8j399");
});

After({ timeout: 60000 }, async function (scenario) {
    if (scenario && scenario.result && scenario.result.status == Status.FAILED) {
        this.attach(await helpers.takeScreenshot(), 'image/png');
    }
});

AfterAll(async () => {
    await helpers.closeBrowser();
});
