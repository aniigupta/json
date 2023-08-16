import jsonData from './data.json';  // Make sure to provide the correct path to your data.js file

// Access the properties from the JSON data
const name = jsonData.Name;
const rollNo = jsonData['Roll No'];
const pass = jsonData.Pass;
const year = jsonData.year;

// Display the data
const container = document.getElementById('contentContainer');

const nameElement = document.createElement('div');
nameElement.textContent = `Name: ${name}`;
container.appendChild(nameElement);

const rollNoElement = document.createElement('div');
rollNoElement.textContent = `Roll No: ${rollNo}`;
container.appendChild(rollNoElement);

const passElement = document.createElement('div');
passElement.textContent = `Pass: ${pass}`;
container.appendChild(passElement);

const yearElement = document.createElement('div');
yearElement.textContent = `Year: ${year}`;
container.appendChild(yearElement);
