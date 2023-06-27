import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import AuthRequire from "./hoc/AuthRequire";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/auth'} element={<Auth/>}/>
          <Route path={'/profile'} element={
              <AuthRequire>
                  <Profile/>
              </AuthRequire>
          }/>
      </Routes>
    </div>
  );
}

export default App;
