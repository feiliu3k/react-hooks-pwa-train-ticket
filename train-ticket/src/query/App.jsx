import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import Nav from '../common/Nav'
import List from './List'
import Bottom from './Bottom'
import './style/App.css'
function App(props) {
	return (
		<div>
			1111
			<Nav></Nav>
			<List />
			<Bottom />
		</div>
	)
}

function mapStateToProps(state) {
	return {
		...state,
	}
}
function mapDispatchToProps(dispatch) {
	return {
		dispatch,
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
