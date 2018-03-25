const categories = document.querySelector('.website_categories');
const portfolioLink = document.querySelector('.website_categories--portfolio');
const teamLink = document.querySelector('.website_categories--team');
const contactLink = document.querySelector('.website_categories--contact');
const paragraph = document.querySelector('.website_introduction--paragraph')

//function to add animations

function wholeWebsite() {

function animations() {
  setTimeout(func1, 1500);
};

function func1() {
  paragraph.classList.add('shown');
}

animations();

//scrolling function
function websiteHandler() {
  portfolioLink.addEventListener("click", function MoveToElement() {
    window.scrollTo(0, 1000); 
  });
  teamLink.addEventListener("click", function MoveToElement() {
    window.scrollTo(0, 1000); 
  });
  contactLink.addEventListener("click", function MoveToElement() {
    window.scrollTo(0, 1000); 
  });
}
websiteHandler();

}

wholeWebsite();