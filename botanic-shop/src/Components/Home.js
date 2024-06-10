import React, { useState } from 'react'; 

function Home() {
  /* State to store the user's name.*/
  const [userName, setUserName] = useState(''); 
   /* State to track the user's login status.*/
  const [loggedIn, setLoggedIn] = useState(false);

  /* Function to handle login action.*/
  const handleLogin = () => { 
    if (userName !== '') {
      /* Set loggedIn to true if userName is not empty.*/
      setLoggedIn(true); 
    }
  };

  /* Function to handle logout action.*/
  const handleLogout = () => { 
     /*Set loggedIn to false.*/
    setLoggedIn(false);
    /*Clear the userName.*/
    setUserName(''); 
  };

   /* Function to render the login form.*/
  const loginForm = () => (
    <div>
      <input
        type="text"
        placeholder="Enter your name" 
        value={userName}
        /* Update userName state on input change.*/
        onChange={(e) => setUserName(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );

/* Function to render the welcome message.*/
  const welcomeMessage = () => ( 
    <div>
      <h1 className="welcome">Welcome, {userName}</h1> 
      <button onClick={handleLogout}>Logout</button> 
    </div>
  );

  return (
    <div className= "background">
      <nav className="nav"> 
      {/* Conditionally render login form or welcome message based on login status. */}
        {loggedIn ? welcomeMessage() : loginForm()} 
      </nav>
        <h1 className="home"><i>BOTANIC</i></h1> <br></br>
        <p className="home"><i>Botanic</i> is more than a company; it is a design concept brought to life through a multitude of personalized jewelry pieces for many people who have known how to wear them, knowing that they are specially designed for them.</p> 
    </div>
  );
}

export default Home; 
