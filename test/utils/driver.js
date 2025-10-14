import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

/**
 * Creates and returns a Chrome WebDriver instance.
 * Automatically detects if running in CI (GitHub Actions)
 * and switches to headless mode.
 */
export async function createDriver() {
  const options = new chrome.Options();

  // ✅ Always run in headless mode in CI (GitHub Actions)
  if (process.env.CI) {
    options.addArguments("--headless=new");yl
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");
    options.addArguments("--disable-gpu");
    options.addArguments("--window-size=1920,1080");
  }

  // ✅ Optional: helps avoid notification popups etc.
  options.addArguments("--disable-notifications");
  options.addArguments("--disable-extensions");

  // ✅ Build driver
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  return driver;
}
//test comeent 
