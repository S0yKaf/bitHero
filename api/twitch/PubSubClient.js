'use strict';

const ws = require('ws');

const maxListens = 50;
class PubSubClient {

  constructor(id, twitchId, authToken) {
    this.status = 'DISCONNECTED';
    this.id = id;
    this.slots = 2;
    this.ws = new ws('wss://pubsub-edge.twitch.tv');

    this.ws.on('open', () => {
      this.status = 'CONNECTING';
      this.addUser(twitchId, authToken);
    });

    this.ws.on('message', (data) => {
      console.log(data);
    });

  }

  addUser(twitchId, authToken) {
    let message = {
      "type": "LISTEN",
      "nonce": twitchId,
      "data": {
        "topics": [`channel-bits-events-v1.${twitchId}`],
        "auth_token": authToken
      }
    }
    this.ws.send(JSON.stringify(message));
  }

  removeUser() {

  }


  isFull() {
    return this.slots > maxListens;
  }
}

module.exports = PubSubClient;
