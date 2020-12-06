import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import "../../css/home/header.css"

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand className='header-title' href="/">ALIEN INVASION SAFE MAPS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mr-5" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle className='header-links' nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href='/adminlogin'>
                                    Admin
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href='/disclaimer'>
                                    Read Me!
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/* <NavbarText>Be Safe!</NavbarText>
                        <NavbarText>Be Prepared!</NavbarText> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
