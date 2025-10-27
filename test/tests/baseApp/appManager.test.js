import { expect } from "chai";
import { createDriver } from "../../utils/driver.js";
import { baseUrl, users } from "../../utils/config.js";
import { appManagerTest } from "../../pages/baseApp/appManager.page.js";
import { customTaskSearch } from "../../pages/baseApp/customTask.page.js";
import { performLogin } from "../../pages/baseApp/login.page.js";
import { startProxyFlow } from "../../pages/baseApp/startProxy.page.js";

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
    // const proxy = await startProxyFlow(driver);
    // console.log("DEBUG: Homepage test result =", proxy);
    // expect(proxy).to.be.true;
    const result = await customTaskSearch(driver,users.standard.customTaskName);
    console.log("DEBUG: Homepage test result =", result);
    expect(result).to.be.true;
  });
});
