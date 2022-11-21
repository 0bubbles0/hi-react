import { Routes, Route } from "react-router-dom"

import { NotFound404 } from "common/pages/404NotFound"
import { Home } from "features/home"

import "./common/assets/styles/App.css"

export function App(): JSX.Element {
  return (
    <div className="app">
      {/* Any Pop-up modals */}
      <div className="viewport">
        {/* <TopBar /> */}
        <div className="canvas">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound404 />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}
