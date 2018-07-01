
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/cat.jpg') {
      myImage.setAttribute('src','images/cat3.jpg');  
    } else {
      myImage.setAttribute('src','images/cat.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = '🐱 is the cuttest creature on the earth, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = '🐱 is the cuttest creature on the earth, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}