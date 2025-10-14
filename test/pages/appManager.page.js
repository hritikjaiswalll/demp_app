import webdriver from "selenium-webdriver";
const { until, Key } = webdriver;
import { HomepageLocators as locators } from "../locators/appManager.locators.js";
import { users } from "../utils/config.js";

/**
 * Combined test to verify homepage and perform search.
 * Returns true if both steps succeed.
 */
export async function appManagerTest(driver) {
  console.log("DEBUG: users.standard.searchTerm =", users?.standard?.searchTerm);

  const homepageOk = await verifyHomePage(driver);
  if (!homepageOk) return false;

  const searchOk = await searchForItem(driver, users.standard.searchTerm);
  if (searchOk) {
    const appManagerBar = await driver.wait(
      until.elementLocated(locators.appManagerBtn),
      10000
    );
    await appManagerBar.click();
    //await driver.sleep(10000);
    console.log("DEBUG",users.standard.appName);
    const input = await searchApp(driver, users.standard.appName);
    return input;
  } else {
    return false;
  }
}

/**
 * Verify homepage key elements are visible.
 */
async function verifyHomePage(driver) {
  try {
    await driver.sleep(3000);
    const logo = await driver.wait(until.elementLocated(locators.logo), 10000);
    await driver.wait(until.elementIsVisible(logo), 5000);
    const searchBar = await driver.wait(until.elementLocated(locators.searchBar), 10000);
    await driver.wait(until.elementIsVisible(searchBar), 5000);

    const userBtn = await driver.wait(until.elementLocated(locators.userButton), 10000);
    await driver.wait(until.elementIsVisible(userBtn), 5000);

    console.log("✅ Homepage verified successfully");
    return true;
  } catch (err) {
    console.log("❌ Homepage verification failed", err);
    return false;
  }
}
async function searchApp(driver, searchAppName) {
  try {
    
    const searchBtn = await driver.wait(
      until.elementLocated(locators.appNameButton),
      10000
    );
    await searchBtn.click();
    console.log("DEBUG: App Name button clicked");
    const input = await driver.wait(
      until.elementLocated(locators.appSearchInput),
      5000
    );
    await driver.wait(until.elementIsVisible(input), 5000);

    await input.clear();
    console.log("DEBUG: Search input cleared");
    await input.sendKeys(searchAppName, Key.RETURN);
    console.log(`🔍 Searched for: ${searchAppName}`);
    const filterBtn = await driver.findElement(locators.filterButton);
    await filterBtn.click();
    console.log("DEBUG: Filter button clicked");
    console.log(`🔍 Searched for: ${searchAppName}`);
    await driver.sleep(4000);
    const viewApp = await driver.wait(
      until.elementLocated(locators.viewApp),
      10000
    );
    await viewApp.click();
    await driver.sleep(6000);
    return true;

  } catch (err) {
    console.error("❌ Search failed:", err);
    return false;
  }
}

/**
 * Search for a specific term in the homepage search bar.
 */
async function searchForItem(driver, searchTerm) {
  try {
    console.log("DEBUG: Starting search for term =", searchTerm);
    // Wait for the search container and click it
    await driver.sleep(3000);
    const searchContainer = await driver.wait(
      until.elementLocated(locators.searchBar),
      10000
    );
    await driver.wait(until.elementIsVisible(searchContainer), 5000);
    await searchContainer.click();
    console.log("DEBUG: Search container clicked");

    // Wait for the actual input element **after click**, not before
    const input = await driver.wait(
      until.elementLocated({ css: 'input[data-automation-id="globalSearchInput"]' }),
      5000
    );
    await driver.wait(until.elementIsVisible(input), 5000);

    await input.clear();
    console.log("DEBUG: Search input cleared");
    await input.sendKeys(searchTerm, Key.RETURN);
    console.log(`🔍 Searched for: ${searchTerm}`);
    const waiting = await driver.wait(until.elementLocated(locators.topResultBtn), 10000);
    if (waiting) {
      return true;
    }
    else {
      return false;
    }

  } catch (err) {
    console.error("❌ Search failed:", err);
    return false;
  }
}
// different naming convention for pages 