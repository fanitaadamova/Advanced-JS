function createAssemblyLine(car) {
   //декоратор функции
    car.hasClima = () => {
        car.temp = 21,
            car.tempSettings = 21,
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
 
            }
    }
    car.hasAudio = (name, artist) => {
        car.currentTrack = { name, artist },
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
    }
    car.hasParktronic = () => {
        car.checkDistance = (distance) => {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log("Beep!");
            } else {
                console.log('');
            }
        }
    }
 
    return car;
}
 
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
 
const assemblyLine = createAssemblyLine(myCar);


/// примерни данни за тест 1
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
/// примерни данни за тест 2
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
/// примерни данни за тест 3
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
/// примерни данни за тест 4
console.log(myCar);