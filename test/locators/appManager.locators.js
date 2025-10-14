import { By } from "selenium-webdriver";

export const HomepageLocators = {
  logo:  By.css("svg.wd-icon-workday"),
  searchBar: By.css('input[data-automation-id="globalSearchInput"]'),
  userButton: By.xpath("//button[@data-automation-id='Current_User']"),
  topResultBtn: By.css('button[data-automation-id="pex-simplified-search-nav-pill-all:default"]'),
  appManagerBtn: By.xpath('//a[@data-automation-id="pex-search-results-header-title-link" and normalize-space(text())="App Manager"]'),
  appNameButton: By.xpath('//button[@data-automation-id="buttonHeader101.1" and .//span[normalize-space(text())="App Name"]]'),
  appSearchInput: By.css('input[data-automation-id="textInputBox"]'),
  filterButton: By.css('button[data-automation-id="uic_filterButton"]'),
  viewApp: By.css('div[data-automation-label="View App"]')
};
