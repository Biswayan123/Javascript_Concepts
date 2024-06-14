function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return 'Do you have permission from your parents?';
    }
}

let age = console.log(checkAge(23));


function checkDayOfWeek(dayNumber){
    let day;
    switch(dayNumber){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        default:
            day = "Invalid day";
            break;
        
    }
    console.log(day);
}

checkDayOfWeek(2);
checkDayOfWeek(9);
