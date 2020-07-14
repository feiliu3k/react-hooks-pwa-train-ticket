import React, { useState, useEffect } from 'react'
import './style/DateSelector.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Header from './Header'

const DateSelector = props => {
	const { show, onBack, onSelect } = props
	return (
		<div className={classNames('dete-selector', { hidden: !show })}>
			<Header title='选择日期' onBack={onBack} />
		</div>
	)
}

DateSelector.propTypes = {
	show: PropTypes.bool.isRequired,
	onBack: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
}
export default DateSelector
