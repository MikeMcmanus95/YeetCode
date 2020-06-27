/*
Leetcode URL: https://leetcode.com/problems/design-underground-system/
Implement the class UndergroundSystem that supports three methods:

1. checkIn(int id, string stationName, int t)

A customer with id card equal to id, gets in the station stationName at time t.
A customer can only be checked into one place at a time.
2. checkOut(int id, string stationName, int t)

A customer with id card equal to id, gets out from the station stationName at time t.
3. getAverageTime(string startStation, string endStation)

Returns the average time to travel between the startStation and the endStation.
The average time is computed from all the previous traveling from startStation to endStation that happened directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer gets in at time t1 at some station, then it gets out at time t2 with t2 > t1. All events happen in chronological order.
*/

const UndergroundSystem = function () {
  this.checkInData = {};
  this.travelData = {};
};

UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkInData[id] = { stationName, t };
  if (!this.travelData[stationName]) this.travelData[stationName] = {};
};

UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let startStation = this.checkInData[id].stationName;
  if (!this.travelData[startStation][stationName])
    this.travelData[startStation][stationName] = { journeys: 0, totalTime: 0 };
  this.travelData[startStation][stationName].totalTime +=
    t - this.checkInData[id].t;
  this.travelData[startStation][stationName].journeys++;
};

UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let numOfJourneys = this.travelData[startStation][endStation].journeys;
  return this.travelData[startStation][endStation].totalTime / numOfJourneys;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
