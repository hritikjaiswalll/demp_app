import { expect } from "chai";
import { createDriver } from "../utils/driver.js";
import { baseUrl } from "../utils/config.js";
import { appManagerTest } from "../pages/appManager.page.js";
import { performLogin } from "../pages/login.page.js";

describe("App Manager verification after login", function () {
  this.timeout(90000); // different method 
  let driver;

  before(async () => {
    driver = await createDriver();
    await driver.get(baseUrl);
    await performLogin(driver); // ✅ Login executed before homepage test
  });

  after(async () => {
    await driver.quit();
  });

  it("should open the app after login", async () => {
       const result = await appManagerTest(driver);
       console.log("DEBUG: Homepage test result =", result); 
       expect(result).to.be.true;
  });
});
