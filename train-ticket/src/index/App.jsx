import React, { useState, useCallback, useMemo } from 'react'
import './style/App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { exchangeFromTo, showCitySelector } from './actions'
import Header from '../common/Header'
import Journey from './Journey'
import DepartDate from './DepartDate'
import HighSpeed from './HighSpeed'
import Submit from './Submit'
function App(props) {
	const { from, to, dispatch } = props
	const [count, setCount] = useState(0)
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
	return (
		<div>
			<div className='header-wrapper'>
				<Header title='biaoti ' onBack={onBack} />
			</div>
			{/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
			<form className='form'>
				{/* <Journey from={from} to={to} exchangeFromTo={doExChangeFromTo} showCitySelector={doShowCitySelector} /> */}
				<Journey from={from} to={to} {...cbs} />
				<DepartDate />
				<HighSpeed />
				<Submit />
			</form>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		...state,
	}
}
function mapDispatchToProps(dispatch) {
	console.log(dispatch, '=========dispatch')
	return {
		dispatch,
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
