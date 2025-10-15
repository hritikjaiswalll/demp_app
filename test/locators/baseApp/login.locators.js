import { By } from "selenium-webdriver";

export const LoginLocators = {
 
  workdayCredsBtn: By.xpath(
    "//div[@role='menuitem' and @data-automation-id='authSelectorOption']//div[@data-automation-id='authSelectorOptionLabel' and normalize-space(text())='Workday Native Credintials']"
  ),

 
  username: By.xpath("//input[@type='text' and @aria-label='Username']"),

 
  password: By.xpath("//input[@type='password' and @aria-label='Password']"),

 
  loginBtn: By.xpath("//button[@type='button' and @data-automation-id='goButton']"),

 
  errorDivXpath: By.xpath("//div[@data-automation-id='alertMessage']"),
};
