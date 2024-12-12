import { Area } from './Area'
// let board = {
//     a:[1,2,3,5,6,7,8],
//     b:[1,2,3,5,6,7,8],
//     c:[1,2,3,5,6,7,8],
//     d:[1,2,3,5,6,7,8],
//     e:[1,2,3,5,6,7,8],
//     f:[1,2,3,5,6,7,8],
//     g:[1,2,3,5,6,7,8],
//     h:[1,2,3,5,6,7,8] 
// }


let boardArr = [
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8]
]

const Board = () => {
    // board.map((row)=>{
    //     row.map((col)=>{
    //         console.log(board[row][col])
    //     })
    // })
    const renderBoard = (board) => {
        let boardArray = []
        let backwardColor = null

        for(let row=0; row<board.length; row++){
            boardArray.push([])
            for(let col=0; col<board[row].length; col++){
                // console.log(`Строка-${row+1}\nКолонка ${col+1}\nЭлемент ${board[row][col]}`)
                boardArray[row].push(<Area></Area>)
            }
        }
    }
    



    return (
        <div className="w-[calc(110px*8)] h-[calc(110px*8)] ">
            
        </div>
    );
};

export default Board;
