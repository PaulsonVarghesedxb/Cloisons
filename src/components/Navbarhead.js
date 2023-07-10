
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
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
} from 'reactstrap';

export const Navbarhead = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setdropdownOpen] = useState(true);
    const toggleDropdown = () => setdropdownOpen(!dropdownOpen);
    const onMouseEnter = () => setdropdownOpen(true);
    const onMouseLeave = () => setdropdownOpen(true);
    const [dropdownOpenSub, setdropdownOpenSub] = useState(false);
    const toggleDropdownSub = () => setdropdownOpenSub(!dropdownOpenSub);
    const onMouseEnterSub = () => { setdropdownOpenSub(true); setdropdownOpenSub2(false) };
    const onMouseLeaveSub = () => setdropdownOpenSub(false);
    const [dropdownOpenSub2, setdropdownOpenSub2] = useState(false);
    const toggleDropdownSub2 = () => setdropdownOpenSub2(!dropdownOpenSub2);
    const onMouseEnterSub2 = () => { setdropdownOpenSub2(true); setdropdownOpenSub(false) }
    const onMouseLeaveSub2 = () => setdropdownOpenSub2(false);
    return (
        <Navbar light='true' expand="md" className="">
            <div className="navbar-translate">
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src="logo.png"
                        style={{
                            height: 60,
                            width: 138
                        }}
                    />
                    {/* The Cloisons */}
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
                    <Dropdown nav inNavbar onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle nav >
                            Products
                        </DropdownToggle>
                        <DropdownMenu right className='drpbr'>
                            <Dropdown
                                direction="end"
                                className="p-0"
                                onMouseOver={onMouseEnterSub} onMouseLeave={onMouseLeaveSub2} isOpen={dropdownOpenSub} toggle={toggleDropdownSub}
                            >
                                <DropdownToggle

                                    className="dropCol"
                                >
                                    <DropdownItem className="rmhrefInline" href="DemountableGlassPartions">Glass partitions</DropdownItem>
                                </DropdownToggle>  <DropdownMenu className='drpbr'>

                                    <DropdownItem href="SingleGlazedID1">
                                        ID 1
                                    </DropdownItem>
                                    <DropdownItem href="CloisonP26">
                                        CLOISON P26
                                    </DropdownItem >
                                    <DropdownItem href="CloisonP40">
                                        CLOISON P40
                                    </DropdownItem>
                                    <DropdownItem href="CloisonP100">
                                        CLOISON P100
                                    </DropdownItem>

                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown
                                direction="end"
                                className="p-0 bgHov"
                                onMouseOver={onMouseEnterSub2} onMouseLeave={onMouseLeaveSub} isOpen={dropdownOpenSub2} toggle={toggleDropdownSub2}
                            >
                                <DropdownToggle

                                    className="dropCol"
                                >
                                    <DropdownItem href="OperableWall">Operable Walls</DropdownItem> </DropdownToggle>  <DropdownMenu className='drpbr'>

                                    <DropdownItem href="Alma">
                                        Alma Walls
                                    </DropdownItem>
                                    <DropdownItem href="Aqua">
                                        Aqua Walls
                                    </DropdownItem>
                                    <DropdownItem href="Wave">
                                        Wave Walls
                                    </DropdownItem>

                                </DropdownMenu>
                            </Dropdown>

                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink href="Gallery">
                            Projects
                        </NavLink>
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
