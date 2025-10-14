import { until } from "selenium-webdriver";

export async function click(driver, locator) {
  await driver.wait(until.elementLocated(locator), 5000);
  await driver.findElement(locator).click();
}

export async function type(driver, locator, text) {
  await driver.wait(until.elementLocated(locator), 5000);
  const el = await driver.findElement(locator);
  await el.clear();
  await el.sendKeys(text);
}

export async function getText(driver, locator) {
  const el = await driver.findElement(locator);
  return await el.getText();
}
