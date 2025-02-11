import { test, expect, chromium } from "@playwright/test";

test("revision google run", async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.getByLabel("Search", { exact: true }).click();
  await page.getByRole("combobox").fill("disney adventure park");
  await page.getByLabel("Clear").click();
  await expect(page.locator("[name='q']")).toBeVisible();
});

test("facebook", async ({ page }) => {
  await page.goto("https://www.facebook.com/login/");
  await expect(page.getByAltText("Facebook")).toBeVisible();
  const username = page.getByPlaceholder("Email or phone number", {
    exact: true,
  });
  await username.click();
  await username.fill("Mine");

  const password = page.getByLabel("Password", { exact: true });

  await password.click();
  await password.fill("password");

  await page.getByRole("button", { name: "Log in" }).click();
});

test.only("slow motion and recording demo", async () => {
  const browsers = await chromium.launch({
    slowMo: 2000,
    headless: false,
  });
  const context = await browsers.newContext({
    recordVideo: {
      dir: "video/",
      size: { width: 800, height: 600 },
    },
  });
  const page = await context.newPage();
  await page.goto("https://www.facebook.com/login/");
  await expect(page.getByAltText("Facebook")).toBeVisible();
  const username = page.getByPlaceholder("Email or phone number", {
    exact: true,
  });
  await username.click();
  await username.fill("Mine");

  const password = page.getByLabel("Password", { exact: true });

  await password.click();
  await password.fill("password");

  await page.getByRole("button", { name: "Log in" }).click();
  await context.close();
});
