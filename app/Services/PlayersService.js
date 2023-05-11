import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"


class PlayersService {
  setActive(id) {
    let foundPlayer = appState.players.find(p => p.id == id)
    // console.log(currentPlayer)
    // @ts-ignore
    appState.currentPlayer = foundPlayer
    console.log(appState.currentPlayer);
    appState.emit('currentPlayer')
  }

  handleSubmit(formData) {
    let newPlayer = new Player(formData)
    appState.players.push(newPlayer)
    console.log(appState.players)
    appState.emit('players')
  }

}

export const playersService = new PlayersService()