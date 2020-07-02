import React, { useState, useEffect } from 'react'
import './style/Journey.css'
const Journey = props => {
	const { from, to, showCitySelector, exchangeFromTo } = props
	return (
		<div className='journey'>
			<div className='journey-station'>
				<input type='text' name='from' readOnly value={from} className='journey-input journey-from' onClick={() => showCitySelector(true)} />
			</div>
			<div className='journey-switch'>
				<i className='iconfont icon-Exchange' onClick={() => exchangeFromTo()}></i>
			</div>
			<div className='journey-station'>
				<input type='text' readOnly name='to' value={to} className='journey-input journey-to' onClick={() => showCitySelector(false)} />
			</div>
		</div>
	)
}

export default Journey
