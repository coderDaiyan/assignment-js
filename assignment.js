// Repo link : https://github.com/coderDaiyan/assignment-js

// Kilometer to Meter
function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        return "Error: This value is not valid. Try again.";
    }
    return kilometer * 1000;
}


// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    if (watch, phone, laptop <= 0) {
        return "Error: This value is not valid. Try again.";
    }
    return watchPrice * watch + phonePrice * phone + laptopPrice * laptop;
}


// Hotel Cost
function hotelCost(day) {
    var price = 0;
    if (day <= 10) {
        price = day * 100;
    }
    else if (day <= 20) {
        var firstSec = 10 * 100;
        var remaining = day - 10;
        var secondSec = remaining * 80;
        price = firstSec + secondSec;
    }
    else {
        firstSec = 10 * 100;
        secondSec = 20 * 80;
        remaining = day - 20;
        var thirdSec = remaining * 50;
        price = firstSec + secondSec + thirdSec;
    }
    if (day <= 0) {
        return "Error: This value is not valid. Try again.";
    }
    return price;
}


// Mega Friend
function megaFriend(array) {
    var longer = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > longer.length) {
            longer = array[i];
        }
        if (array <= 0) {
            return "Error: This value is not valid. Try again.";
        }
        else if (array === [""]){
            return "Error: This value is not valid. Try again.";
        }
    }
    return longer;
}