const categories = document.querySelector('.website_categories');
const portfolioLink = document.querySelector('.website_categories--portfolio');
const teamLink = document.querySelector('.website_categories--team');
const contactLink = document.querySelector('.website_categories--contact');
const paragraph = document.querySelector('.website_introduction--paragraph');
const portfolio = document.querySelector('.website_portfolio');
const team = document.querySelector('.website_team');
const contact = document.querySelector('.website_contact');
const canvas = document.querySelector('.website_portfolio--canvas');
const canvasPainting = canvas.getContext('2d');

const moveToPortfolio = () => moveToElement(portfolio);
const moveToTeam = () => moveToElement(team);
const moveToContact = () => moveToElement(contact);

function wholeWebsite() {
  showDescription();
  portfolioLink.addEventListener("click", moveToPortfolio);
  teamLink.addEventListener("click", moveToTeam);
  contactLink.addEventListener("click", moveToContact);
  animate();
}

function showDescription() {
  setTimeout(() => paragraph.classList.add('shown'), 1500)
};

function moveToElement(where) {
  where.scrollIntoView({
    behavior: 'smooth'
  });
}

// canvas.width = innerWidth;
// canvas.height = 100px;

let x = 100;
function animate() {
  canvasPainting.fillStyle = "#92B901";
  canvasPainting.fillRect(10, 10, 10, 10);
  // requestAnimationFrame(animate);
  // //canvasPainting.clearRect(100, 100, 100, 100);
  // canvasPainting.beginPath();
  // canvasPainting.arc(x, 100, 100, 0, Math.PI * 2, false);
  // canvasPainting.lineWidth = 20;
  // canvasPainting.strokeStyle = 'red';    
  // canvasPainting.stroke();
  // //x += 1;
}

wholeWebsite();