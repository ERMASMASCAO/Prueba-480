# React Weather App

A React application that fetches and displays weather information based on cities selected by the user. This app integrates with the OpenWeather API to provide real-time weather updates and supports multiple languages.

## Features

- Displays current weather information, including temperature, minimum and maximum temperatures, and weather description.
- Supports multiple languages for weather descriptions.
- Allows users to select a city to view its weather.
- Provides a contact form for user inquiries.

## Technologies Used

- React
- Axios
- OpenWeather API
- CSS for styling

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
    git clone https://github.com/ERMASMASCAO/Prueba-480
    cd react-weather-app

2. **Install Dependencies**

    Make sure you have npm installed. Then, run: npm install

3. **Configure Environment Variables**

    Create a .env file in the root directory of the project with the following content: REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key_here
    Replace your_openweather_api_key_here with your actual OpenWeather API key.

4. **Start the Development Server**

    npm start
    This will start the development server and open the application in your default web browser.

5. **Usage**

    - Select a City: Use the sidebar to choose a city from the available options. The weather information for the selected city will be displayed.
    - Change Language: Use the language selector in the sidebar to switch between English and Spanish.
    - Contact Form: Navigate to the contact form via the link in the sidebar to submit inquiries.

6. **Folder Structure**

    - src/ - Source code directory
        - components/ - Contains React components such as ContactForm, Sidebar, and Weather.
        - context/ - Contains context providers like LanguageContext.
        - App.js - Main component of the application.
        - index.js - Entry point for the React application.
        - index.css - Global styles.
    - .env - Environment variables file (should not be included in version control).
    - package.json - Project metadata and dependencies.

7. **Testing**

    To run tests, use the following command: npm test