import webdriver from "selenium-webdriver";
const { until, Key, By } = webdriver;
import { EventPageLocators as locators } from "../locators/app.locators.js";
import { generateAppVariables } from "../utils/config.js";

const appVariables = generateAppVariables();

/**
 * Main function to create an event.
 * Returns true if the event was created successfully.
 */
export async function createEventFlow(driver) {
  try {
    const btnReady = await waitForCreateEventBtn(driver);
    if (!btnReady) return false;

    const clicked = await clickCreateEventBtn(driver);
    if (!clicked) return false;

    const filled = await fillEventForm(driver);
    if (!filled) return false;

    const okClicked = await clickOkBtn(driver);
    return okClicked;
  } catch (err) {
    console.error("❌ Event creation flow failed:", err);
    return false;
  }
}

/**
 * Wait until Create Event button is visible.
 */
export async function waitForCreateEventBtn(driver) {
  try {
    const createBtn = await driver.wait(
      until.elementLocated(locators.createEventBtn),
      10000
    );
    await driver.wait(until.elementIsVisible(createBtn), 5000);
    console.log("✅ Create Event button is visible");
    return true;
  } catch (err) {
    console.error("❌ Create Event button not visible:", err);
    return false;
  }
}

/**
 * Click the Create Event button.
 */
export async function clickCreateEventBtn(driver) {
  try {
    const createBtn = await driver.findElement(locators.createEventBtn);
    await createBtn.click();
    console.log("✅ Create Event button clicked");
    return true;
  } catch (err) {
    console.error("❌ Failed to click Create Event button:", err);
    return false;
  }
}

/**
 * Fill the event form fields.
 */
export async function fillEventForm(driver) {
  try {
    const {
      name,
      proposedLocation,
      description,
      email,
      monthInput,
      yearInput,
      sponsorName,
      fee,
      dayInput,
    } = appVariables;

    // Name
    const nameInput = await driver.wait(until.elementLocated(locators.nameInput), 5000);
    await nameInput.clear();
    await nameInput.sendKeys(name);
    console.log(`✅ Name entered: ${name}`);

    // Proposed location
    const locationInput = await driver.findElement(locators.proposedLocationInput);
    await locationInput.clear();
    await locationInput.sendKeys(proposedLocation);
    console.log(`✅ Proposed location entered: ${proposedLocation}`);

    // Wait for description editor
    await driver.sleep(1500);

    const descBox = await driver.wait(
      until.elementLocated(
        By.css("div[contenteditable='true'][data-automation-id='richTextContent'][aria-label='Description']")
      ),
      10000
    );
    await driver.wait(until.elementIsVisible(descBox), 5000);
    await descBox.click();
    await descBox.sendKeys(description);
    console.log(`✅ Description entered: ${description}`);

    // Date fields
    const monthField = await driver.findElement(locators.monthInput);
    await monthField.clear();
    await monthField.sendKeys(monthInput);
    console.log(`📅 Month entered: ${monthInput}`);

    const dayField = await driver.findElement(locators.dayInput);
    await dayField.clear();
    await dayField.sendKeys(dayInput);
    console.log(`📅 Day entered: ${dayInput}`);

    const yearField = await driver.findElement(locators.yearInput);
    await yearField.clear();
    await yearField.sendKeys(yearInput);
    console.log(`📅 Year entered: ${yearInput}`);

    // Email
    const emailField = await driver.findElement(locators.emailInput);
    await emailField.clear();
    await emailField.sendKeys(email);
    console.log(`✅ Email entered: ${email}`);

    // Sponsor Name
    const sponsorField = await driver.findElement(locators.sponsorNameInput);
    await sponsorField.clear();
    await sponsorField.sendKeys(sponsorName);
    console.log(`✅ Sponsor entered: ${sponsorName}`);

    // Fee
    const feeField = await driver.findElement(locators.feeInput);
    await feeField.clear();
    await feeField.sendKeys(fee);
    console.log(`✅ Fee entered: ${fee}`);

    return true;
  } catch (err) {
    console.error("❌ Failed to fill event form:", err);
    return false;
  }
}

/**
 * Click the OK button to submit the event.
 */
export async function clickOkBtn(driver) {
  try {
    const okBtn = await driver.findElement(locators.okBtn);
    await okBtn.click();
    console.log("✅ OK button clicked, event submitted");
    return true;
  } catch (err) {
    console.error("❌ Failed to click OK button:", err);
    return false;
  }
}

/**
 * Give Kudos to an employee.
 */
export async function giveKudos(driver) {
  try {
    const { employeeName, kudosDescription } = appVariables;

    const kudosBtn = await driver.wait(until.elementLocated(locators.giveKudosBtn), 10000);
    await driver.wait(until.elementIsVisible(kudosBtn), 5000);
    await kudosBtn.click();
    console.log("✅ Clicked on 'Give Kudos' button");

    const searchInput = await driver.wait(until.elementLocated(locators.searchEmployeeInput), 10000);
    await driver.wait(until.elementIsVisible(searchInput), 5000);
    await searchInput.clear();
    await searchInput.sendKeys(employeeName);
    await searchInput.sendKeys(Key.ENTER);
    console.log(`✅ Entered and confirmed employee: ${employeeName}`);

    await driver.sleep(3000);

    const descBox = await driver.wait(until.elementLocated(locators.employeeDescriptionInput), 10000);
    await driver.wait(until.elementIsVisible(descBox), 5000);
    await descBox.clear();
    await descBox.sendKeys(kudosDescription);
    console.log(`✅ Entered Kudos description: ${kudosDescription}`);

    const okBtn = await driver.wait(until.elementLocated(locators.clickOkBtn), 10000);
    await driver.wait(until.elementIsVisible(okBtn), 5000);
    await okBtn.click();
    console.log("✅ Clicked OK to submit Kudos");

    return true;
  } catch (err) {
    console.error("❌ Failed to give Kudos:", err);
    return false;
  }
}
