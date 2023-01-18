function dayOfWeek(argument) {
    
    let day = argument;
    let dayLikeNum = ""

    switch (day) {
        case "Monday": dayLikeNum = 1;           
            break;
            case "Tuesday": dayLikeNum = 2;           
            break;
            case "Wednesday": dayLikeNum = 3;           
            break;
            case "Thursday": dayLikeNum = 4;           
            break;
            case "Friday": dayLikeNum = 5;           
            break;
            case "Saturday": dayLikeNum = 6;          
            break;
            case "Sunday": dayLikeNum = 7;           
            break;
    
        default:dayLikeNum = "error"
            break;
    }

    //console.log(dayLikeNum);
    return dayLikeNum;
    
}
dayOfWeek('Monday')
dayOfWeek('Friday')
dayOfWeek('Invalid')