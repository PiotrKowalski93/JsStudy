// Module Pattern
// difference between Class and module is that
// Module is treated as a service, I will have only one 
// instance of it

var Module = function() {
    var privateVar = "I am private";

    return {
        get: function(id) {
            console.log("Getting: " + id);
            return {
                name: "Test",
                cost: 123400
            }
        },
        save: function(car) {
            console.log("Saveing Car: " + car.name + ", Cost: " + car.cost)
        }
    }
}

// When exporting with () we execute the function
// Nodejs will cache it and automatically we will have singleton
module.exports = Module();