import { performLogin } from "../pages/login.page.js";
import { createDriver } from "../utils/driver.js";
import { baseUrl } from "../utils/config.js";

export function loginTestSuite(suiteName = "Login on Workday Tenant 3") {
  describe(suiteName, function () {
    this.timeout(30000);
    let driver;

    before(async () => {
      driver = await createDriver();
      await driver.get(baseUrl);
    });

    after();

    it("should login successfully", async () => {
      await performLogin(driver);
    });
  });
}

// ✅ Call it so Mocha registers tests
loginTestSuite();
