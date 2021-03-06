const categories = document.querySelector('.website_categories');
const portfolioLink = document.querySelector('.website_categories--portfolio');
const teamLink = document.querySelector('.website_categories--team');
const contactLink = document.querySelector('.website_categories--contact');
const paragraph = document.querySelector('.website_introduction--paragraph');
const portfolio = document.querySelector('.website_portfolio');
const team = document.querySelector('.website_team');
const contact = document.querySelector('.website_contact');

const moveToPortfolio = () => moveToElement(portfolio);
const moveToTeam = () => moveToElement(team);
const moveToContact = () => moveToElement(contact);

function wholeWebsite() {
  showDescription();
  portfolioLink.addEventListener("click", moveToPortfolio);
  teamLink.addEventListener("click", moveToTeam);
  contactLink.addEventListener("click", moveToContact);
}

function showDescription() {
  setTimeout(() => paragraph.classList.add('shown'), 1500)
};

function moveToElement(where) {
  where.scrollIntoView({
    behavior: 'smooth'
  });
}

wholeWebsite();