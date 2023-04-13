const seconds = +prompt("Введіть кількість секунд:");

const minutes = +prompt("Введіть кількість хвилин:");

const hours = +prompt("Введіть кількість годин:");

const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

//1
showTime() {
    return `${this.hours.toString()}:${this.minutes.toString()}:${this.seconds.toString()}`;
    },

//2 
addSeconds(seconds) {
    this.seconds += seconds;
    this.minutes += Math.floor(this.seconds / 60);
    this.seconds %= 60;
    this.hours += Math.floor(this.minutes / 60);
    this.minutes %= 60;
    this.hours %= 24;
    return seconds;
},

//3 
addMinutes(minutes) {
    this.minutes += minutes;
    this.hours += Math.floor(this.minutes / 60);
    this.minutes %= 60;
    this.hours %= 24;
    return minutes;
},

//4
addHours(hours) {
    this.hours += hours;
    this.hours %= 24;
    return hours;
}
}

time.addSeconds(seconds);

time.addMinutes(minutes);

time.addHours(hours);

alert(time.showTime());