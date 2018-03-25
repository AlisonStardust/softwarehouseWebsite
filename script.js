const categories = document.querySelector('.website_categories');
const portfolioLink = document.querySelector('.website_categories--portfolio');
const teamLink = document.querySelector('.website_categories--team');
const contactLink = document.querySelector('.website_categories--contact');
const paragraph = document.querySelector('.website_introduction--paragraph')

// $(document).ready(function(){
// $('website_categories--portfolio').scrollTo();
// }

function animations() {
  setTimeout(func1, 1500);
};

function func1() {
  paragraph.classList.add('shown');
}

animations();

// function websiteHandler() {
//   portfolioLink.addEventListener("click", function MoveToElement() {
//     alert('dupa')
//     window.scrollTo(10, 1000); 
//   }
// }
// websiteHandler();