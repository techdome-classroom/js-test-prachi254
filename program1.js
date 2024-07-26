const getTotalIsles = function (grid) {


  // write your code 



  if (grid.length === 0) return 0;

  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Helper function for DFS
  const dfs = (r, c) => {
      // Check for out of bounds or water
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
          return;
      }

      // Mark the land as visited by changing 'L' to 'W'
      grid[r][c] = 'W';

      // Explore all four directions (up, down, left, right)
      dfs(r + 1, c); // down
      dfs(r - 1, c); // up
      dfs(r, c + 1); // right
      dfs(r, c - 1); // left
  };

  // Traverse the entire grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          // If we find an unvisited landmass, we found a new island
          if (grid[i][j] === 'L') {
              islandCount++;
              dfs(i, j); // Start DFS to mark all connected landmasses
          }
      }
  }

  return islandCount;
}

// Example usage
const map = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];

console.log(numIslands(map));


module.exports = getTotalIsles;
