const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static HTML form
app.use(express.static(path.join(__dirname, '../public')));

// Handle the POST request from the SSO form
app.post('/sso-endpoint', (req, res) => {
    const { id_token, app_version, email } = req.body;
    
    console.log('SSO POST Request Received:');
    console.log(`ID Token: ${id_token}`);
    console.log(`App Version: ${app_version}`);
    console.log(`Email: ${email}`);

    // Perform any validation or authentication logic here

    // Simulate successful SSO, and redirect to another URL (e.g., Titan homepage)
    const redirectURL = `https://google.com?token=${id_token}`;
    res.redirect(redirectURL);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
