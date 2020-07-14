import React, { useState, useEffect, useMemo } from 'react'
import './style/DepartDate.css'
import { h0 } from '../common/fp'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

const DepartDate = props => {
	const { time, onClick } = props

	const h0OfDepart = h0(time)
	const departTimeStr = useMemo(() => {
		return dayjs(h0OfDepart).format('YYYY-MM-DD')
	}, [h0OfDepart])
	const isToday = h0OfDepart === h0(new Date())
	const weekStr = '周' + ['日', '一', '二', '三', '四', '五', '六'][new Date(h0OfDepart).getDay()] + (isToday ? '(今天)' : '')
	return (
		<div className='depart-date' onClick={() => onClick()}>
			<input type='hidden' name='date' value={departTimeStr} />
			{departTimeStr}
			<span className='depart-week'>{weekStr}</span>
		</div>
	)
}
DepartDate.propTypes = {
	time: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default DepartDate
