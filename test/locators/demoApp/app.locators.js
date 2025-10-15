import { By } from "selenium-webdriver";

export const EventPageLocators = {

  createEventBtn: By.xpath("//button[@type='button' and @title='Create Event' and @aria-label='Create Event']//span[normalize-space(text())='Create Event']"),
  nameInput: By.xpath("//input[@type='text' and @data-automation-id='textInputBox' and contains(@id, 'textInput.1f1f74b1cedb6d0f')]"),
  proposedLocationInput: By.xpath("//input[@type='text' and @data-automation-id='textInputBox' and contains(@id, 'textInput.380a887004e75751')]"),
  descriptionInput: By.xpath("//div[@role='textbox' and @data-automation-id='richTextContent' and @aria-label='Description']"),
  emailInput: By.xpath("//input[@type='text' and @data-automation-id='textInputBox' and contains(@id, 'textInput.898f969c97761509')]"),
  monthInput: By.css("input[data-automation-id='dateSectionMonth-input'][placeholder='MM']"),
  dayInput: By.css("input[data-automation-id='dateSectionDay-input'][placeholder='DD']"),
  yearInput: By.css("input[data-automation-id='dateSectionYear-input'][placeholder='YYYY']"),
  sponsorNameInput: By.xpath("/html/body/div[2]/div/div/div/section[1]/div/div/div/div[2]/div[1]/section/div[1]/div/div/div[1]/div/div/ul/li[4]/div[2]/div/div/input"),
  feeInput: By.xpath("/html/body/div[2]/div/div/div/section[1]/div/div/div/div[2]/div[1]/section/div[1]/div/div/div[1]/div/div/ul/li[7]/div[2]/div/div/input"),
  okBtn: By.xpath("//span[@title='OK' and normalize-space(text())='OK']"),
  giveKudosBtn: By.xpath("//button[@type='button' and @title='Give Kudos' and @aria-label='Give Kudos']//span[normalize-space(text())='Give Kudos']"),
  searchEmployeeInput: By.xpath("//input[@placeholder='Search' and contains(@id, 'monikerListInput') and @data-uxi-widget-type='selectinput']"),
  employeeDescriptionInput: By.xpath("//textarea[@data-automation-id='textAreaField' and @role='textbox']"),
  clickOkBtn: By.xpath("//button[@type='button' and @title='OK' and @data-automation-id='wd-CommandButton_uic_okButton']//span[normalize-space(text())='OK']")
};

//test
