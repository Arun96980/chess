import { WebSocket } from 'ws';
import { Chess } from 'chess.js';
import { GAME_OVER, MOVE } from './messages';

export class Game {
  public player1: WebSocket;
  public player2: WebSocket;
  private board: Chess;
  private startTime: Date;

  constructor(player1: WebSocket, player2: WebSocket) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Chess();
    this.startTime = new Date();
  }

  makeMove(socket: WebSocket, move: { from: string; to: string }) {
    // Determine which player's turn it is
    console.log("11");
    const currentPlayer =
      this.board.turn() === 'w' ? this.player1 : this.player2;
      console.log("22");
    if (socket !== currentPlayer) {
      socket.send(
        JSON.stringify({
          type: 'ERROR',
          payload: { message: 'Not your turn!' },
        })
      );
      return;
    }

    // Attempt to make the move
    const moveResult = this.board.move(move);
    if (!moveResult) {
      socket.send(
        JSON.stringify({
          type: 'ERROR',
          payload: { message: 'Invalid move!' },
        })
      );
      return;
    }

    // Log the move to the console
    console.log(`Move made: ${move.from} to ${move.to}`);
    console.log(`Board state after move:\n${this.board.fen()}`);

    // Broadcast the move to both players
    const payload = JSON.stringify({
      type: MOVE,
      payload: moveResult,
    });
    this.player1.send(payload);
    this.player2.send(payload);

    // Check for game over
    if (this.board.isGameOver()) {
      const winner = this.board.turn() === 'w' ? 'Black' : 'White';
      const gameOverPayload = JSON.stringify({
        type: GAME_OVER,
        payload: { winner },
      });
      this.player1.send(gameOverPayload);
      this.player2.send(gameOverPayload);
    }
  }
}
