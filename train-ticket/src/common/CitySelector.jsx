import React, { useState, useEffect, useMemo, memo, useCallback } from 'react'
import './style/CitySelector.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const SuggestItem = memo(props => {
	const { name, onClick } = props
	return (
		<li className='city-suggest-item' onClick={() => onClick(name)}>
			{name}
		</li>
	)
})
SuggestItem.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}
const Suggest = memo(props => {
	const { searchKey, onSelect } = props
	const [result, setResult] = useState([])
	useEffect(() => {
		fetch(`/rest/search?key=${encodeURIComponent(searchKey)}`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.isSuccess && data.data.searchKey === searchKey) {
					setResult(data.data.cityData)
				}
			})
	}, [searchKey])
	const fallBackResult = useMemo(() => {
		if (result.length) {
			return result
		} else {
			return [searchKey]
		}
	}, [result, searchKey])
	return (
		<div className='city-suggest'>
			<ul className='city-suggest-ul'>
				{fallBackResult.map(item => {
					return <SuggestItem key={item} name={item} onClick={onSelect} />
				})}
			</ul>
		</div>
	)
})

Suggest.propTypes = {
	searchKey: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}

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
			<li className='city-li' key='title' data-cate={title}>
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
const AlphaIndex = memo(props => {
	const { alpha, onClick } = props
	return (
		<i className='city-index-item' onClick={() => onClick(alpha)}>
			{alpha}
		</i>
	)
})
AlphaIndex.propTypes = {
	alpha: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}
const alphabet = Array.from(new Array(26), (ele, index) => {
	return String.fromCharCode(65 + index)
})
const CityList = memo(function CityList(props) {
	const { sections, onSelect, toAlpha } = props
	return (
		<div className='city-list'>
			<div className='city-case'>
				{sections &&
					sections.map(section => {
						return <CitySection key={section.title} {...section} onSelect={onSelect} />
					})}
			</div>
			<div className='city-index'>
				{alphabet.map(alpha => {
					return <AlphaIndex key={alpha} alpha={alpha} onClick={toAlpha} />
				})}
			</div>
		</div>
	)
})

CityList.propTypes = {
	sections: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
	toAlpha: PropTypes.func.isRequired,
}

const CitySelector = memo(props => {
	const { show, cityData, isLoading, onBack, fetchCityData, onSelect } = props
	const [searchKey, setSearchKey] = useState('')
	const key = useMemo(() => {
		return searchKey.trim()
	}, [searchKey])
	useEffect(() => {
		if (cityData || isLoading || !show) return
		console.log('fetchCityData')
		fetchCityData()
	}, [cityData, isLoading, show])
	const toAlpha = useCallback(alpha => {
		document.querySelector(`[data-cate='${alpha}']`).scrollIntoView()
	}, [])
	const outputCitySelectors = () => {
		if (isLoading) {
			return <div>loading</div>
		}
		if (cityData) {
			return <CityList sections={cityData} onSelect={onSelect} toAlpha={toAlpha} />
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
			{Boolean(key) && <Suggest searchKey={key} onSelect={onSelect} />}
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
