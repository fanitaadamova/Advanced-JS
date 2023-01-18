/*вземи последната дата на предходния месец, заради нулевото базиране при месеците, така казваме 
с 0 вземи последния ден от предходния месец, от това което ти подавам като параметър */

function daysInMonth(month, year) {

    let newdate = new Date(year, month, 0).getDate()
    console.log(newdate)

}
daysInMonth(1, 2012)
daysInMonth(2, 2021)