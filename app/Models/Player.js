import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"

export class Player {
  constructor(data) {
    this.id = generateId()
    this.playerName = data.playerName
    this.score = 0
  }

  get PlayerListTemplate() {
    return `
      <p onclick="app.playersController.setActive('${this.id}')">${this.playerName}</p>
      `
  }

  get ScoreListTemplate() {
    return `
      <p>Highscore: ${this.score}</p>`
  }

  get ActivePlayerTemplate() {
    let num = Math.floor(Math.random() * appState.fruits.length)
    let fruit = appState.fruits[num]
    console.log(fruit);
    return `
     <p>${this.playerName}</p>
     <p>'${appState.fruits[fruit]}'</p>
          <p>Score: ${this.score}</p>
          
          `
  }
}