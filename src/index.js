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
const isChristmas = date => date.month() === 11 && date.date() === 25;

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

const isHoliday = date => !!(
  isNewYears(date) ||
  isMemorialDay(date) ||
  isIndependenceDay(date) ||
  isLaborDay(date) ||
  isThanksgiving(date) ||
  isChristmas(date)
);

module.exports = {
  isHoliday: isHoliday
};
