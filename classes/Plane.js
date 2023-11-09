class Plane {

    static origin="JFK"

    constructor(company,destination){
        this.company=company
        this.destination=destination
        this.passengers=[]

    }

    getPassengers(){
        return this.passengers
    }

    addPassenger(passenger){
        this.passengers.push(passenger)
    }



}


module.exports = Plane;