import React, { Component } from 'react'

class App extends Component {
  state = {
    title: 'Color Picker!',
    hue: this.getRandomInt(360),
    saturation: this.getRandomInt(100),
    lightness: this.getRandomInt(100),
    color: 'white',
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  changeHue = event => {
    this.setState({ hue: event.target.value })
  }

  changeSaturation = event => {
    this.setState({ saturation: event.target.value })
  }

  changeLightness = event => {
    this.setState({ lightness: event.target.value })
  }
  randomColor = event => {
    this.setState({ hue: this.getRandomInt(360) })
    this.setState({ saturation: this.getRandomInt(100) })
    this.setState({ lightness: this.getRandomInt(100) })
  }
  render() {
    return (
      <>
        <main>
          <section>
            <h1
              style={{
                WebkitTextFillColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
              }}
            >
              {this.state.title} Hue:{this.state.hue}% Saturation:
              {this.state.saturation}% Lightness: {this.state.lightness}%
            </h1>
            <h2
              style={{
                WebkitTextFillColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
              }}
            >
              <button type="button" onClick={this.randomColor}>
                Random Color
              </button>
            </h2>
          </section>
          <div>
            <li>
              <a
                style={{
                  WebkitTextFillColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
                }}
              >
                Hue
              </a>
              <input
                type="range"
                min="1"
                max="360"
                value={this.state.hue}
                onChange={this.changeHue}
              />
            </li>
          </div>
          <div>
            <li>
              <a
                style={{
                  WebkitTextFillColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
                }}
              >
                Saturation
              </a>
              <input
                type="range"
                min="1"
                max="100"
                value={this.state.saturation}
                onChange={this.changeSaturation}
              />
            </li>
          </div>
          <div>
            <li>
              <a
                style={{
                  WebkitTextFillColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
                }}
              >
                Lightness
              </a>
              <input
                type="range"
                min="1"
                max="100"
                value={this.state.lightness}
                onChange={this.changeLightness}
              />
            </li>
          </div>
          <section>
            <div
              style={{
                background: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
              }}
            ></div>
          </section>
        </main>
      </>
    )
  }
}

export default App
