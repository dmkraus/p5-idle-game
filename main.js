/* interal values */
let money = 0;
let houseCleanerPrice = 10;

let houseCleaners = 0;

/* Output variables */
let moneyCounterHtml, houseCleanersCounterHtml;

/* Buttons */
let getMoneyButton, getHouseCleaningPersonButton;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(255);

  moneyCounterHtml = createElement('h2', 'Money: ');
  moneyCounterHtml.position(19, 19);

  houseCleanersCounterHtml = createElement('h2', 'House Cleaners: ');
  houseCleanersCounterHtml.position(300, 19);

  getMoneyButton = createButton('Click for money');
  getMoneyButton.position(100, 100);
  getMoneyButton.mouseClicked(getMoneyButtonClicked);

  getHouseCleaningPersonButton = createButton('Get house cleaning for ' + houseCleanerPrice);
  getHouseCleaningPersonButton.position(350, 100);
  getHouseCleaningPersonButton.mouseClicked(getHouseCleaningPersonClicked);

  setInterval(payoutForFacilities, 1000);
}

function draw() {
	// update html 
	getHouseCleaningPersonButton.html('Buy a new house cleaner for ' + houseCleanerPrice);
	houseCleanersCounterHtml.html('House Cleaners: ' + houseCleaners);
	moneyCounterHtml.html('Money: ' + money);
}

function getHouseCleaningPersonClicked() {
	if (money >= houseCleanerPrice) {
		houseCleaners = houseCleaners + 1;
		money = money - houseCleanerPrice;
	}
	getHouseCleaningPersonButton.html('Buy a new house cleaner for ' + houseCleanerPrice);
	houseCleanersCounterHtml.html('House Cleaners: ' + houseCleaners);
}

function getMoneyButtonClicked() {
	money = money + 1;
	moneyCounterHtml.html('Money: ' + money);
}

function payoutForFacilities() {
	money = (money + (houseCleaners * 1));
}