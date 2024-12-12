
import Area from './Area'
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

    let boardArray = []
    const renderBoard = (board) => {
        let backwardColor = 'black'
        
        for(let row=0; row<boardArr.length; row++){
            boardArray.push([])
            
            for(let col=0; col<boardArr[row].length; col++){
                boardArray[row].push(<Area color={backwardColor==='black'?'white':'black'} visibleChecker={true} checkerColor={backwardColor}></Area>)
                backwardColor==='black'?backwardColor='white':backwardColor='black'
            }
            backwardColor==='black'?backwardColor='white':backwardColor='black'
        }
    }
    

    renderBoard(boardArr)

    return (
        <div className="w-[calc(80px*8)] h-[calc(80px*8)] flex flex-wrap">
            {...boardArray}
        </div>
    );
};

export default Board;
