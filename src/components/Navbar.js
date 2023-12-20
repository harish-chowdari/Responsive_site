import logo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
        <img src={logo} className="image" alt="logo" />
        <h1 className="nav-heading">ReactFacts</h1>
        <h3 className="nav-course">React course - Project 1</h3>
        </nav>
    )
}