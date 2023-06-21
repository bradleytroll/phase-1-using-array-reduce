//Redoing old labs for extra practice.

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//Arrow function:
// const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const totalBatteries = batteryBatches.reduce(function(total, location){
    return total + location;
}, 0);