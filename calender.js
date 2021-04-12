var monthName = 'January';
var days = 30;
var startingDay = 3;

console.log(`For the Month of : ${monthName}`);
console.log('sun    mon    tue    wed    thu    fri    sat');

for (var i = 0; i < 5; i++) {
    var dayRow = '';
    for (var j = 1; j <= 7; j++) {

        var currentDay = 7 * i + j - startingDay;
        if (currentDay > days) {
            break;
        } else if (currentDay < 1) {
            currentDay = " ";
        }

        if (currentDay >= 10) {
            dayRow += currentDay + "     ";
        } else {
            dayRow += currentDay + "      ";
        }
    }
    console.log(dayRow);
}

