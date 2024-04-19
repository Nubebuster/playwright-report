import { expect, test } from "@playwright/test";

test("page loads", async ({ page }) => {
  // await page.goto("http://localhost:5173/");

  await page.goto("https://playwright.dev/");

  await expect(page.getByText("enables reliable")).toBeVisible();

  // await page.pause();
});
