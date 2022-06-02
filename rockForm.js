"use strict"
const rockForm = document.getElementById('rock-form');
rockForm.addEventListener('submit', createRock);

// Create a new rock dispaly it to the page
function createRock(event) {
  event.preventDefault();
  const id = chance.guid();
  const painterName = document.getElementById('painter-name').value;
  const filePath1 = document.getElementById('file-path-1').value;
  const dateHid = document.getElementById('date-hid').value;
  const filePath2 = document.getElementById('file-path-2').value;
  const mapLocation = document.getElementById('map-location').value;


 

 // Need to work on passing and sharing variables and functions betweeen pages
 // save to local stoarge 
  localStorage.setItem("File Path 1","/rocks/"+filePath1+".jpg");
  localStorage.setItem("File Path 2","/rocks/"+filePath2+".jpg");
  localStorage.setItem("painter name",painterName);
  localStorage.setItem("date hid",dateHid);
  localStorage.setItem("mapLocation",mapLocation);

  rockForm.reset();
  //rockForm.querySelector('#issue-desc').focus();
}







