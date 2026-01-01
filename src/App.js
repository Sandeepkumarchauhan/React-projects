import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          {/* Add other routes like restaurant details if needed */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
