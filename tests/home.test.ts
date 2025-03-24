import { test, expect } from '@playwright/test';

test('has Vite text', async ({ page }) => {
    await page.goto('http://localhost:4173');

    await expect(page.getByText(/Click on the Vite/)).toBeVisible();
});
