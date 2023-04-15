const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = 60000
const MS_PER_HOUR = 3600000;

const DataType = {
    SECONDS: "SECONDS",
    MINUTES: "MINUTES",
    HOURS: "HOURS"
}

function buildDate() {
    let date = new Date();
    console.log(date);
    let changedSeconds = +prompt("Введіть кількість секунд:");
    let changedMinutes = +prompt("Введіть кількість хвилин:");
    let changedHours = +prompt("Введіть кількість годин:");
    date = changeDate(date, changedSeconds, DataType.SECONDS);
    date = changeDate(date, changedMinutes, DataType.MINUTES);
    date = changeDate(date, changedHours, DataType.HOURS);
    console.log(date);
}

function changeDate(date, time, dataType) {
    const msCount = getMilliseconds(dataType);
    return new Date(date.getTime() + time * msCount);
}

function getMilliseconds(dataType) {
    switch(dataType) {
        case DataType.SECONDS :
            return MS_PER_SECOND;
            break;
        case DataType.MINUTES :
            return MS_PER_MINUTE;
            break;
        case DataType.HOURS :
            return MS_PER_HOUR;
            break;
    }
}

buildDate();