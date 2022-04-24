import 'regenerator-runtime/runtime'
import React from 'react'

import './index.css'
import Login from "../login";
import Mint from "../mint";

export default function Home() {
    return !window.walletConnection.isSignedIn() ? <Login /> : <Mint />
}
