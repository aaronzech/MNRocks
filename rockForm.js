"use strict"
const issueForm = document.getElementById('issue-form');
issueForm.addEventListener('submit', createIssue);

// Create a new rock dispaly it to the page
function createIssue(event) {
  event.preventDefault();
  const id = chance.guid();
  const painterName = document.getElementById('painter-name').value;
  const filePath1 = document.getElementById('file-path-1').value;
  const dateHid = document.getElementById('date-hid').value;
  const filePath2 = document.getElementById('file-path-2').value;
  const mapLocation = document.getElementById('map-location').value;
  const status = 'Open';

 

 // Need to work on passing and sharing variables and functions betweeen pages
  
  rockPhotos.push(filePath1);
  rockPhotos.push(filePath2);
  rockLocations.push(mapLocation);

 

  console.log(rock);

  issueForm.reset();
  issueForm.querySelector('#issue-desc').focus();
}







