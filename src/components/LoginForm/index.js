import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', trigger: false, errMsg: ''}

  smallChange = () => {
    const {history} = this.props
    history.replace('/')
  }

  changing = errMsg => {
    this.setState({trigger: true, errMsg})
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
      this.changing(response.error_msg)
    }
  }

  first = event => {
    this.setState({username: event.target.value})
  }

  second = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {trigger, errMsg} = this.state
    return (
      <div className="main_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="website logo"
          alt="website logo"
        />

        <div className="two">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website login"
          />
          <form className="rowing" onSubmit={this.findingChanges}>
            <label htmlFor="userName">USERNAME</label>
            <input
              id="userName"
              type="text"
              onChange={this.first}
              placeholder="Username"
            />
            <label htmlFor="second">PASSWORD</label>
            <input
              id="second"
              type="password"
              onChange={this.second}
              placeholder="Password"
            />
            <button type="submit">Login</button>
            {trigger && <p>{errMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm

