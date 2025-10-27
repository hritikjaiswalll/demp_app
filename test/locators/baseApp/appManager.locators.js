import { By } from "selenium-webdriver";

export const HomepageLocators = {
  logo:  By.css("svg.wd-icon-workday"),
  searchBar: By.css('input[data-automation-id="globalSearchInput"]'),
  // searchBar: By.css('div[data-automation-id="searchInputSearchIcon"] svg.wd-icon-search'),
  userButton: By.xpath("//button[@data-automation-id='Current_User']"),
  topResultBtn: By.css('button[data-automation-id="pex-simplified-search-nav-pill-all:default"]'),
  appManagerBtn: By.xpath('//a[@data-automation-id="pex-search-results-header-title-link" and normalize-space(text())="App Manager"]'),
  appNameButton: By.xpath('//button[@data-automation-id="buttonHeader101.1" and .//span[normalize-space(text())="App Name"]]'),
  appSearchInput: By.css('input[data-automation-id="textInputBox"]'),
  filterButton: By.css('button[data-automation-id="uic_filterButton"]'),
  viewApp: By.css('div[data-automation-label="View App"]'),
  topSearchIcon: By.css('div.wdappchrome-aan > svg.wd-icon-search'),
  searchBox : By.css('[data-automation-id="globalSearchInput"]'),
  profileIcon : By.css('[data-automation-id="Current_User"]'),
  searchResultList : By.css('li.pexsearch-1kpw85o-listItem'),
  searchResultItem : By.css('a[data-automation-id="pex-search-results-header-title-link"]'),
  proxyBanner : By.xpath("//div[@data-automation-id='banner']//span[contains(text(), 'On behalf of')]")
};
//  css: 'input[data-automation-id="globalSearchInput"]' 