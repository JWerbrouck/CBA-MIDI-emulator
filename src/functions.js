// functions to help us generate random usernames
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(9999));
  }
  
  function createName(randomInt) {
    return SOCKETS.find((ws) => ws.name === `user-${randomInt}`)
      ? createName(getRandomInt())
      : `user-${randomInt}`;
  }


  module.exports = {
      createName,
      getRandomInt
  }