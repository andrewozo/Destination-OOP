const Plane=require("../../classes/Plane")
const Person=require("../../classes/Person")
const { describe, test, expect, beforeEach } = require("@jest/globals");
let plane1;

beforeEach(() =>{
    
    plane1=new Plane("Delta","JFK","New York")

})

describe("Plane", function () {

    it("test company ", () => {
      expect(plane1.company).toBe("Delta");
    });

    it("test origin ", () => {
        expect(plane1.origin).toBe("JFK");
      });

      it("test destination ", () => {
        expect(plane1.destination).toBe("New York");
      });

      it("test passengers Array ", () => {
        expect(plane1.passengers).toEqual([]);
      });

      it("Add Person to Array ", () => {
        const p4= new Person("Franck","DC")
        plane1.addPassenger(p4)
        expect(plane1.passengers).toContain(p4);
      });



})