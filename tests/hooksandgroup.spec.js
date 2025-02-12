import { test, expect, chromium } from "@playwright/test";

let browsers;
let context;
let page;

//Use Test Describe to group all the test
test.describe("All My Test", () => {
  test.beforeAll(async () => {
    browsers = await chromium.launch({ headless: false, slowMo: 2000 });
    context = await browsers.newContext();
    page = await context.newPage();
  });

  test.beforeEach(async () => {
    await page.goto("https://www.facebook.com/r.php?locale=zh_TW&display=page");
  });

  test("login1", async () => {
    await page.getByLabel("姓氏", { exact: true }).fill("53");
    await page.getByLabel("年", { exact: true }).selectOption("1997");
  });

  test("login2", async () => {
    await page.getByLabel("男性").check();
  });

  test.afterAll(async () => {
    await browsers.close();
  });
});
