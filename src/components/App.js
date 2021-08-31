import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AuthProvider } from '../context/AuthContext'
import Chat from "./Chat"
import Login from "./Login"




function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chat} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
