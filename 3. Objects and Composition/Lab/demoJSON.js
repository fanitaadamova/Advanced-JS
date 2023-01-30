function parser() {

    let obj = {
        name: "John",
        age: 30,
        city: "New York"
    };
    let myJSON = JSON.stringify(obj);
    console.log(myJSON);
}
parser()


function app() {

    let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }';
    let obj = JSON.parse(data);
    console.log(obj.manager.lastName)
}
app()