/*
Leetcode 207
https://leetcode.com/problems/course-schedule/description/

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.


Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Time:O(m+n) | Space: O(m+n)
*/

var canFinish = function(numCourses, prerequisites) {
    const preMap = {};
    const visited = {};

    for (let i = 0; i < prerequisites.length; i++) {
        const [course, prereq] = prerequisites[i];
        if (!preMap[course]) preMap[course] = [];
        preMap[course].push(prereq);
    }

    function dfs(node) {
        if (visited[node]) return false;

        if (preMap[node]) {
            if (preMap[node].length === 0) return true;

            visited[node] = true;

            for (const prereq of preMap[node]) {
                if (!dfs(prereq)) return false;
            }

            visited[node] = false;
            preMap[node] = [];
        }
        return true;
    }

    for (const course in preMap) {
        if (!dfs(course)) return false;
    }

    return true;
};