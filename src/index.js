'use strict';

const Moment = require('moment');

// January 1
const isNewYears = date => date.month() === 0 && date.date() === 1;

// Fourth Thursday in November
const isThanksgiving = date => {
  return date.month() === 10
    && date.day() === 4
    && Moment(date).subtract(4, 'weeks').month() !== 10
    && Moment(date).subtract(3, 'weeks').month() === 10;
};

// December 25
const isChristmas = date => {
  if (date.month() === 11 && date.date() === 25) {
    return true;
  }
};

// First Monday of September
const isLaborDay = date => {
  return date.month() === 8
    && date.day() === 1
    && Moment(date).subtract(1, 'week').month() !== 8;
};

// Last Monday of May
const isMemorialDay = date => {
  return date.month() === 4
    && date.day() === 1
    && Moment(date).add(1, 'week').month() !== 4;
};

// July 4
const isIndependenceDay = date => date.month() === 6 && date.date() === 4;

const isMonday = date => Moment(date).day() === 1;
const isFriday = date => Moment(date).day() === 5;

const isMondayFollowingHoliday = date => {

  if (isMonday(date)) {

    const yesterday = Moment(date).subtract(1, 'day');

    return isNewYears(yesterday)
      || isChristmas(yesterday)
      || isIndependenceDay(yesterday);
  }

  return false;
};

const isFridayPrecedingHoliday = date => {

  if (isFriday(date)) {

    const tomorrow = Moment(date).add(1, 'day');

    return isNewYears(tomorrow)
      || isChristmas(tomorrow)
      || isIndependenceDay(tomorrow);
  }

  return false;
};

const isHoliday = date => !!(
  isNewYears(date) ||
  isMemorialDay(date) ||
  isIndependenceDay(date) ||
  isLaborDay(date) ||
  isThanksgiving(date) ||
  isChristmas(date) ||
  isMondayFollowingHoliday(date) ||
  isFridayPrecedingHoliday(date)
);

module.exports = {
  isHoliday: isHoliday
};
