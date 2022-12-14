// import React from "react"
import logo from "./common/assets/logo.svg"
import "./common/assets/styles/App.css"

export function App(): JSX.Element {
  return (
    <div className="App bg-green-500">
      <header className="App-header">
        <h1 className="text-amber-300">Hiiiii</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
