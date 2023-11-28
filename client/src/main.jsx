import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavigationBar from './pages/NavigationBar'
import Home from './pages/Home'
import CreateChar from './pages/CreateChar'
import Chars from './pages/Chars'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path = "CreateChar" element={<CreateChar />} />
            <Route path = "Chars" element={<Chars />} />
          </Route>
        </Routes>
      </BrowserRouter>
    <App />
  </React.StrictMode>,
)
