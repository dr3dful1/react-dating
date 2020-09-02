import React, {useState} from 'react';
 
import './App.css';
import { Form, Button,Alert } from 'react-bootstrap';


//1.create form
//2.state
//3.form validations
//4 ?


function App() {


  const [email, setEmail]= useState("")
  const  [password, setPassword] = useState("")
  // const [username, setUsername] = useState ("")
  // const  [confirmPassword, setConfirmPassword] = useState("")
  
  const [emailError, setEmailError]= useState("")
  const  [passwordError, setPasswordError] = useState("")
  // const [usernameError, setUsernameError] = useState ("")
  // const  [confirmPasswordError, setConfirmPasswordError] = useState("")

  const handleSubmit = event => {
    event.preventDefault( );

    var emailValid = false;

    if(email.length == 0){
      setEmailError("email is required")
    }
    else if(email.length<6){
      setEmailError("email cant be less than 6 chars")
    }
    else if(email.indexOf('') >=0){
      setEmailError("email cant contain spaces")
    }
    else{
      setEmailError(" ")
        emailValid = true
      
    }
    if(emailValid){
      alert('Email:' + email + '\nPassword:' + password )
    }


  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>

        {/* <Form.Group>
          <Form.Label>
          please choose username
          </Form.Label>
          <Form.Control  type="input" placeholder="please choose username" onChange={event => setUsername(event.target.value)} />
          {username}
         
        </Form.Group> */}

        <Form.Group>
          <Form.Label>
             never share your email
          </Form.Label>
          <Form.Control  type="email" placeholder="enter Email"  onChange={event => setEmail(event.target.value)}/>
          {email}
        </Form.Group>


        <Form.Group>
          <Form.Label>
          please choose password
          </Form.Label>
          <Form.Control  type="password" placeholder="must be at least 6 characters" onChange={event => setPassword(event.target.value)}/>
          {password}
        </Form.Group>
{/* 
        <Form.Group>
          <Form.Label>
          please confirm password
          </Form.Label>
          <Form.Control  type="password" placeholder="must be at least 6 characters" />
        </Form.Group> */}

        
        <Button variant="primary" type="submit" >
          Submit
        </Button>


      </Form>
        {email}
        
    </div>
  );
}

export default App;
