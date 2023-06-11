const express = require('express');
const app = express();


const checkWorkingHours = (req, res, next) => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const currentHour = currentDate.getHours();

  // Check if it's a weekday and working hours (Monday to Friday, from 9 AM to 5 PM)
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && currentHour >= 9 && currentHour <= 17 ) {
    next(); // Allow access to the next middleware or route handler
  } else {
    res.send('Web application is closed. Please visit during working hours (Monday to Friday, from 9 AM to 5 PM).');
  }
};

app.use(checkWorkingHours);


app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Home Page</title>
        <link rel="stylesheet" type="text/css" href="style.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <h1>Welcome to Our Website!</h1>
        <p>Feel free to explore our content.</p>
      </body>
    </html>
  `);
});

app.get('/services', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Our Services</title>
        <link rel="stylesheet" type="text/css" href="style.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <h1>Our Services</h1>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </body>
    </html>
  `);
});

app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Contact Us</title>
        <link rel="stylesheet" type="text/css" href="style.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us:</p>
        <ul>
          <li>Email: info@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </body>
    </html>
  `);
});


const port = 3000; // You can change the port number if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

