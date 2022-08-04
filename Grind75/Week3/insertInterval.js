// LeetCode 57. Insert Interval
// Medium

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  const l = newInterval[0];
  const r = newInterval[1];
  let ind = 0;

  while (ind < intervals.length && l > intervals[ind][1]) {
    result.push(intervals[ind]);
    ind++;
  }

  while (ind < intervals.length && r >= intervals[ind][0]) {
    newInterval[0] = Math.min(intervals[ind][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[ind][1], newInterval[1]);
    ind++;
  }

  result.push(newInterval);

  while (ind < intervals.length) {
    result.push(intervals[ind]);
    ind++;
  }

  return result;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
