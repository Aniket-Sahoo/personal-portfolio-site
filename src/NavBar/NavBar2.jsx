import { AppBar } from "@mui/material";

const NavBar2 = () => {
    return (
        <AppBar position="static">
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </AppBar>
    )
}

export default NavBar2;