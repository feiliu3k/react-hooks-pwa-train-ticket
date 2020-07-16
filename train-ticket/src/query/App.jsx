import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import dayjs from 'dayjs'
import { h0 } from '../common/fp'
import URI from 'urijs'
import Header from '../common/Header'
import Nav from '../common/Nav'
import List from './List'
import Bottom from './Bottom'
import './style/App.css'
import { setFrom, setTo, setDepartDate, setHighSpeed, setSearchParsed } from './actions'
function App(props) {
	const { from, to, departDate, highSpeed, dispatch, searchParsed, orderType, onlyTickets, checkedTicketTypes, checkedTrainTypes, checkedDepartStations, checkedArriveStations, departTimeStart, departTimeEnd, arriveTimeStart, arriveTimeEnd } = props
	useEffect(() => {
		const queries = URI.parseQuery(window.location.search)
		const { from, to, date, highSpeed } = queries
		dispatch(setFrom(from))
		dispatch(setTo(to))
		dispatch(setDepartDate(h0(dayjs(date).valueOf())))
		dispatch(setHighSpeed(highSpeed === 'true' ? true : false))
		dispatch(setSearchParsed(true))
	}, [])
	useEffect(() => {
		if (!searchParsed) {
			return
		}
		// TODO: fetch
	}, [from, to, departDate, highSpeed, searchParsed, orderType, onlyTickets, checkedTicketTypes, checkedTrainTypes, checkedDepartStations, checkedArriveStations, departTimeStart, departTimeEnd, arriveTimeStart, arriveTimeEnd])
	const onBack = useCallback(() => {
		window.history.back()
	}, [])

	return (
		<div>
			<div className='header-wrapper'>
				<Header title={`${from} -> ${to}`} onBack={onBack} />
			</div>
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
