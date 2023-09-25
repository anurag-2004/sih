
import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleLogin = async () => {
    if (email && password && selectedFile) {
      // Create a FormData object to send the image along with other form data
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('image', selectedFile);

      try {
        // Simulate an API request to send the form data
        const response = await fetch('/api/login', {
          method: 'POST',
          body: formData,
        });

        if (response.status === 200) {
          setLoggedIn(true);
        } else {
          // Handle login error
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="App" >
      {/* <div className ="wrapper">
       
        <div className="box"> 
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div> */}
      {loggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
          <br />
          <input type="file" onChange={handleFileChange} />
          <br />
          {selectedFile && (
            <div>
              <h3>Selected File:</h3>
              <p>{selectedFile.name}</p>
            </div>
          )}
        </div>
      ) : (
        <div className='heading'>
          <h1>e-Vault for legal records</h1>
          <h2>Sign In</h2>
          <div className='label'><label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="file" onChange={handleFileChange} />
            <br />
            <button onClick={handleLogin}>Upload</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
