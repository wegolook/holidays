'use strict';

const Holidays = require('../');
const Moment = require('moment');
const expect = require('code').expect;
const lab = exports.lab = require('lab').script();
const experiment = lab.experiment;
const test = lab.test;

experiment('Holidays', function () {
  test('January 1, 2015 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2015-01-01'))).to.be.true();
  });

  test('December 31, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-31-12'))).to.be.false();
  });

  test('January 2, 2015 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2015-01-02'))).to.be.false();
  });

  test('May 11, 2015 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2015-05-11'))).to.be.false();
  });

  test('May 26, 2014 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-05-26'))).to.be.true();
  });

  test('May 27, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-05-27'))).to.be.false();
  });

  test('June 2, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-06-02'))).to.be.false();
  });

  test('June 9, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-06-09'))).to.be.false();
  });

  test('September 1, 2014 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-09-01'))).to.be.true();
  });

  test('September 2, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-09-02'))).to.be.false();
  });

  test('September 8, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-09-08'))).to.be.false();
  });

  test('August 25, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-08-25'))).to.be.false();
  });

  test('September 2, 2013 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2013-09-02'))).to.be.true();
  });

  test('August 26, 2013 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2013-08-26'))).to.be.false();
  });

  test('September 9, 2013 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2013-09-09'))).to.be.false();
  });

  test('July 4, 2014 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-07-04'))).to.be.true();
  });

  test('July 5, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-07-05'))).to.be.false();
  });

  test('July 11, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-07-11'))).to.be.false();
  });

  test('June 27, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-06-27'))).to.be.false();
  });

  test('July 4, 2015 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-07-04'))).to.be.true();
  });

  test('December 25, 2014 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-12-25'))).to.be.true();
  });

  test('December 25, 2015 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-12-25'))).to.be.true();
  });

  test('December 24, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-12-24'))).to.be.false();
  });

  test('December 26, 2015 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-12-26'))).to.be.false();
  });

  test('December 18, 2015 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2015-12-18'))).to.be.false();
  });

  test('November 27, 2014 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-11-27'))).to.be.true();
  });

  test('November 26, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-11-26'))).to.be.false();
  });

  test('November 30, 2017 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2017-11-30'))).to.be.false();
  });

  test('November 20, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-11-26'))).to.be.false();
  });

  test('December 4, 2014 is not a holiday', () => {
    expect(Holidays.isHoliday(Moment('2014-11-26'))).to.be.false();
  });

  test('July 3, 2015 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2015-07-03'))).to.be.true();
  });

  test('July 5, 2010 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2010-07-05'))).to.be.true();
  });

  test('December 31, 2021 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2021-12-31'))).to.be.true();
  });

  test('January 2, 2017 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2017-01-02'))).to.be.true();
  });

  test('December 24, 2010 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2010-12-24'))).to.be.true();
  });

  test('December 26, 2016 is a holiday', () => {
    expect(Holidays.isHoliday(Moment('2016-12-26'))).to.be.true();
  });
});
