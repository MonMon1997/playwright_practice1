import { test, expect } from "@playwright/test";

//Skip the test
test.skip("test one", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByLabel("Search", { exact: true }).fill("test one");
  await page.pause();
});

test("test two", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByLabel("Search", { exact: true }).fill("test two");
  await page.pause();
});

//this test will be fail
test("test three", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByLabel("Search", { exact: true }).fill("test three");
  await page.pause();
  test.fail();
});

//this test will be skipped but makred as test will be fix
test.fixme("test four", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByLabel("Search", { exact: true }).fill("test four");
  await page.pause();
});

//marked as slow test in report
test.slow(3000); // 設定慢測試閾值為 3 秒

//Only this test will be run
test("test five", async ({ page }) => {
  await page.goto("https://www.google.com/");
});

//Tags
test("Tags @smo", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/api/class-test#test-slow");
});
