import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';  

const LogoutComponent = () => {
    const navigate = useNavigate();
useEffect(()=>{
    localStorage.removeItem('token')
    navigate('/login')
})
  return (
<React.Fragment>

</React.Fragment>
  )
}

export default LogoutComponent
