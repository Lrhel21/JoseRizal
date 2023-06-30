
// Get the necessary elements from the HTML
const HomeButton = document.querySelector('.navigation li:nth-child(1) a');
const HomeSection = document.querySelector('.Home');

// Add event listener to the about button
HomeButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  
  // Scroll to the about section
  HomeSection.scrollIntoView({ behavior: 'smooth' });
});

// Get the necessary elements from the HTML
const aboutButton = document.querySelector('.navigation li:nth-child(2) a');
const aboutSection = document.querySelector('.About');

// Add event listener to the about button
aboutButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  
  // Scroll to the about section
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});
// Get the necessary elements from the HTML
const ContactButton = document.querySelector('.navigation li:nth-child(3) a');
const ContactSection = document.querySelector('.Contact');

// Add event listener to the about button
ContactButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  
  // Scroll to the about section
  ContactSection.scrollIntoView({ behavior: 'smooth' });
});

function showPopupList() {
    var popupList = document.querySelector(".PopL");
    popupList.style.display = "block";
  }

  function hidePopupList() {
    var popupList = document.querySelector(".PopL");
    popupList.style.display = "none";
  }


