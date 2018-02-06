import React from "react";
import Link, { navigateTo } from 'gatsby-link';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/lib/fa';
import './styles.css';

/*
<Link to="/map">
  Index
</Link>
*/

function NavLink({ render, children, ...props }) {
  if (!render) {
    return (<div className="nav-filler" />);
  }

  return (<Link {...props}>
    {children}
  </Link>);
}

export default function WritingNav(props) {
  const iconSize = 70;

  return (<div className="nav-container">
    <NavLink
      render={props.index !== 1}
      to="/1" 
      className="nav-link"
    >
      <FaAngleDoubleLeft size={iconSize} />
    </NavLink>
    <NavLink
      render={props.index !== 1}
      to={`/${props.index - 1}`}
      className="nav-link"
    >
      <FaAngleLeft size={iconSize} />
    </NavLink>
    <button 
    className="random-btn"
    onClick={() => {
      const page = Math.floor((Math.random() * props.max) + 1);
      navigateTo(`/${page}`);
    }}
    >
    Random
    </button>
    <NavLink
      render={props.index !== props.max}
      to={`/${props.index + 1}`}
      className="nav-link"
    >
      <FaAngleRight size={iconSize} />
    </NavLink>
    <NavLink
      render={props.index !== props.max}
      to={`/${props.max}`}
      className="nav-link"
    >
      <FaAngleDoubleRight size={iconSize} />
    </NavLink>
  </div>);
}
