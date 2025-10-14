import { Builder } from "selenium-webdriver";
import { ServiceBuilder, Options } from "selenium-webdriver/chrome.js";

// const chromeDriverPath = "C:\\Users\\JagritChawla\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe";
export async function createDriver() {
  // const service = new ServiceBuilder(chromeDriverPath);
  // const options = new Options();
  // return await new Builder()
  //   .forBrowser("chrome")
  //   .setChromeService(service)
  //   .setChromeOptions(options)
  //   .build();
   return await new Builder().forBrowser('chrome').build();
}
