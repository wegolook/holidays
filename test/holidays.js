var Holidays = require('../');
var Moment = require('moment');
var expect = require('chai').expect;
var Lab = require('lab');
exports.lab = Lab.script();
var experiment = exports.lab.experiment;
var test = exports.lab.test;

experiment('Holidays', function() {
  test('January 1, 2015 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2015-01-01'))).to.equal(true);
    done();
  });

  test('December 31, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-31-12'))).to.equal(false);
    done();
  });

  test('January 2, 2015 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2015-01-02'))).to.equal(false);
    done();
  });

  test('May 11, 2015 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2015-05-11'))).to.equal(false);
    done();
  });

  test('May 26, 2014 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-05-26'))).to.equal(true);
    done();
  });

  test('May 27, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-05-27'))).to.equal(false);
    done();
  });

  test('June 2, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-06-02'))).to.equal(false);
    done();
  });

  test('June 9, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-06-09'))).to.equal(false);
    done();
  });

  test('September 1, 2014 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-09-01'))).to.equal(true);
    done();
  });

  test('September 2, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-09-02'))).to.equal(false);
    done();
  });

  test('September 8, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-09-08'))).to.equal(false);
    done();
  });

  test('August 25, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-08-25'))).to.equal(false);
    done();
  });

  test('September 2, 2013 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2013-09-02'))).to.equal(true);
    done();
  });

  test('August 26, 2013 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2013-08-26'))).to.equal(false);
    done();
  });

  test('September 9, 2013 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2013-09-09'))).to.equal(false);
    done();
  });

  test('July 4, 2014 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-07-04'))).to.equal(true);
    done();
  });

  test('July 5, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-07-05'))).to.equal(false);
    done();
  });

  test('July 11, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-07-11'))).to.equal(false);
    done();
  });

  test('June 27, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-06-27'))).to.equal(false);
    done();
  });

  test('July 4, 2015 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-07-04'))).to.equal(true);
    done();
  });

  test('December 25, 2014 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-12-25'))).to.equal(true);
    done();
  });

  test('December 25, 2015 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-12-25'))).to.equal(true);
    done();
  });

  test('December 24, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-12-24'))).to.equal(false);
    done();
  });

  test('December 26, 2015 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-12-26'))).to.equal(false);
    done();
  });

  test('December 18, 2015 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2015-12-18'))).to.equal(false);
    done();
  });

  test('November 27, 2014 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-11-27'))).to.equal(true);
    done();
  });

  test('November 26, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-11-26'))).to.equal(false);
    done();
  });

  test('November 30, 2017 is a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2017-11-30'))).to.equal(false);
    done();
  });

  test('November 20, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-11-26'))).to.equal(false);
    done();
  });

  test('December 4, 2014 is not a holiday', function(done) {
    expect(Holidays.isHoliday(Moment('2014-11-26'))).to.equal(false);
    done();
  });
});
