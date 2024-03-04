// wow3-client.js
const axios = require('axios');
const { joinGame, startGame } = require('w0rld0fweb3');

// Your client-side code using the w0rld0fweb3 package
async function joinGame(playerName) {
  try {
    const response = await axios.post('http://localhost:3000/join-game', { playerName });
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

async function startGame() {
  try {
    const response = await axios.post('http://localhost:3000/start-game');
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

joinGame('Player1');
joinGame('Player2');
startGame();
