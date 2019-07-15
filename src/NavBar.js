import React from "react";

const NavItem = props => {
  return (
    <div className="nav-item">
      <a
        href={props.item.link}
        style={{
          color: props.item.isActive ? "#00b39b" : "gray",
          textDecoration: "none"
        }}
      >
        {props.item.title}
      </a>
    </div>
  );
};

const NavBar = props => {
  console.log(props);
  return (
    <div className="nav-bar">
      <ul>
        {props.list.map((el, i) => (
          <li className="menuItem" key={i}>
            <NavItem item={el} />

            {el.navBar && (
              <ul className="subMenuBlock">
                {el.navBar.map((elm, i) => (
                  <li key={i} className="subMenuItem">
                    {elm.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
