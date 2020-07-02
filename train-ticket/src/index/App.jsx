import React, { useState, useCallback } from 'react'
import './style/App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../common/Header'
import Journey from './Journey'
import DepartDate from './DepartDate'
import HighSpeed from './HighSpeed'
import Submit from './Submit'
function App(props) {
	const onBack = useCallback(() => {
		window.history.back()
	}, [])
	return (
		<div>
			<Header title='火车票' onBack={onBack} />
			<Journey />
			<DepartDate />
			<HighSpeed />
			<Submit />
		</div>
	)
}

function mapStateToProps(state) {
	return {}
}
function mapDispatchToProps(dispatch) {
	return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
