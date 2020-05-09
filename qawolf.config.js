module.exports = {
    config: 'node_modules/qawolf/ts-jest.config.json',
    createTemplate: ({ name, url}) => {

        return `
import { Browser, Page } from "playwright";
import qawolf from "qawolf";

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
  await context.grantPermissions(['geolocation']);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test('${name}', async () => {
  await page.goto("${url}");
  await qawolf.create();
});
`;
    },
    // generate .ts files
    useTypeScript: true,
};