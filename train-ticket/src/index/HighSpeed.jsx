import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import './style/HighSpeed.css'
import PropTypes from 'prop-types'

export default function HighSpeed(props) {
	const { highSpeed, toggle } = props
	return (
		<div className='high-speed'>
			<div className='high-speed-label'>只看高铁动车</div>
			<div className='high-speed-switch' onClick={() => toggle()}>
				{/* <input type='hidden' name='highSpeed' value={highSpeed} /> */}
				<input type='checkbox' name='highSpeed' value={highSpeed} />
			</div>
		</div>
	)
}

HighSpeed.propTypes = {
	highSpeed: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
}
