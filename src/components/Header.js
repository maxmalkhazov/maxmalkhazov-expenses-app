import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const Header = () => (
	<header>
		<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
		<NavLink to="/create" activeClassName="is-active">Create</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
		<h1>Expenses-App</h1>
	</header>
);

export default Header;