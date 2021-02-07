var starting_grid = [
  ['2','4','1', '7','6','8', '5','3','9'],
  ['5','7','3', '9','2','4', '1','8','6'],
  ['8','9','6', '5','3','1', '7','4','2'],

  ['7','3','4', '2','9','5', '6','1','8'],
  ['1','8','.', '4','7','6', '3','.','5'],
  ['6','5','.', '8','1','3', '4','.','7'],

  ['4','6','5', '3','8','2', '9','7','1'],
  ['3','2','7', '1','5','9', '8','6','4'],
  ['9','1','8', '6','4','7', '2','5','3']
]

var solutions = [];

// Check if cell number is valid
function isValid(grid, row, col, k) {
  for (var l = 0; l < 9; l++) {
    const r = 3 * Math.floor(row / 3) + Math.floor(l / 3);
    const c = 3 * Math.floor(col / 3) + l % 3;
    if (grid[row][l] == k || grid[l][col] == k || grid[r][c] == k) {
      return false;
    }
  }
  return true;
}

function run(data) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (data[r][c] == '.') {  // Skip through all the values already filled in
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, r, c, k)) {
            var temp_data = JSON.parse(JSON.stringify(data));
            temp_data[r][c] = `${k}`;
            solutions.push(temp_data);
            run(temp_data, r,c);
          }
        }
        break;
      }
    }
  }
}


run(starting_grid)

// Print the last arr value which is the solution
console.log(solutions[solutions.length-1]);