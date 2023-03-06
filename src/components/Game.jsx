import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './game.css'

const Game = ({myChoice, score, setScore}) => {
    const [house, setHouse] = useState("")
    const [playerWin, setPlayerWin] = useState("")
    const newHousePick = ()=>{
        const choices= ["rock", "paper", "scissors"];
        setHouse(choices[Math.floor(Math.random()*3)]);
    }
    const [counter, setCounter]= useState(3);
    useEffect(() => {
        newHousePick();
      
    }, [])

    const Result =()=>{
        if(myChoice==="rock" && house==="scissors"){
            setPlayerWin("win");
            setScore(score+1);

        }else if(myChoice==="rock" && house==="paper"){
            setPlayerWin("lose");
            setScore(score-1);
        }
        else if(myChoice==="scissors" && house==="paper"){
            setPlayerWin("win");
            setScore(score+1);

        }
        else if(myChoice==="scissors" && house==="rock"){
            setPlayerWin("lose");
            setScore(score-1);

        }
        else if(myChoice==="paper" && house==="rock"){
            setPlayerWin("win");
            setScore(score+1);

        }
        else if(myChoice==="paper" && house==="scissors"){
            setPlayerWin("lose");
            setScore(score-1);

        }
        else{
            setPlayerWin("draw")

        }
    }
    useEffect(()=>{
        const timer = counter >0 ? setInterval(()=>{
            setCounter(counter-1);
        },1000) : Result();
        return()=>{
            clearInterval(timer);
        }

    },[counter,house])

  return (
    <div className='game'>
        <div className="game__you">
            <span className='text'> You Picked</span>
            <div className={`icon game_icon--${myChoice} ${playerWin==="win"? `icon game_icon--${myChoice}--winner`:''}`}></div>
        </div>

        { playerWin==="win" && <div className="game__play">
            <span className="text">You Win</span>
            <Link to="/" className='play-again' onClick={()=>setHouse()}>
        Play Again
    </Link>
        </div>
 }
    { playerWin==="lose" && <div className="game__play">
            <span className="text">You lose</span>
            <Link to="/" className='play-again' onClick={()=>setHouse()}>
        Play Again
    </Link>
        </div>
 }
    { playerWin==="draw" && <div className="game__play">
            <span className="text">It's a Draw!</span>
            <Link to="/" className='play-again' onClick={()=>setHouse()}>
        Play Again
    </Link>
        </div>
 }

<div className="game__house">
            <span className='text'> The House  Picked</span>
            { counter === 0 ? <div className={`icon game_icon--${house} ${playerWin==="lose"? `icon game_icon--${house}--winner`:''}`}></div>
            : <div className='counter'>{counter}</div>}
        </div>


        
   
    </div>
  )
}

export default Game

/*

 my choice : {myChoice}<br/>
    House choice : {house}<br/>

    Result:
    { playerWin==="win" && <h2>You Win</h2> }
    { playerWin==="lose" && <h2>You Lose</h2> }
    { playerWin==="draw" && <h2>It's a draw</h2> }

    <Link to="/" onClick={()=>setHouse()}>
        Play Again
    </Link>

*/