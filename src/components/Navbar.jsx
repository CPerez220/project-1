import Logo from "./images/adoption-logo.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
      <img src={Logo} width={90} height={90}></img>
      <h1>Adoption Center</h1>
      <ul>
        <li><button>Account</button></li>
        <li><button>Contact</button></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar