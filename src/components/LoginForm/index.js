// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', trigger: false}

  smallChange = () => {
    const {history} = this.props
    history.replace('/')
  }

  findingChanges = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const data = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }
    const fetching = await fetch(url, options)
    const response = await fetching.json()
    console.log(fetching)
    if (fetching.ok === true) {
      this.smallChange()
    } else {
      this.setState({trigger: true})
    }
  }

  first = event => {
    this.setState({username: event.target.value})
  }

  second = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {trigger} = this.state
    return (
      <div className="main_container">
        <div className="first">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="website logo"
            alt="website logo"
          />
        </div>

        <div className="two">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website login"
          />
          <form className="rowing" onSubmit={this.findingChanges}>
            <label htmlFor="first">USERNAME</label>
            <input
              id="first"
              type="text"
              onChange={this.first}
              placeholder="Username"
            />
            <label htmlFor="second">PASSWORD</label>
            <input
              htmlFor="second"
              type="password"
              onChange={this.second}
              placeholder="Password"
            />
            <button type="submit">Login</button>
            {trigger && <p>username and password didn't match</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
