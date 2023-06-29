# Weather_Telegram_Bot
The application is a Telegram bot that provides weather updates for cities. Users can subscribe to receive weather updates and get current weather data for specific cities.


# Weather Update Telegram Bot

![Telegram Bot](https://badgen.net/static/Telegram/Bot/blue?icon=telegram)
![Node](https://img.shields.io/badge/Node.js-JS-green)
![Express](https://img.shields.io/badge/Express.js-JS-orange)
![MongoDB](https://img.shields.io/badge/MongoDB-DB-red)
![Rest API](https://img.shields.io/badge/REST-API-blueviolet)
![React](https://img.shields.io/badge/React-JS-pink)


This is a Telegram bot that provides weather updates for cities. Users can subscribe to receive weather updates and get current weather data for specific cities.

## Features

- Subscribe to weather updates
- Get current weather data for a specific city
- Unsubscribe from weather updates
- Get User's usernames
- Get Usage Statistics

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Rajeshds20/Weather_Telegram_Bot-Complete.git
   ```

2. Navigate to the Directory

   ```shell
   cd Weather_Telegram_Bot-Complete
   ```

3. Open separate terminals for front and backend parts

   ### Front End Admin Panel Part

      ```shell
      cd frontend
      ```
    - Install the dependencies:

      ```shell
      npm install
      ```

    - Start the Development server
  
      ```shell
      npm start
      ```

   ### Backend Telegram Bot Part

      ```shell
      cd backend
      ```
      
    - Install the dependencies:

      ```shell
      npm install
      ```

   - Start the Development server
  
      ```shell
      npm start
      ```

5. Configure environment variables:

   - Create a `.env` file in the project root directory.
   - Add the following environment variables:

     ```dotenv
     BOT_TOKEN=your-telegram-bot-token
     WEATHER_API_KEY=your-openweathermap-api-key
     MONGO_URI=your-mongodb-connection-string
     PORT=your-port-number
     ```

6. Start the application:

   ```shell
   npm start
   ```

7. Open Telegram and search for your bot by its username.
8. Start a conversation with the bot and use the available commands.

## Usage

- Manage and view the users and statistics in Admin Panel of the Bot

- In Telegram Bot
   - `/subscribe` - Subscribe to weather updates.
   - `/unsubscribe` - Unsubscribe from weather updates.
   - `/weather` - Get the current weather data for a specific city.
   - `/help` - Display the list of available commands.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Telegraf (Telegram Bot Framework)
- Axios (HTTP requests)
- React

## Creators

- Rajesh 

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to contribute and make this Telegram bot even better!
