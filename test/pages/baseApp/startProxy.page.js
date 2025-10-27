import { By, until, Key } from "selenium-webdriver";
import { startProxyLocators as locators } from "../../locators/baseApp/startProxy.locators.js";
import { proxyUrl, users } from "../../utils/config.js";


export async function startProxyFlow(driver) {
  console.log("Starting Proxy Flow");
    await driver.get(proxyUrl);
  const input = await driver.wait(until.elementLocated(locators.proxyInput), 10000);
  await driver.wait(until.elementIsVisible(input), 5000);
  await input.clear();
  await input.sendKeys(users.standard.proxyName, Key.RETURN);
  await driver.sleep(2000);
  const okButton = await driver.wait(until.elementLocated(locators.okBtn), 10000);
  await driver.wait(until.elementIsVisible(okButton), 5000);
  await okButton.click();
  await driver.sleep(3000);
  return true;
}
