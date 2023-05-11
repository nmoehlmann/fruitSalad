import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPlayers() {
  let players = appState.players
  let template = ''

  players.forEach(p => template += p.PlayerListTemplate)
  setHTML('playerList', template)
  console.log('drawing players', template)
}

function _drawScores() {
  let scores = appState.players
  let template = ''

  scores.forEach(p => template += p.ScoreListTemplate)
  setHTML('scoreList', template)
}


function _drawActivePlayer() {
  let activePlayer = appState.currentPlayer
  let template = activePlayer?.ActivePlayerTemplate

  setHTML("currentPlayer", template)


}
export class PlayersController {
  constructor() {
    appState.on('players', _drawPlayers)
    appState.on('players', _drawScores)
    appState.on('currentPlayer', _drawActivePlayer)
    _drawScores()
    _drawPlayers()
  }

  handleSubmit() {
    // @ts-ignore
    window.event.preventDefault()
    console.log('form is being submitted')

    let form = event?.target
    let formData = getFormData(form)
    console.log(formData);

    playersService.handleSubmit(formData)
  }

  setActive(id) {
    playersService.setActive(id)
  }

  randomNumber(min, max) {
    console.log("randomNumber")
    const randomNumber = Math.floor(Math.random() * (max - min + 1))
    return randomNumber
  }

  randomFruit(fruit) {
    console.log(fruit)
    return fruit[Math.floor(Math.random() * fruit.length)]

  }

}