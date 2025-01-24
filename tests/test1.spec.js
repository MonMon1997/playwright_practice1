import { test, expect, devices } from "@playwright/test";

test.use({
  ...devices["iPhone 14 Pro"],
});

test("test", async ({ page, context }) => {
  await context.tracing.start({
    screenshots: true,
    snapshots: true,
  });

  await page.goto("https://www.google.com/?gws_rd=ssl");
  await page.getByRole("textbox", { name: "Google Search" }).click();
  await page.getByRole("textbox", { name: "Google Search" }).fill("love");
  await page.getByRole("button", { name: "Clear Search" }).click();
  await page.getByLabel("Back").click();

  await context.tracing.stop({
    path: "trace.zip",
  });
});
