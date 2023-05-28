/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Welcome to Weather Updates Bot</h3>

            <header>
                <h1>Weather Update Telegram Bot</h1>
                <div className="badge-container">
                    <span className="badge">Telegram Bot</span>
                    <span className="badge">Node.js Backend</span>
                    <span className="badge">Express.js Framework</span>
                    <span className="badge">MongoDB Database</span>
                    <span className="badge">REST API</span>
                    <span className="badge">React JS</span>
                </div>
            </header>

            <main>
                <section id="description" className="container">
                    <h2>Description</h2>
                    <p>The Weather Update Telegram Bot is a bot that provides weather updates for cities. Users can subscribe to receive weather updates and get current weather data for specific cities.</p>
                </section>

                <section style={{ textAlign: "center" }} id="motivation" className="container">
                    <h2>Admin Panel</h2>
                    <button onClick={() => navigate('/admin')} style={{ borderRadius: "10px", backgroundColor: "cyan", cursor: "pointer", padding: "5px" }}>
                        <h2 style={{ color: "brown", margin: "0" }}>Click Here</h2></button> to go to your Admin Panel.
                </section>

                <section id="features" className="container">
                    <h2>Features</h2>
                    <ul>
                        <li>Subscribe to weather updates</li>
                        <li>Get current weather data for a specific city</li>
                        <li>Unsubscribe from weather updates</li>
                        <li>Get User's usernames</li>
                        <li>Get Usage Statistics</li>
                    </ul>
                </section>

                <section id="demo" className="container">
                    <h2>Demo</h2>
                    <p>Click <a rel="noreferrer" target="_blank" href="https://t.me/weather_demobot">here</a> to view the bot on Telegram.</p>
                    <p> If not Opened, Copy the Link <code>https://t.me/weather_demobot</code> and search or paste in Telegram app to get the Bot access.</p>
                </section>

                <section id="usage" className="container">
                    <h2>Usage</h2>
                    <ul>
                        <li><code>/subscribe</code> - Subscribe to weather updates.</li>
                        <li><code>/unsubscribe</code> - Unsubscribe from weather updates.</li>
                        <li><code>/weather</code> - Get the current weather data for a specific city.</li>
                        <li><code>/help</code> - Display the list of available commands.</li>
                    </ul>
                </section>

                <section id="technologies" className="container">
                    <h2>Technologies and Tools Used</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>React JS</li>
                        <li>Telegraf (Telegram Bot Framework)</li>
                        <li>Axios (HTTP requests)</li>
                        <li>OpenWeatherMap API (For Realtime Weather Data)</li>
                    </ul>
                </section>

                <section id="installation" className="container">
                    <h2>Local Installation Setup for your own bot</h2>
                    <ol>
                        <li>Clone the repository:</li>
                        <code>git clone https://github.com/Rajeshds20/weather-telegram-bot.git</code>
                        <li>Install the dependencies:</li>
                        <code>cd weather-telegram-bot</code>
                        <code>npm install</code>
                        <li>Configure environment variables:</li>
                        <ul>
                            <li>Create a <code>.env</code> file in the project root directory.</li>
                            <li>Add the following environment variables:</li>
                            <code>BOT_TOKEN=your-telegram-bot-token</code><br />
                            <code>WEATHER_API_KEY=your-openweathermap-api-key</code><br />
                            <code>MONGO_URI=your-mongodb-connection-string</code><br />
                            <code>PORT=your-port-number</code>
                        </ul>
                        <li>Start the application:</li>
                        <code>npm start</code>
                        <li>Open Telegram and search for your bot by its username.</li>
                        <li>Start a conversation with the bot and use the available commands.</li>
                    </ol>
                </section>

                <section id="creators" className="container">
                    <h2>Creators</h2>
                    <ul>
                        <li>Rajesh</li>
                    </ul>
                </section>

                <section id="license" className="container">
                    <h2>License</h2>
                    <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
                </section>
            </main>

            <footer>
                <p>Feel free to contribute and make this Telegram bot even better!</p>
            </footer>

        </div >
    );
}

export default HomePage;