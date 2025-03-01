import React, { useEffect } from 'react'

const LogoutComponent = () => {
useEffect(()=>{
    localStorage.removeItem('token')
    location.href='/login'
})
  return (
<React.Fragment>

</React.Fragment>
  )
}

export default LogoutComponent