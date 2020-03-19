/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
*/

const latticePaths = (gridSize) => {

  // Find the factorial of a given number
  const factorial = n => (n<2)?1:factorial(n-1)*n;

  // Calculates the number of paths according to a formula calculated by the properties of Pascal's triangle
  return factorial(gridSize + gridSize)/(factorial(gridSize) * factorial(gridSize));
}
  
latticePaths(20);