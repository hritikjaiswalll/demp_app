import { By } from "selenium-webdriver";

export const customTaskLocators = {
 
  proxyInput: By.css('input[data-uxi-widget-type="selectinput"][placeholder="Search"]'),
  okBtn: By.css('button[data-automation-id="wd-CommandButton_uic_okButton"]'),
  searchBox : By.css('[data-automation-id="globalSearchInput"]'),
  profileIcon : By.css('[data-automation-id="Current_User"]'),
  searchResultList : By.css('li.pexsearch-1kpw85o-listItem'),
  searchResultItem : By.css('a[data-automation-id="pex-search-results-header-title-link"]'),
};