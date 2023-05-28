import React, { useState, useEffect } from "react";
import "../AdminPage.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const REACT_APP_ADMIN_AUTH = "https://weather-telegram-bot-backend.onrender.com/"

const AdminPage = () => {

    const authenticated = sessionStorage.getItem('authentication') || false;


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    if (authenticated) {
        return <Dashboard />
    }
    else {
        return <LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} />

    }
}

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [stats, setStats] = useState([]);
    // const [subscribers, setSubscribers] = useState([]);
    const [usage, setUsage] = useState([]);

    useEffect(() => {
        axios.get(REACT_APP_ADMIN_AUTH + "users")
            .then(response => response.data)
            .then(data => {
                console.log("Users Data : ", data);
                setUsers(data.slice(data.length - 15, data.length));
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        axios.get(REACT_APP_ADMIN_AUTH + "stats")
            .then(response => response.data)
            .then(data => {
                console.log("Stats Data : ", data);
                setStats(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        axios.get(REACT_APP_ADMIN_AUTH + "usage")
            .then(response => response.data)
            .then(data => {
                console.log("Usage Data : ", data);
                setUsage(data.slice(data.length - 25, data.length));
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px", marginTop: "20px" }}>
                <button onClick={() => navigate('/')} style={{ backgroundColor: "transparent", border: "4px solid transparent", color: "blue", cursor: "pointer", padding: "5px" }}>
                    <h2 style={{ margin: "0" }}>&lt; Home</h2></button>
                <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
                <button onClick={() => {
                    sessionStorage.removeItem('authentication');
                    window.location.reload();
                }} style={{ backgroundColor: "transparent", border: "4px solid transparent", cursor: "pointer", padding: "5px" }}>
                    <h2 style={{ margin: "0", color: "red" }}>Logout</h2></button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginBottom: "40px" }}>
                <div>
                    <h2 style={{ textAlign: "center", color: "blue" }}>Latest 15 Users</h2>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ border: "3px solid blueviolet", overflow: "auto", display: "flex", justifyContent: "space-between", color: "brown", alignItems: "center", width: "50vw", padding: "5px", paddingTop: "10px", paddingBottom: "10px", textAlign: "center" }}>
                            <h3 style={{ margin: "0", minWidth: "33%" }}>Username</h3>
                            {/* <p style={{ margin: "0" }}>{user.chatId}</p> */}
                            <h3 style={{ margin: "0", minWidth: "33%" }}>User ID</h3>
                            <h3 style={{ margin: "0", minWidth: "33%" }}>Used Time</h3>
                        </div>
                        {users.map((user, index) => {
                            return (
                                <div key={index} style={{ border: "3px solid black", overflow: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", width: "50vw", padding: "5px", textAlign: "center" }}>
                                    <p style={{ margin: "0", minWidth: "33%" }}>{user.username || "NA"}</p>
                                    {/* <p style={{ margin: "0" }}>{user.chatId}</p> */}
                                    <p style={{ margin: "0", minWidth: "33%" }}>{user.userid}</p>
                                    <p style={{ margin: "0", minWidth: "33%" }}>{user.time}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginBottom: "50px" }}>
                <div>
                    <h2 style={{ textAlign: "center", color: "blue" }}>Subscribers' Usage Statistics</h2>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ border: "3px solid blueviolet", overflow: "auto", display: "flex", justifyContent: "space-between", color: "brown", alignItems: "center", width: "50vw", padding: "5px", paddingTop: "10px", paddingBottom: "10px", textAlign: "center" }}>
                            {/* <p style={{ margin: "0" }}>{user.chatId}</p> */}
                            <h3 style={{ margin: "0", minWidth: "33%" }}>User ID</h3>
                            <h3 style={{ margin: "0", minWidth: "33%" }}>Username</h3>
                            <h3 style={{ margin: "0", minWidth: "33%" }}>Total Usage</h3>
                        </div>
                        {console.log("Stats:", stats)}
                        {stats.map((each, index) => {
                            return (
                                <div key={index} style={{ border: "3px solid black", overflow: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", width: "50vw", padding: "5px", textAlign: "center" }}>
                                    {/* <p style={{ margin: "0" }}>{user.chatId}</p> */}
                                    <p style={{ margin: "0", minWidth: "33%" }}>{each.username || "NA"}</p>
                                    <p style={{ margin: "0", minWidth: "33%" }}>{each.userid}</p>
                                    <p style={{ margin: "0", minWidth: "33%" }}>{each.count}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginBottom: "50px" }}>
                <div>
                    <h2 style={{ textAlign: "center", color: "blue" }}>Latest 25 Usage Data</h2>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ border: "3px solid blueviolet", overflow: "auto", display: "flex", justifyContent: "space-between", color: "brown", alignItems: "center", width: "50vw", padding: "5px", paddingTop: "10px", paddingBottom: "10px", textAlign: "center" }}>
                            {/* <p style={{ margin: "0" }}>{user.chatId}</p> */}
                            <h3 style={{ margin: "0", minWidth: "33%" }}>User ID</h3>
                            <h3 style={{ margin: "0", minWidth: "33%" }}>Username</h3>
                            <h3 style={{ margin: "0", minWidth: "33%" }}>Usage Time</h3>
                        </div>
                        {console.log("Stats:", stats)}
                        {usage.map((each, index) => {
                            return (
                                <div key={index} style={{ border: "3px solid black", overflow: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", width: "50vw", padding: "5px", textAlign: "center" }}>
                                    {/* <p style={{ margin: "0" }}>{user.chatId}</p> */}
                                    <p style={{ margin: "0", minWidth: "33%" }}>{each.username || "NA"}</p>
                                    <p style={{ margin: "0", minWidth: "33%" }}>{each.userid}</p>
                                    <p style={{ margin: "0", minWidth: "33%" }}>{each.time}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}


const LoginForm = (props) => {

    const [username, setUsername] = [props.username, props.setUsername];
    const [password, setPassword] = [props.password, props.setPassword];

    const checkLogin = async (e) => {
        e.preventDefault();
        console.log("Username : ", username);
        console.log("Password : ", password);
        // console.log("Admin Auth : ", REACT_APP_ADMIN_AUTH);
        axios.post(REACT_APP_ADMIN_AUTH + 'admin/auth', {
            username: username,
            password: password
        })
            .then(response => {
                // console.log("Response : ", response);
                return response.data;
            })
            .then(data => {
                // console.log("Data : ", data.data);
                sessionStorage.setItem('authentication', 'admin');
                alert("Login Successful");
                // sessionStorage.setItem('authToken', 'admin');
                // window.location.reload();
                setUsername("");
                setPassword("");
            })
            .catch(err => {
                console.log(err);
                alert("Invalid Credentials");
                setUsername("");
                setPassword("");
            })
    }

    const navigate = useNavigate();

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px", marginTop: "20px" }}>
                <h2 style={{ textAlign: "center" }}>Admin Login</h2>
                <button onClick={() => navigate('/')} style={{ backgroundColor: "transparent", border: "4px solid transparent", color: "blue", cursor: "pointer", padding: "5px" }}>
                    <h2 style={{ margin: "0", fontWeight: "700" }}>Home</h2></button>
            </div>
            <div style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center" }} className="login container">
                <form onSubmit={checkLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" placeholder="Enter your username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminPage;