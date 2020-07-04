import React, { useState, useEffect, useMemo, memo } from 'react'
import './style/CitySelector.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const CityItem = memo(function CityItem(props) {
	const { name, onSelect } = props
	return (
		<li className='city-li' onClick={() => onSelect(name)}>
			{name}
		</li>
	)
})
CityItem.propTypes = {
	name: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}
const CitySection = memo(function CitySection(props) {
	const { title, cities = [], onSelect } = props
	return (
		<ul className='city-ul'>
			<li className='city-li' key='title'>
				{title}
			</li>
			{cities.map(city => {
				return <CityItem key={city} name={city} onSelect={onSelect} />
			})}
		</ul>
	)
})

CitySection.propTypes = {
	title: PropTypes.string.isRequired,
	cities: PropTypes.array,
	onSelect: PropTypes.func.isRequired,
}

const CityList = memo(function CityList(props) {
	const { sections, onSelect } = props
	return (
		<div className='city-list'>
			<div className='city-case'>
				{sections &&
					sections.map(section => {
						return <CitySection key={section.title} {...section} onSelect={onSelect} />
					})}
			</div>
		</div>
	)
})

CityList.propTypes = {
	sections: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
}

const CitySelector = memo(props => {
	const { show, cityData, isLoading, onBack, fetchCityData, onSelect } = props
	const [searchKey, setSearchKey] = useState('')
	const key = useMemo(() => {
		return searchKey.trim()
	}, [searchKey])
	useEffect(() => {
		if (cityData || isLoading || !show) return
		fetchCityData()
	}, [cityData, isLoading, show])

	const outputCitySelectors = () => {
		if (isLoading) {
			return <div>loading</div>
		}
		if (cityData) {
			return <CityList sections={cityData} onSelect={onSelect} />
		}
		return <div>error</div>
	}
	return (
		<div className={classNames('city-selector', { hidden: !show })}>
			<div className='city-search'>
				<div className='search-back' onClick={() => onBack()}>
					<svg width='42' height='42'>
						<polyline points='25,13 16,21 25,29' stroke='#fff' strokeWidth='2' fill='none' />
					</svg>
				</div>
				<div className='search-input-wrapper'>
					<input type='text' value={searchKey} className='search-input' placeholder='城市、车站的中文或拼音' onChange={e => setSearchKey(e.target.value)} />
				</div>
				<i
					onClick={() => setSearchKey('')}
					className={classNames('search-clean', 'iconfont', 'icon-qingkong', {
						hidden: key.length === 0,
					})}></i>
			</div>
			{outputCitySelectors()}
		</div>
	)
})

CitySelector.propTypes = {
	show: PropTypes.bool.isRequired,
	cityData: PropTypes.array,
	isLoading: PropTypes.bool.isRequired,
	onBack: PropTypes.func.isRequired,
	fetchCityData: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
}
export default CitySelector
