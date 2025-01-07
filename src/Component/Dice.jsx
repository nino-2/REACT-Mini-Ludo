import React, { useState } from 'react'


const Dice = () => {

    const [diceRoll, setdiceRoll] = useState()
    const [diceRoll1, setdiceRoll1] = useState()
  
    const playGame = () => {
      const rolltheDice = () => {
        const diceArray = [1,2,3,4,5,6];
        let i = Math.floor(Math.random()*diceArray.length)
        return diceArray[i];
      }
      setdiceRoll(rolltheDice())
      setdiceRoll1(rolltheDice())
    }
  return (
    <>
         <div className='board2'>
            <div className='box2'>
                <div>
                <p className='analog'>Roll 1 
                <button className='round'><img src={`images/dice${diceRoll}.png`}  className='dices' /></button>
                </p>
                </div>
            <div>
            <p className='analog'>Roll 2 
                <button className='round'> <img src={`images/dice${diceRoll1}.png`}  className='dices' /></button>
            </p>
            </div>
            
            </div>
            <div className='pring'>
            <button onClick={()=>playGame()}  className='digital'>Roll Dice</button>
            </div>
        
        </div>
    </>
  )
}

export default Dice