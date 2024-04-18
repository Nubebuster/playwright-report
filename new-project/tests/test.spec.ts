import { expect, test } from "@playwright/test";

test("page loads", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.getByText("Vite + React")).toBeVisible();

  await page.pause();
});
