import { test, expect } from "@playwright/test";

test("Selector Demo", async ({ page }) => {
  //Direct the Page
  await page.goto("https://www.google.com/");

  //Will Open the Playwright inspector window
  await page.pause();

  //Selector
  //await page.locator("#APjFqb").click();

  //Xpath
  await page.locator("text=Français").click();
});
