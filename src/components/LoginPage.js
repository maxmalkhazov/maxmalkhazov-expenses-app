import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">Expenses App</h1>
			<p className="box-layout__info">A single place to store and track your expenses</p>
			<button className="btn btn--login" onClick={startLogin}>Login with Google</button>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);