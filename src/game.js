import Player from "./player.js"
import promptSync from "prompt-sync"
import Board from "./board.js"

class Game {
    play(){
        const prompt = promptSync()
        const name1 = prompt("What is your name? ")
        const name2 = prompt("And you, What is your name? ")
        const player1 = new Player(name1, 'X')
        const player2 = new Player(name2, 'O' )
        const board = new Board()
        board.createBoard()
        board.printBoard()
        let win = false
        let count = 1
        let winner = player1
        while (win == false && count < 10){
            let player = player1
            if (count % 2 === 0){
                player = player2
            }
            console.log(`${player.name} (${player.symbol}), it's your turn!` )
            const row = prompt('Which row do you want to play in? ')
            const column = prompt('Which column do you want to play in? ')
            board.changeSpace(row, column, player.symbol)
            board.printBoard()
            win = board.checkIfWin(row, column, player.symbol)
            count ++
            winner = player
        }

        if (count >= 9){
            console.log("It's a tie!")
        } else {
            console.log(`${winner.name} won the game!`)
        }
        
    }
}

export default Game