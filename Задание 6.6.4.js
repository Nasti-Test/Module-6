const size = 3;
let board = '';
for (let row = 0; row < size; row++) {
 for (let col = 0; col < size; col++) {
  board += (row + col) % 2 === 0 ? 'x' : 'o';

  if (col < size - 1) {
   board +='';
  }
 }

if (row < size - 1) {
 board += '\n';
}
}

console.log(board);