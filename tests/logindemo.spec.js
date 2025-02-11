import { test, expect } from "@playwright/test";

//Facebook Login Demo test
test.only("demo login test 1", async ({ page }) => {
  await page.goto("https://www.facebook.com/r.php?locale=zh_TW&display=page");

  await page.getByLabel("姓氏").fill("Tyson");
  await page.getByLabel("名字").fill("Yoshi");

  const input = page.getByLabel("年", { exact: true });
  await input.selectOption("2020");

  await page.getByLabel("月", { exact: true }).selectOption("3");
  await page.getByTitle("日", { exact: true }).selectOption("27");
  //   await page.getByLabel('年', { exact: true }).selectOption('2019');
  await page.getByLabel("男性").check();

  await page
    .getByLabel("手機號碼或電子郵件地址", { exact: true })
    .fill("Kendrick");

  await page.waitForSelector('[id="password_step_input"]', { timeout: 5000 });
  await page.locator('[id="password_step_input"]').fill("love me");

  await page.pause();

  const buttons = await page.getByRole("button", { name: "註冊" });
  await expect(buttons).toHaveCount(1);
  await buttons.click();
});

test("Demo Login Test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.waitForSelector("[name='q']", { timeout: 5000 });
  await page.getByRole("combobox", { name: "Search" }).fill("Love Kendrick");
  await page.close();
});
