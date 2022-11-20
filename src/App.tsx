// import React from "react"
// import logo from "./common/assets/logo.svg"
import { Routes, Route } from "react-router-dom"

import "./common/assets/styles/App.css"

export function App(): JSX.Element {
  return (
    <div className="relative min-h-screen h-full min-w-screen flex flex-col bg-green-200">
      {/* Any Pop-up modals */}
      <div className="min-h-screen flex flex-col items-center bg-amber-200">
        {/* <TopBar /> */}
        <div className="w-full grow flex flex-col grow bg-green-400">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export function Home(): JSX.Element {
  return (
    <main>
      <h1>Hiiii</h1>
    </main>
  )
}

{
  /* // return (
  //   <div className="App bg-green-500">
  //     <header className="App-header">
  //       <h1 className="text-amber-300">Hiiiii</h1>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // ) */
}
