const categories = document.querySelector('.website_categories');
const portfolioLink = document.querySelector('.website_categories--portfolio');
const teamLink = document.querySelector('.website_categories--team');
const contactLink = document.querySelector('.website_categories--contact');
const paragraph = document.querySelector('.website_introduction--paragraph')
const portoflio = document.querySelector('.website_portfolio')
const team = document.querySelector('.website_team')
const contact = document.querySelector('.website_contact')

function wholeWebsite() {
  showDescription();
}

function showDescription() {
  setTimeout(() => paragraph.classList.add('shown'), 1500)
};

//scrolling function

portfolioLink.addEventListener("click", function MoveToPortfolio() {
  portoflio.scrollIntoView({ behavior: 'smooth' }); 
});
teamLink.addEventListener("click", function MoveToTeam() {
  team.scrollIntoView({ behavior: 'smooth' }); 
});
contactLink.addEventListener("click", function MoveToContact() {
  contact.scrollIntoView({ behavior: 'smooth' });  
});

wholeWebsite();