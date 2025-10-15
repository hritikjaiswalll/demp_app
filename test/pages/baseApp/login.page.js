import { By, until } from "selenium-webdriver";
import { click, type } from "../../utils/helpers.js";
import { LoginLocators as locators } from "../../locators/baseApp/login.locators.js";
import { users } from "../../utils/config.js";

export async function clickWorkdayCredsBtn(driver) {
  const element = await driver.wait(until.elementLocated(locators.workdayCredsBtn), 10000);
  await driver.wait(until.elementIsVisible(element), 5000);
  await element.click();
}
export async function performLogin(driver) {
  await clickWorkdayCredsBtn(driver);
  const success = await login(driver, users.standard.username, users.standard.password);
  if (!success) throw new Error("Login failed");
  return true;
}

 async function login(driver, username, password) {
  await type(driver, locators.username, username);
  await type(driver, locators.password, password);
  await click(driver, locators.loginBtn);

  // ✅ Proper async delay (not setTimeout)
  await driver.sleep(3000);

  try {
    // ✅ Wait for error div (if login fails)
    const errorElement = await driver.wait(
      until.elementLocated(locators.errorDivXpath),
      5000
    );

    if (await errorElement.isDisplayed()) {
      console.log("❌ Login failed - error message displayed");
      return false;
    }
  } catch (e) {
    // If element not found → no error visible
    console.log("✅ Login successful");
    return true;
  }

  // Fallback
  console.log("✅ Login successful");
  return true;
}

