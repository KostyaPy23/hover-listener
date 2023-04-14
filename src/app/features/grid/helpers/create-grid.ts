export function createGrid(size: number): number[][] {
  let grid: number[][] = [];

  for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = 0;
    }
  }

  return grid;
}
