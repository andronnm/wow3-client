## WoW3 Client

This npm package provides a client-side code for interacting with the w0rld0fweb3 game engine.

### Installation

```bash
npm install wow3-client


Usage 

// wow3-client.js
const axios = require('axios');

// Your client-side code using the w0rld0fweb3 package
async function joinGame(playerName) {
  try {
    const response = await axios.post('http://localhost:3000/join-game', {


