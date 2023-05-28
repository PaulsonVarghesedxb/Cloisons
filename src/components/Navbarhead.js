
import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

export const Navbarhead = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar light='true' expand="md" className="">
            <div className="navbar-translate">
                <NavbarBrand href="/">
                    {/* <img
                    alt="logo"
                    src="logo.png"
                    style={{
                        height: 60,
                        width: 138
                    }}
                /> */}
                    The Cloisons
                </NavbarBrand>
            </div>
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>

                </Nav>
                <NavbarText>         <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="About">
                            About Us
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Products
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="DemountableGlassPartions">Glass partitions</DropdownItem>
                            <DropdownItem href="OperableWall">Operable Walls</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="Gallery">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="Resource">
                            Resource                         </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="Contact">
                            Contact                        </NavLink>
                    </NavItem>
                </Nav></NavbarText>
            </Collapse>

        </Navbar>
    )
}
