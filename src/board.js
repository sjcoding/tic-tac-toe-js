import Space from "./space.js";

class Board {
    constructor(){
        this.spaces = []
    }

    createBoard(){
        let newArray = []
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                let space = new Space()
                
                newArray.push(space)
            }
            this.spaces.push(newArray)
            newArray = []
        }
    }

    changeSpace(row, column, symbol){
     this.spaces[row - 1][column - 1].space = symbol

    } 


    checkIfWin(row, column, symbol){
        if (this.spaces[row - 1][0].space == symbol && this.spaces[row - 1][1].space == symbol && this.spaces[row - 1][2].space == symbol){
            return true
        }
        if (this.spaces[0][column - 1].space == symbol && this.spaces[1][column - 1].space == symbol && this.spaces[2][column - 1].space == symbol){
            return true
        
        }
        return false
    }


    printBoard(){
        let k = ""
        this.spaces.forEach((spaceRow, index) => {
            spaceRow.forEach((spaceItem, indexTwo) => {
                k+= spaceItem.space
            
            if ((indexTwo + 1) % 3 !== 0){
                k += " | "
            } else {
                console.log(k)
                k = ""
                if (index !== indexTwo){
                    console.log("---------")
                }
            }
        })
    })

    }
}

export default Board