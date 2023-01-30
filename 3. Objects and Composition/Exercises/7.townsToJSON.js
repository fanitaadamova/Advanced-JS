function townsToJSON(array) {

    const towns = []

    for (let index = 1; index < array.length; index++) {
        const tokens = array[index].split(/\s*\|\s*/g)

        const town = tokens[1];
        const latitude = Number(tokens[2]).toFixed(2);
        const longitude = Number(tokens[3]).toFixed(2);

        const currentTown = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }

        towns.push(currentTown)
    }

    console.log(JSON.stringify(towns));

}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)