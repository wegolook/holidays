const Moment = require('moment');

const isNewYears = date => {
    // January 1
    return date.month() === 0
        && date.date() === 1;
};

const isThanksgiving = date => {
    // Fourth Thursday in November
    return date.month() === 10
        && date.day() === 4
        && Moment(date).subtract(4, 'weeks').month() !== 10
        && Moment(date).subtract(3, 'weeks').month() === 10;
};

const isChristmas = date => {
    // December 25
    return date.month() === 11
        && date.date() === 25;
};

const isLaborDay = date => {
    // First Monday of September
    return date.month() === 8
        && date.day() === 1
        && Moment(date).subtract(1, 'week').month() !== 8
};

const isMemorialDay = date => {
    // Last Monday of May
    return date.month() === 4
        && date.day() === 1
        && Moment(date).add(1, 'week').month() !== 4;
};

const isIndependenceDay = date => {
    // July 4
    return date.month() === 6
        && date.date() === 4;
};

const isHoliday = date => {
    return !!(
        isNewYears(date) ||
        isMemorialDay(date) ||
        isIndependenceDay(date) ||
        isLaborDay(date) ||
        isThanksgiving(date) ||
        isChristmas(date)
    );
};

module.exports = {
    isHoliday: isHoliday
};
