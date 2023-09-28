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

    return (
        <>  
            <div className='container'>
            {/* add chirp card */}
            <div className='card m-2' style={{ width: "18rem" }}>
                <div className='card-body'>
                    <input type="text" className='card-text' placeholder='Username' value={userName} onChange={handelUserName} />
                    <textarea className='card-text mt-2' placeholder='Your thoughts...' value={chirp} onChange={handelChirp} />
                    <button className='btn btn-primary mt-2' >Add Chirp!</button>
                </div>
            </div>
            {/* add timeline modal */}
                <div className='card m-2' style={{ width: "18rem" }}>
                    <div className='card-body'>
                        <h5 className="card-title">Spongebob</h5>
                        <p className="card-text">Is mayonaise an instrument?</p>
                    </div>
                </div>
                <div className='card m-2' style={{ width: "18rem" }}>
                    <div className='card-body'>
                        <h5 className="card-title">Patrick</h5>
                        <p className="card-text">@Squidward I wanna know if horseraddish is an instrument, too!</p>
                    </div>
                </div>
                <div className='card m-2' style={{ width: "18rem" }}>
                    <div className='card-body'>
                        <h5 className="card-title">Squidward</h5>
                        <p className="card-text">Shut the hell up you guys....</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;