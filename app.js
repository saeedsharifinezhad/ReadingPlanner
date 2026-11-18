// -------------- Problem One
function plannedPages(days, dailyPages, restOnSeventhDay) {
    if (days < 0 || days > 60 || dailyPages < 0
        || !Number.isInteger(days)
        || !Number.isInteger(dailyPages)) {
        return null;
    } else if (days == 0 || dailyPages == 0) {
        return 0;
    } else if (restOnSeventhDay === true) {
        let i = 1;
        let restDays = 0;
        while (i <= days) {
            if (i % 7 == 0) {
                restDays = restDays + 1;
            }
            i = i + 1;
        }
        return (days - restDays) * dailyPages;
    } else {
        return dailyPages * days;
    }
}

console.log(plannedPages(7, 20, true));


// -------------- Problem Two
function remainingPages(goalPages, readPages) {
    if (goalPages <= 0 || goalPages > 5000 ||
        !Number.isInteger(goalPages) || !Number.isInteger(readPages) || readPages < 0 || readPages > 6000) {
        return null;
    } else if (goalPages === readPages || goalPages <= readPages) {
        return 0;
    } else {
        return goalPages - readPages
    }
}

console.log(remainingPages(5000, 4000));


