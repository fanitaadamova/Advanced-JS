function solve(dataAsJson) {
    const result = [];
    result.push('<table>')
    const object = JSON.parse(dataAsJson)

    const keys = Object.keys(object[0])

    result.push(`    <tr>${keys.map(k => `<th>${k}</th>`).join('')}</tr>`)


    for (const entry of object) {
        result.push(`    <tr>${keys.map(k => `<td>${entry[k]}</td>`).join('')}</tr>`)
    }

    result.push('</table>')

    return result.join('\n')

    

}
console.log(solve(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`
))
