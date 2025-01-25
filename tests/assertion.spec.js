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
test("Soft Assertion Demo", async ({ page }) => {
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

//Text matches/not matches value
test("Text matches/not matches value Demo", async ({ page }) => {
  await page.goto("https://www.getty.edu/");

  await page.pause();

  await page.getByText("Art & Archives").click();
  //Text matches
  await expect(page.getByText("Art & Archives")).toHaveText("Art & Archives");

  //Text not matches
  await expect(page.getByText("Art & Archives")).not.toHaveText("pepe");
});

//Element attribute
test("Element attribute Demo", async ({ page }) => {
  await page.goto("https://www.getty.edu/");

  await page.pause();

  //to have attribute
  await expect
    .soft(
      page.getByText(
        "Foundations and Arts Organizations Create $12M LA Arts Community Fire Relief Fund"
      )
    )
    .toHaveAttribute("class", "a-rich-text a-rich-text--inline");
  await page
    .getByText(
      "Foundations and Arts Organizations Create $12M LA Arts Community Fire Relief Fund"
    )
    .click();

  const links = await page.getByRole("link", { name: "Hammer Museum" });
  await links.click();

  // TO Have Attribute
  await expect(
    page.getByAltText("Sepia-toned print of the American flag")
  ).toHaveAttribute("loading", "eager");
});

//URL and Title
test("URL and Title Demo", async ({ page }) => {
  await page.goto("https://www.getty.edu/");

  await page.pause();

  const svgs = await page
    .getByRole("contentinfo")
    .locator("div")
    .filter({ hasText: "Social Navigation See all" })
    .getByRole("img")
    .nth(4);

  //Page
  await expect(page).toHaveURL("https://www.getty.edu/");

  //Title
  await expect(page).toHaveTitle(
    "Getty: Resources for Visual Art and Cultural Heritage"
  );

  await svgs.click();
});

//Screenshot
test.only("Screenshot Demo", async ({ page }) => {
  await page.goto("https://www.getty.edu/");

  await page.pause();
  await expect(page).toHaveScreenshot();
});
