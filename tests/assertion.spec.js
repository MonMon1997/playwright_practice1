import { test, expect } from "@playwright/test";

//Present/Not Present
test("Present/Not Demo", async ({ page }) => {
  await page.goto("https://www.getty.edu/");
  await page.pause();

  await page.getByRole("button", { name: "Research & Conservation" }).click();
  await page.getByRole("link", { name: "Overview" }).click();

  //to be visible
  const find = await page.getByRole("link", { name: "Find your tool" });
  await expect(find).toBeVisible();
  await find.click();

  //to have count
  await expect(
    page.getByText(
      "The Library will re-open to the public on Tuesday January 28."
    )
  ).toHaveCount(1);
});

//Visible/Hidden
test("Visible/Hidden Demo", async ({ page }) => {
  await page.goto("https://www.getty.edu/");

  await page.pause();

  //Visible
  await expect(
    page.getByText(
      "Inspiring human connections and mutual understanding through art"
    )
  ).toBeVisible();

  //Hidden (Should be fail)
  await expect(
    page.getByText(
      "Inspiring human connections and mutual understanding through art"
    )
  ).toBeHidden();
});

//Enable/Disable
test("Enable/Diable Demo", async ({ page }) => {
  await page.goto("https://www.getty.edu/");

  await page.pause();

  //Enable
  await expect(
    page.getByLabel("Search the Getty Website", { exact: true })
  ).toBeEnabled();

  //Disable (Should be fail)
  await expect(
    page.getByLabel("Search the Getty Website", { exact: true })
  ).toBeDisabled();
});

//Soft Assertion
test.only("Soft Assertion Demo", async ({ page }) => {
  await page.goto("https://www.getty.edu/");

  await page.pause();

  //Visible
  await expect(
    page.getByText(
      "Inspiring human connections and mutual understanding through art"
    )
  ).toBeVisible();

  //Hidden (Should be fail) with soft assert
  await expect
    .soft(
      page.getByText(
        "Inspiring human connections and mutual understanding through art"
      )
    )
    .toBeHidden();

  //Enable
  await expect(
    page.getByLabel("Search the Getty Website", { exact: true })
  ).toBeEnabled();

  //Disable (Should be fail) with soft assert
  await expect(
    page.getByLabel("Search the Getty Website", { exact: true })
  ).toBeDisabled();
});
