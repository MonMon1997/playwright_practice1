import { test, expect, chromium } from "@playwright/test";

test("slow motion and recording demo", async ({ page }) => {
  const browsers = await chromium.launch({
    slowMo: 3000,
    headless: false,
  });

  const context = await browsers.newContext();

  const page = await context.newPage();

  await context.close();
});
