// Generate cars
let arrayGeneratedCars = generateCars(10);
console.log("Array of Generated cars")
console.log(arrayGeneratedCars);

//check car speed between 30 and 60
let mediumSpeedCars = arrayGeneratedCars.filter(checkSpeed);
console.log("Array of cars speed between 30 and 60 ");
console.log(mediumSpeedCars);

//cars which are not yellow
let notLightYellowCars = [];
arrayGeneratedCars.map(checkLightYellowCar);

console.log("Array of cars which are not yellow");
console.log(notLightYellowCars);

//change car array so that it can be read by danish person
let carsWithDanishInfo = arrayGeneratedCars.map(changeLanguage);
console.log("Cars Array in Danish")
console.log(carsWithDanishInfo);




/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}
function checkSpeed(car){
        return car.speed > 30 && car.speed < 60;
    }
function checkLightYellowCar(car){
    if(car.color !== 'lightyellow'){
        notLightYellowCars.push(car.make);
    }        
}
function changeLanguage(car){
    return {
        maerke: car.make,
        fart: car.speed,
        farve: car.color
    };
}