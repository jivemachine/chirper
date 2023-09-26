import React, { useState, useEffect } from 'react';

const App = () => {

    // state hooks for username and chirp
    const [userName, setUserName] = useState('');
    const [chirp, setChirp] = useState('');

    // handle set username and set chirp funcs
    const handelUserName = name => {
        setUserName(name.target.value);
    };
    const handelChirp = chirp => {
        setChirp(chirp.target.value);
    };
  
    const handleClick = timelineArray => {
        timelineArray = [];
        timelineArray.push(userName);
        timelineArray.push(chirp);
        console.log(timelineArray);
    }

    return(
        <>  
            {/* add chirp card */}
            <div className='card m-2' style={{ width: "18rem" }}>
                <div className='card-body'>
                    <input type="text" className='card-text' placeholder='Username' value={userName} onChange={handelUserName} />
                    <textarea className='card-text mt-2' placeholder='Your thoughts...' value={chirp} onChange={handelChirp} />
                    <button className='btn btn-primary mt-2' onClick={handleClick}>Add Chirp!</button>
                </div>
            </div>
        </>
    );
}

export default App;