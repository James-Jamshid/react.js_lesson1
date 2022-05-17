import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
const AppCon =()=>{
    return (
        <div className='container'>
            <Link to='/'>
            <div className='tab'>
                <p>
                   Logo

                </p>
        

            </div>
            </Link>
            <Link to='/Document'>
            <div className='tab'>
                <p>
                    Document
                </p>
        

            </div>
            </Link>
             <Link to='/About'>
            <div className='tab'>
                <p>
                    About
                </p>
        

            </div>
            </Link>
            <Link to='/Contact'>
            <div className='tab'>
                <p>
                    Contact
                </p>
        

            </div>
            </Link>
        </div>
    )
}
export default AppCon
