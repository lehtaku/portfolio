import React, {useState} from 'react';
import './NavBar.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Navbar className="custom-navbar" expand="md">
      <NavbarBrand href="/" className="nav-logo">
        <img
          alt="Logo"
          src="https://lh3.googleusercontent.com/SX_DMJaoeIr50O8gkka0hrL3VmhMQKp639W7io3JZz9hLccvg1ZOOi1-BfRHaomQqTlJISxQ5yFClX37H5jqIQc7umqHSd6Lj7wlIg145u8F3IMjqkwSS6MfFEhkdsleqMr2IQKbJGb0PMHWeizPxXAsEosDxd5t3G6zRZdsBdNem4dBdZbNPrkQVM3eTM2ACOt7785b3bmHZz5kZcsJS530CoV_kAB-nWvmknG-fIZ4BeO7COYA7Xggfkr4gQrL7tXjsC_9C5fuSu3gK0quDosfqipzQAsNlmhEnMQ1fIbXRiqFm8xwFDw5QYvUY6pIwMm6sP49w2joG5P_7MyaQYhN18OwaWxS2LxOTBdtDe4o-KXDMqgP5AGLJAdZx_2JqADyYQhbLkLLB1lOqNgv_TnK7FkpFquryL-NCfof5qslJc8ANV4X7eqj-C5M_3QvW_rJkrpHKf2BowxpeJhR_sHNXlXDpLs6R1qKytW7uYIqPkgcGpVQZn-7UnB94UKJ4o4p1oy0F3sCYkz3A04OVO05-ksmlblyVv_eRWCbFEro67XsdMM8M-pNZ7KCdrV52cvFhSmy9no0BYxpDW5tXOnwP6A5iIclO-0sRaqHPZa3thgXgxvr-fFbdVkhdBr3nqAEUfACdBjEb7Xn5YjXwMhzFvg8cxJ5c-7GCKdHs6qD2Kag-xTNTQ=w850-h213-no"
        />
      </NavbarBrand>
      <NavbarToggler onClick={() => setShowNav(!showNav)} />
      <Collapse isOpen={showNav} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              className="nav-link"
              href="https://github.com/reactstrap/reactstrap"
            >
              ABOUT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" active href="/components/">
              SKILLS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" href="/components/">
              PORTFOLIO
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
