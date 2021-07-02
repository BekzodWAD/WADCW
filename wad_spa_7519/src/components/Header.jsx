import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div style={{ boxShadow: '0px 0px 33px -14px rgba(0,0,0,0.75)'}}>
            <div style={{padding: '30px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    Store app
                </div>
                <div style={{ display: 'flex', alignItems:'center', justifyContent:'space-between', minWidth: 200 }}>
                    <Link to="/" >Products</Link>
                    <Link to="/categories">Categories</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
