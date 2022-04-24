import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import Home from "./pages/home";
import {initContract} from "./utils/utils";

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <Home />,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
