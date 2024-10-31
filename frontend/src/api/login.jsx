const handleSubmit = async (event) => {
  event.preventDefault();
  console.log('Username:', username); // Consider removing this in production

  try {
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    // Check if the response status is OK (200-299)
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login failed:', errorData.message); // Log the error message
      alert("Login failed: " + errorData.message); // Show user-friendly error
      return;
    }

    const data = await response.json();
    console.log('Response from server:', data);

    // Navigate based on userType or handle successful login as needed
    const { userType } = data;
    if (userType === 'Player') {
      navigate('/players-home');
    } else if (userType === 'Coach') {
      navigate('/coaches-home');
    } else if (userType === 'Staff') {
      navigate('/staff-home');
    } else {
      alert("Invalid user type!");
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert("An error occurred while logging in. Please try again.");
  }
};
