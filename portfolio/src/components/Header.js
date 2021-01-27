import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {

    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    }
    
    return (
       <div>
            <div>
                <h3 style={style}><Link to='/'>Home</Link></h3>
                <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
                <h3 style={style}><Link to='/music-master'>Music Master</Link></h3>
            </div>
            {children}
       </div>
    )

    //Anchor tag can also we used  but it refreshes the page and start the new session that clears the old state

    // return (
    //     <div>
    //         <h3 style={style}><a href='/'>Home</a></h3>
    //         <h3 style={style}><a href='/Jokes'>Jokes</a></h3>
    //     </div>
    // )
}

export default Header;
