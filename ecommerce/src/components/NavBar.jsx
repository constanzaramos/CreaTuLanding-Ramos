import Cart from "./CartWidget";
const NavBar = () => {
    return (
        <nav>
            
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <Cart />
        </nav>
    );
};
export default NavBar;