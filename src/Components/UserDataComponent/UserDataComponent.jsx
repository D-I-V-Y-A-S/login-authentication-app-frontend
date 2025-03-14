import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Base_Url from '../../../config';

const UserDataComponent = () => {
    const [userData, setUserData] = useState('');

    useEffect(() => {
        console.log(`${Base_Url}/userdata`)
        console.log(localStorage.getItem('token'))
      axios.post(`${Base_Url}/userdata`,{
        //item set in loginComponent
        token: localStorage.getItem('token'), 
      },[])
      .then((response) => {
        console.log(response.data)
          setUserData(response.data)
      })
      .catch((error) => {
        alert(`Status : ${error.response.status} - ${error.response.data.message}`)
    })
    }, []);
  
    return (
      <React.Fragment>
        <h1>User Details</h1>
        <div className='mb-3'>
          <p>First Name :</p>
          <h4>{userData.firstName}</h4>
          <p>Last Name: </p>
          <h4>{userData.lastName}</h4>
          <p>Email: </p>
          <h4>{userData.email}</h4>
       
        </div>
        
      </React.Fragment>
    );
}

export default UserDataComponent

// inspect->Application->localstorage:
// token be stored

//To test
// username: divyacprime@gmail.com
// password:divya 

// 1.header-->algorithm used and type {"alg": "HS256", "typ": "JWT"}
// 2.payload-->email{since it's unique }+iat{issued at}
// 3.signature-->our jwt token for token integrity
// All are base64UrlEncode 

// 1.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// 2.eyJlbWFpbCI6InN0dWRlbnRAc2F2ZWV0aGEuY29tIiwiaWF0IjoxNzE1NzAwOTYyfQ.
// 3.X7ZM8pFYDFkAH86HCK77agXK6iGlafS_irC6LpIUghE

// uses:
// 1.authentication
// 2.session management on another window link paste pana current session kaattum

// 1.authentication->who can access 
// 2.authorisation->what resources can be accessed
