import React from 'react'

const Header = () => {
    return (
        <div className='container'>
            <h3 className='d-sm-flex'>
                <p className='headers'>Course <p className='optional'>(Optional)</p></p>
                <p className='headers'>Section <p className='optional'>(Optional)</p></p>
                <p className='headers'>Day</p>
                <p className='headers'>Time</p>
                <p className='headers'>Lab</p>
            </h3>
        </div>
    )
}

export default Header
