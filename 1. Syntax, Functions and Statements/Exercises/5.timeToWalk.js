function timeToWalk(steeps, lengthInmeters, speedKmInHour) {

    let distanceInMeters = steeps * lengthInmeters;
    let speedMetersInSecond = speedKmInHour / 3.6;
    let restInSeconds = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedMetersInSecond + restInSeconds;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);


    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}
timeToWalk(8000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5) 