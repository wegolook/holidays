# Holidays

Determines whether or not a particular day is one of:

* New Year’s Day
* Thanksgiving
* Christmas
* Labor Day
* Memorial Day
* Independence Day

If New Year’s, Independence Day, or Christmas falls on a weekend, the closest weekday will also be included. For example, if Christmas is on a Saturday, the preceding Friday is considered a holiday. If it is on a Sunday, then the following Monday is a holiday.

## Usage

```
var Holidays = require('wgl-holidays');
Holidays.isHoliday(new Date());
```
