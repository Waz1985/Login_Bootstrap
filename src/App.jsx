import React, { useState } from "react";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Panel from "./Panel/Panel";
import Footer from "./Footer/Footer";

function App() {
  const [user, setUser] = useState({ userName: "", userId: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="container-fluid">
      <Header />
      {isAuthenticated? (
        <Panel userName={user.userName}/>
      ) : (
        <Login user={user} setUser={setUser} setIsAuth={setIsAuthenticated}/>
      )}
      <Footer />
    </div>
  );
}

export default App;
