// Write your JS code here
import './index.css'

const Header = () => (
  <li className="main-container">
    <div className="small_one">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
      />
    </div>
    <ul className="small_two">
      <li>Home</li>

      <li>Products</li>

      <li>Cart</li>

      <button type="button">Logout</button>
    </ul>
  </li>
)

export default Header
