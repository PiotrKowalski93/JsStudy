var CarRepoFactory = function() {
    this.getRepo = function(repoType){
        if(repoType === 'SmallCarRepository'){
            if(this.smallCarFactory) {
                console.log("Creating new SmallCarRepository")
                return this.smallCarFactory;
            } else {
                console.log("SmallCarRepository from cache.")
                this.smallCarFactory = require('./Repositories/SmallCarRepository');
                return this.smallCarFactory;
            }
        }

        if(repoType === 'CarRepository') {
            if(this.carFactory) {
                console.log("Creating new CarRepository")
                return this.carFactory;
            } else {
                console.log("CarRepository from cache.")
                this.carFactory = require('./Repositories/CarRepository');
                return this.carFactory;
            }
        }

        if(repoType === 'BigCarRepository') {
            if(this.bigCarFactory) {
                console.log("Creating new BigCarRepository")
                return this.bigCarFactory;
            } else {
                console.log("BigCarRepository from cache.")
                this.bigCarFactoryr = require('./Repositories/BigCarRepository');
                return this.bigCarFactory;
            }
        }
    }
}

module.exports = CarRepoFactory;    