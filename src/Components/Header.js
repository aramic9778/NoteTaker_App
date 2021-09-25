import React from 'react'

const Header = ({ handleToggleDarkMode }) => {



    return (
        <div>
            <div className="header">
                <h1><div class="morphing">
                    <div class="word">When your heart</div>
                    <div class="word">speaks,</div>
                    <div class="word">take good notes...</div>
                </div></h1>
            </div>
            <div className="togglik">
                <button onClick={() => handleToggleDarkMode((previousDarkmode) => !previousDarkmode)} className="save">Board Color</button>
            </div>
        </div>
    )
}

export default Header;