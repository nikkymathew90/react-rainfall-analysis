import { Navbar as B4Navbar, Nav } from "react-bootstrap"

const NavBar = () => {
    return (
        <B4Navbar collapseOnSelect expand="xl" className="land-nav navbar-default" >
            <B4Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav navbar-nav" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/rainfall-settings">Rainfall Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/chart-view">Chart View</Nav.Link>
                    </Nav.Item>
                </Nav>
            </B4Navbar.Collapse>
        </B4Navbar>
    )
};

export default NavBar