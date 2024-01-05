import axios from 'axios';
import React, { useState } from 'react';
import { styled } from 'styled-components';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to handle file upload
    
    const user = {
        email,
        password
    }
    try {
      // Make a POST request using axios
      const response = await axios.post(`http://localhost:3000/api/register`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body:JSON.stringify(user)
      });

      // Handle the response here
      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error('Error submitting form:', error);
    }
  };



  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" placeholder="Write your email here" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Label htmlFor="password">Password:</Label>
        <Input type="password" placeholder="Write your password here" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='buttonsDiv'>
        <Button type="submit">Cancel</Button>
        <Button type="submit">Login</Button>
        </div>
      </form>
    </StyledDiv>
  );
};

export default Login;

const StyledDiv = styled.div`
  width: 30%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
  }

  .buttonsDiv{
    display: flex;
    width: 100%;
    gap: 10px;
    margin: auto;
    justify-content: center;
    &>button:nth-child(1){
        background-color: #f24646;
    }
  }
`;

const Label = styled.label`
  text-align: left;
  width: 80%;
  font-weight: bold;
`;

const Input = styled.input`
  width: 80%;
  padding: 15px;
  margin-top: 0px;
  border: 1px solid transparent;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  &:hover{
    border-color:lightblue;
  }
  &:focus{
    outline-color: lightblue;
    box-shadow: 0 0 6px rgba(0, 0, 255, 0.7); /* Optional: Add a different box shadow on focus */
  }
`;

const Button = styled.button`
  width: 30%;
  padding: 10px;
  font-weight: bold;
  font-size: large;
  margin-top: 10px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  transition: transform all;
  &:hover{
    box-shadow: 0 0 6px rgba(0, 0, 255, 0.7); /* Optional: Add a different box shadow on focus */
    transform: scale(1.01);
  }
`;
