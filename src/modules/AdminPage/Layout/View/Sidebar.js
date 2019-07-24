import React from "react";
import SubMenu from "./SubMenu";
import { NavItem, NavLink, Nav } from "reactstrap";
import { NavLink as RNavLink, Link } from "react-router-dom";
import classNames from "classnames";
import Menu from "./Menu.json";

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
        <h3>Administrator</h3>
      </div>
      <Nav vertical className="list-unstyled pb-3">
        {Menu.map((data, key) => {
          if (data.children.length > 0) {
            return (
              <SubMenu
                key={key}
                title={data.name}
                icon={`${data.icon} mr-2`}
                items={data.children}
              />
            );
          }
          return (
            <NavItem key={key}>
              <NavLink to={data.url} tag={RNavLink} href={data.link}>
                <i className={`${data.icon} mr-2`} />
                {data.name}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
}

export default SideBar;
