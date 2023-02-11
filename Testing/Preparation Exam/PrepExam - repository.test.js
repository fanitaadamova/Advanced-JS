let { Repository } = require("./PrepExam - repository.js");
const { assert, expect } = require('chai');
const { describe } = require("mocha");
const { it } = require("mocha");

describe("Tests Restository Class", () => {
    describe("Inizializationv", () => {
        it("Testing Initialization", () => {
            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);
            expect(repository).to.have.property('props');
            expect(repository.props).to.deep.equal(properties);
        });

        it("Should have property data on unit", () => {
            // Initialize props object
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);
            expect(repository).to.have.property('data');
            expect(typeof repository.data).is.equal('object');
            expect(repository.data).instanceof(Map)
        });
    });

    describe("Getter count ", () => {
        it("Should returns the number of stored entities - 0", () => {
            let repository = new Repository({});
            expect(repository.count).is.equal(0)
        })


    })

    describe("Tests add function add", () => {
        let repository = new Repository({
            name: "string",
            age: "number",
            birthday: "object"
        });
        it("Returns 0", () => {
            //Initialize the repository
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.equal(repository.add(entity), 0)

        });
        it("Returns - 1 and test Count", () => {
            //Initialize the repository
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.equal(repository.add(entity), 1)

            //test Count
            expect(repository.data.get(0)).not.to.be.undefined
            expect(repository.data.get(0)).not.equal(entity)
        });

        it('Test repository.data.get(0)).not.to.be.undefined',()=>{
            expect(repository.data.get(0)).not.to.be.undefined
           
        })

    });


});
