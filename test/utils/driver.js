
import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

export async function createDriver() {
  const options = new chrome.Options();

  // ✅ Use the new headless mode (recommended for Chrome 109+)
  options.addArguments("--headless=new");

  // ✅ Explicit 1080p resolution
  options.addArguments("--window-size=1920,1080");

  // ✅ Stability flags for CI/CD
  options.addArguments("--no-sandbox");
  options.addArguments("--disable-dev-shm-usage");
  options.addArguments("--disable-gpu"); // optional but improves consistency
  options.addArguments("--disable-infobars");
  options.addArguments("--disable-extensions");
  options.addArguments("--disable-notifications");

  // ✅ Optional: Set a user-agent for realism
  options.addArguments(
    "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.70 Safari/537.36"
  );

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  // ⚠️ .maximize() won’t work in headless, window-size controls the viewport
  console.log("✅ Headless Chrome launched in 1920x1080 resolution");

  return driver;
}
