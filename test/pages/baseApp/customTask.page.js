import fs from "fs";
import webdriver from "selenium-webdriver";
const { until, Key } = webdriver;
import { HomepageLocators as locators } from "../../locators/baseApp/appManager.locators.js";
import {customTaskLocators as customLocators} from "../../locators/baseApp/customTask.locators.js"
import { users } from "../../utils/config.js";
import { getLinkByVisibleTextContains, click, type, getText } from "../../utils/helpers.js";
import path from "path";


// export async function customTaskTest(driver) {
//   console.log("DEBUG: users.standard.searchTerm =", users?.standard?.customTaskName);
//   // const searchOk = await searchForItem(driver, users.standard.customTaskName);
//   // if (searchOk) {
//   //   console.log("DEBUG: Search successful, proceeding to locate custom task");
//   //   await driver.sleep(3000); // Wait for search results to load
//   //   const dynamicElement = getLinkByVisibleTextContains(users.standard.customTaskName);
//   //   console.log("DEBUG: Dynamic element locator =", dynamicElement);
//   //   const customTask = await driver.wait(
//   //     until.elementLocated(dynamicElement),
//   //     10000
//   //   );
//   //   await customTask.click();

//   //   console.log("DEBUG",users.standard.appName);
//   //   // const input = await searchApp(driver, users.standard.appName);
//   //   return input;
//   // } else {
//   //   return false;
//   // }
  
// }

async function searchForItem(driver, searchTerm) {
  try {
    console.log("DEBUG: Starting search for term =", searchTerm);
    await driver.sleep(3000);
    const searchContainer = await driver.wait(
      until.elementLocated(locators.searchBar),
      10000
    );
    console.log("DEBUG: Search container located");
    await driver.sleep(3000);
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
    const waiting = await driver.wait(until.elementLocated(locators.searchBar), 10000);
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
export async function customTaskSearch(driver, text, timeout = 15000) {
   await driver.sleep(1000);
  await click(driver, locators.searchBox);
  await driver.sleep(1000);
  await type(driver, locators.searchBox, text);
  const searchBox = await driver.findElement(locators.searchBox);
  await driver.sleep(1000);
  await searchBox.sendKeys(Key.RETURN);
  //await click(driver,locators.searchIcon);
  let listItems=[];
  try {
    await driver.wait(
      until.elementsLocated(locators.searchResultList),
      timeout
    );
    console.log("DEBUG: Search results located");
    listItems = await driver.findElements(locators.searchResultList);
    console.log(`DEBUG: Number of search results found: ${listItems.length}`);
  }catch(err){
    throw new Error(`No search results found for "${text}"`);
  }
  
  for (const item of listItems) {
    try {
      const anchor = await item.findElement(locators.searchResultItem);
      console.log("DEBUG: Found search result item");
      const resultText = await anchor.getText();
      if (resultText.trim().toLowerCase() === text.trim().toLowerCase()) {
        await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", anchor);
        await driver.sleep(300); // optional: helps in case of animations or delayed render
        await anchor.click();
        console.log(`✅ Found and clicked on search result: "${text}"`);
        return; // stop after finding the match
      }
    } catch (e) {
      continue; // skip to next item if anything fails
    }
  }
  throw new Error(`Search result "${text}" not found`);
}