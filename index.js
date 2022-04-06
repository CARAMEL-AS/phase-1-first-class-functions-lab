function returnFirstTwoDrivers (array) {
    return (array.slice(0, 2));
}

function returnLastTwoDrivers (array) {
    return (array.slice(-2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function actualFareNultiplier(multiplier) {
        return (integer * multiplier)
    }
}

function fareDoubler(number) {
    return(number * 2)
}

function fareTripler(number) {
    return(number * 3)
}

function selectDifferentDrivers(arrayOfDrivers, selectingDriver) {
    return selectingDriver(arrayOfDrivers)
}