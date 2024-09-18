import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MouseEventHandler, useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {

    function Winner(sq: Array<string>) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
                return sq[a];
            }
        }
        return null;
    }

    function Square(val: String, click: MouseEventHandler<HTMLButtonElement> | undefined) {
        // const [val, setVal] = useState("");

        // function handleClick() {
        //     setVal("X");
        // }

        return <button className="square" onClick={click}>{val}</button>;
    }

    function Board() {
        const [sq, setSq] = useState(Array(9).fill(null));
        const [xNext, setXNext] = useState(true);

        const winner = Winner(sq);
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else if (sq.some(x => x === null)) {
            status = "Next player: " + (xNext ? "X" : "O");
        } else {
            status = "Draw"
        }

        function onSqClick (i: number) {
            if (sq[i] || Winner(sq)) {
                return;
            }

            const nextSq = sq.slice();
            if (xNext) {
                nextSq[i] = "X";
            } else {
                nextSq[i] = "O";
            }
            setXNext(!xNext);
            setSq(nextSq);
        }

        return (
            <>
                <div className="board-row">
                    {Square(sq[0], () => onSqClick(0))}
                    {Square(sq[1], () => onSqClick(1))}
                    {Square(sq[2], () => onSqClick(2))}
                </div>
                <div className="board-row">
                    {Square(sq[3], () => onSqClick(3))}
                    {Square(sq[4], () => onSqClick(4))}
                    {Square(sq[5], () => onSqClick(5))}
                </div>
                <div className="board-row">
                    {Square(sq[6], () => onSqClick(6))}
                    {Square(sq[7], () => onSqClick(7))}
                    {Square(sq[8], () => onSqClick(8))}
                </div>
                <p>
                    {status}
                </p>
            </>
        )
    }
      

    return (
        <div>
            <div className='content'>
                <h1>Hello World!</h1>
                <p>
                    {Board()}
                </p>
                <p>
                    <Link to={"/"}>
                        <Button variant="contained" onClick={() => {}}>Back to Main</Button>
                    </Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link to={"/helloworld"}>
                        <Button variant="contained" onClick={() => {}}>Hello World</Button>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default TicTacToe;