import React, { useState, useCallback, useMemo } from 'react'
import './style/App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { exchangeFromTo, showCitySelector, hideCitySelector, fetchCityData, setSelectedCity, showDateSelector, hideDateSelector, setDepartDate } from './actions'
import Header from '../common/Header'
import Journey from './Journey'
import DepartDate from './DepartDate'
import HighSpeed from './HighSpeed'
import Submit from './Submit'
import CitySelector from '../common/CitySelector'
import DateSelector from '../common/DateSelector'
function App(props) {
	const { from, to, isCitySelectorVisible, cityData, isLoadingCityData, dispatch, departDate, isDateSelectorVisible } = props
	const onBack = useCallback(() => {
		window.history.back()
	}, [])
	// useCallback优化
	// const doExChangeFromTo = useCallback(() => {
	// 	dispatch(exchangeFromTo())
	// }, [])
	// const doShowCitySelector = useCallback(m => {
	// 	dispatch(showCitySelector(m))
	// }, [])
	const cbs = useMemo(() => {
		return bindActionCreators({ exchangeFromTo, showCitySelector }, dispatch)
	}, [])
	const citySelectorCbs = useMemo(() => {
		return bindActionCreators({ onBack: hideCitySelector, fetchCityData, onSelect: setSelectedCity }, dispatch)
	}, [])
	const datepartSelectorCbs = useMemo(() => {
		return bindActionCreators(
			{
				onClick: showDateSelector,
			},
			dispatch
		)
	}, [])
	const dateSelectorCbs = useMemo(() => {
		return bindActionCreators({ onBack: hideDateSelector, onSelect: setDepartDate }, dispatch)
	}, [])
	// const onSelect = name => {
	// 	citySelectorCbs.setSelectedCity(name)
	// 	citySelectorCbs.onBack()
	// }
	return (
		<div>
			<div className='header-wrapper'>
				<Header title='biaoti ' onBack={onBack} />
			</div>
			{/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
			<form className='form'>
				{/* <Journey from={from} to={to} exchangeFromTo={doExChangeFromTo} showCitySelector={doShowCitySelector} /> */}
				<Journey from={from} to={to} {...cbs} />
				<DepartDate time={departDate} {...datepartSelectorCbs} />
				<HighSpeed />
				<Submit />
			</form>
			<CitySelector show={isCitySelectorVisible} cityData={cityData} isLoading={isLoadingCityData} {...citySelectorCbs} />

			<DateSelector show={isDateSelectorVisible} {...dateSelectorCbs} />
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
