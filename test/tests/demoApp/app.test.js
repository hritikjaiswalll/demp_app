import { expect } from "chai";
import { createDriver } from "../../utils/driver.js";
import { baseUrl } from "../../utils/config.js";
import { appManagerTest } from "../../pages/baseApp/appManager.page.js";
import { performLogin } from "../../pages/baseApp/login.page.js";
import { waitForCreateEventBtn, clickCreateEventBtn, fillEventForm, clickOkBtn, giveKudos } from "../../pages/demoApp/app.page.js";

describe("App Manager Verification Flow", function () {
  this.timeout(120000); // 2 minutes
  console.log("DEBUG: app.test.js loaded!");
  let driver;

  before(async () => {
    driver = await createDriver();
    await driver.get(baseUrl);
    await performLogin(driver);
    await appManagerTest(driver);

    const handles = await driver.getAllWindowHandles();
    await driver.switchTo().window(handles[handles.length - 1]);
  });

  after(async () => {
    await driver.quit();
  });

  it("should verify the homepage of the app", async () => {
    const result = await waitForCreateEventBtn(driver);
    expect(result).to.be.true;
  });

  it("should click on Create Event Button", async () => {
    const result = await clickCreateEventBtn(driver);
    expect(result).to.be.true;
  });

  it("should fill the Form of Event", async () => {
    const result = await fillEventForm(driver);
    expect(result).to.be.true;
  });

  it("should Click ok", async () => {
    const result = await clickOkBtn(driver);
    expect(result).to.be.true;
  });

  it("should give a kudos to an employee", async () => {
    const result = await giveKudos(driver);
    expect(result).to.be.true;
  });
});
