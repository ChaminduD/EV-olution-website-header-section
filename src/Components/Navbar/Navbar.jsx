import './Navbar.css';

function Navbar(){
    return(
        <div className='nav'>
            <h1 className='nav-logo'>EV-olution</h1>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>

        </div>
    );
}

export default Navbar;