function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const visited = Array(numCourses).fill(0);

    for (const [course, pre] of prerequisites) {
        graph[pre].push(course);
    }

    function dfs(course) {
        if (visited[course] === -1) {
            return false;
        }
        if (visited[course] === 1) {
            return true;
        }
        visited[course] = -1;
        for (const next of graph[course]) {
            if (!dfs(next)) {
                return false;
            }
        }
        visited[course] = 1;
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
}
```

Kodni ishlatish uchun misol:

```javascript
console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
