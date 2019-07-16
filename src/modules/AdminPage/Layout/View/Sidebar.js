import React from "react";
import SubMenu from "./SubMenu";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function SideBar() {
  const data = useSelector(state => state.LayoutReducers);

  return (
    <div className={classNames("sidebar", { "is-open": data.isOpen })}>
      <div className="sidebar-header">
        <a
          href="/test"
          color="info"
          onClick={() => console.log("hall")}
          style={{ color: "#fff" }}
        >
          &times;
        </a>
        <h3>Administrator</h3>
      </div>
      <Nav vertical className="list-unstyled pb-3">
        <p>Dummy Heading</p>
        <SubMenu
          title="Home"
          icon={faHome}
          items={["Home 1", "Home 2", "Home 3"]}
        />
        <NavItem>
          <NavLink href="#">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </NavLink>
        </NavItem>
        <SubMenu
          title="Pages"
          icon={faCopy}
          items={["Page 1", "Page 2", "Page 3"]}
        />
        <NavItem>
          <NavLink href="#">
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default SideBar;
