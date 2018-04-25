import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
	<header>
		<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
		<NavLink to="/create" activeClassName="is-active">Create</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
		<h1>Expenses-App</h1>
		<button onClick={startLogout}>Logout</button>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);