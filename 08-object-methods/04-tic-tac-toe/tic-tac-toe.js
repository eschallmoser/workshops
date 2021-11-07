// YOUR CODE BELOW

const ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: function (character, rowNum, colNum) {
    if (!this.board[rowNum][colNum]) {
      this.board[rowNum][colNum] = character;
    }

    console.log(this.board);
    return this.board;
  },
  clear: function () {
    (this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]),
      console.log(this.board);
    return this.board;
  },
};
