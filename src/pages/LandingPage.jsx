import React from 'react'
import useAuth from '../context/AuthContext'
function LandingPage() {
    const { user } = useAuth();
    console.log(user)
    return (
        <div>Welcome home {user?.toUpperCase()}</div>
    )
}

export default LandingPage