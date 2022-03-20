import React from 'react'

function GameWin({victory, restart}) {
  return (
      victory === true?
    <div className='modal-bg'>
        <div className='modal'>
            <p>You have won!!!</p>

            <button onClick={() => restart()}>RESTART</button>
        </div>
    </div>
    :
    null
  )
}

export default GameWin