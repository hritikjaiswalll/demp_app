export const baseUrl = "https://wcpdev.wd101.myworkday.com/maksegroup_wcpdev2/d/home.htmld";
export const proxyUrl = "https://wcpdev.wd101.myworkday.com/maksegroup_wcpdev2/d/task/2997$6729.htmld"

export const users = {
  standard: {
    username: "hritik.jaiswal@maksegroup.com",
    password: "Hritik@0987",
    searchTerm: "App Manager",
    appName: "TRAINING: Manish Sharma (CRUD App)",
    proxyName: "Logan Mcneil",
    customTaskName: "Activate Pending Security Policies"
  }
};

// export const appVariables = {
//   name: "Event from Automation 2",
//   proposedLocation: "New York 2",
//   description: "This is a test event created by automation script 2.",
//   eventDate: "12122025",
//   email: "arpit2.singh@maksegroup.com",
//   employeeName: "Alanna",
//   kudosDescription: "Great job on the recent project!",
//   dayInput: "12",
//   monthInput: "12",
//   yearInput: "2025",
//   sponsorName: "Automation Sponsor",
//   fee: "50"
// }
// utils/dataGenerator.js
import { faker } from "@faker-js/faker";

export function generateAppVariables() {
  const randomSuffix = faker.number.int({ min: 1000, max: 9999 });
  const randomName = faker.person.firstName();
  const randomLocation = faker.location.city();
  const randomEmail = faker.internet.email(randomName.toLowerCase(), "test", "maksegroup.com");
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear() + 1; // next year for future events

  // ✅ your static employee name
  const employeeName = "Aaron";

  return {
    name: `Automation Event ${randomSuffix}`,
    proposedLocation: randomLocation,
    description: `This is a test event created automatically for ${randomName}.`,
    eventDate: `${month}${day}${year}`,
    email: randomEmail,
    employeeName,
    kudosDescription: `Kudos to ${employeeName} for their excellent work on project ${faker.commerce.product()}.`,
    dayInput: day,
    monthInput: month,
    yearInput: String(year),
    sponsorName: `Sponsor ${randomSuffix}`,
    fee: faker.number.int({ min: 10, max: 500 }).toString(),
  };
}