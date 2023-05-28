export const dateValidation = (date) => {
    if (date.length === 0) {
        return "You did not enter a date for the search";
    }

    if (date.trim().length !== 10 || date.split("-").length !== 3 ) {
        return "Please enter a 10 digits date in this format yyyy-mm-dd";
    }
    
    const dateSplit = date.split("-");
    const isYearValid = yearValidation(dateSplit[0])
    const isMonthValid = monthValidation(dateSplit[1]);
    const isDayValid = dayValidation(dateSplit[2]);

    if (!isYearValid || !isMonthValid || !isDayValid) {
        return "Please enter a valid date in this format yyyy-mm-dd";
    }

    return '';
}

const yearValidation = (year) => {
    return year.length === 4 && year.match("^[0-9]+$");
}

const monthValidation = (month) => {
    return month.length === 2 
                && month >=1 
                && month<=12
                && month.match("^[0-9]+$") 
}

const dayValidation = (day) => {
    return day.length === 2 
                && day >=1
                && day <=31
                && day.match("^[0-9]+$") 
}

