function showPopupList() {
    var popupList = document.querySelector(".Drpdl");
    popupList.style.display = "block";
  }

  function hidePopupList() {
    var popupList = document.querySelector(".Drpdl");
    popupList.style.display = "none";
  }

const BiButton = document.querySelector('.Drpdl li:nth-child(3) a');
const BiSection = document.querySelector('.BP');

BiButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  

  BiSection.scrollIntoView({ behavior: 'smooth' });
});

const RFButton = document.querySelector('.Drpdl li:nth-child(5) a');
const RFSection = document.querySelector('.RF');

RFButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  

  RFSection.scrollIntoView({ behavior: 'smooth' });
});

const ECButton = document.querySelector('.Drpdl li:nth-child(7) a');
const ECSection = document.querySelector('.EC');

ECButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  

  ECSection.scrollIntoView({ behavior: 'smooth' });
}); 

const EducButton = document.querySelector('.Drpdl li:nth-child(9) a');
const EducSection = document.querySelector('.Educ');

EducButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  

  EducSection.scrollIntoView({ behavior: 'smooth' });
});

const PhilButton = document.querySelector('.Drpdl li:nth-child(11) a');
const PhilSection = document.querySelector('.Phil');

PhilButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  

  PhilSection.scrollIntoView({ behavior: 'smooth' });
});
const DCButton = document.querySelector('.Drpdl li:nth-child(13) a');
const DCSection = document.querySelector('.DC');

DCButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  

  DCSection.scrollIntoView({ behavior: 'smooth' });
});

const TravelButton = document.querySelector('.Drpdl li:nth-child(15) a');
const TravelSection = document.querySelector('.Travel');

TravelButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  

  TravelSection.scrollIntoView({ behavior: 'smooth' });
});

const LlButton = document.querySelector('.Drpdl li:nth-child(17) a');
const LlSection = document.querySelector('.Ll');

LlButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  

  LlSection.scrollIntoView({ behavior: 'smooth' });
});