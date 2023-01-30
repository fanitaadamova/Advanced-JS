/*Decorator Functions
  -  Functions that add new data and behavior to objects
  -  The object reference is embedded – using this is NOT required

*/


function canPrint(device) {
    device.print = () => {
        console.log(`${device.name} is printing a page`);
    }
}
const printer = { name: 'ACME Printer' };
canPrint(printer);
printer.print();
  // ACME Printer is printing a page
