const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = 5000;
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

app.use(cors());
app.use(bodyParser.json());

// Regular expression to validate input fields
const isValidInput = (input) => /^[a-zA-Z0-9@., ]*$/.test(input);

app.post('/submit-form', (req, res) => {
    // Validate form fields against the regular expression
    const { name, email, message } = req.body;
    if (!isValidInput(name) || !isValidInput(email) || !isValidInput(message)) {
        return res.status(400).json({ success: false, message: 'Invalid input. Alphanumeric characters only.' });
    }

    const postData = JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...req.body
    });

    const options = {
        hostname: 'api.web3forms.com',
        path: '/submit',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
        }
    };

    const request = https.request(options, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const parsedData = JSON.parse(data);
            if (parsedData.success) {
                res.json({ success: true, message: "Form Submitted Successfully" });
            } else {
                res.json({ success: false, message: parsedData.message });
            }
        });
    });

    request.on('error', (error) => {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    });

    request.write(postData);
    request.end();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});