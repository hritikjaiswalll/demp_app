import { By } from "selenium-webdriver";

export const startProxyLocators = {
 
  proxyInput: By.css('input[data-uxi-widget-type="selectinput"][placeholder="Search"]'),
  okBtn: By.css('button[data-automation-id="wd-CommandButton_uic_okButton"]')
};
