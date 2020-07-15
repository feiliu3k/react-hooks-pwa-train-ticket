import {
	ACTION_SET_FROM,
	ACTION_SET_TO,
	ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
	ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
	ACTION_SET_CITY_DATA,
	ACTION_SET_IS_LOADING_CITY_DATA,
	ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
	ACTION_SET_DEPART_DATE,
	ACTION_SET_HIGH_SPEED,
} from './actions'
const initialState = {
	from: '北京',
	to: '上海',
	isCitySelectorVisible: false, // 城市选择浮层
	currentSelectingLeftCity: false, // 城市浮层选择回填
	cityData: null,
	isLoadingCityData: false,
	isDateSelectorVisible: false,
	departDate: Date.now(), // 默认当前时间
	highSpeed: false, // 是否选择了高铁动车
}

function fromReducer(state = initialState.from, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_FROM:
			return payload
		default:
			return state
	}
}
function toReducer(state = initialState.to, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_TO:
			return payload
		default:
			return state
	}
}
function isCitySelectorVisibleReducer(state = initialState.isCitySelectorVisible, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
			return payload
		default:
			return state
	}
}
function currentSelectingLeftCityReducer(state = initialState.currentSelectingLeftCity, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
			return payload
		default:
			return state
	}
}
function cityDataReducer(state = initialState.cityData, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_CITY_DATA:
			return payload
		default:
			return state
	}
}
function isLoadingCityDataReducer(state = initialState.isLoadingCityData, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_IS_LOADING_CITY_DATA:
			return payload
		default:
			return state
	}
}
function isDateSelectorVisibleReducer(state = initialState.isDateSelectorVisible, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
			return payload
		default:
			return state
	}
}
function departDateReducer(state = initialState.departDate, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_DEPART_DATE:
			return payload
		default:
			return state
	}
}
function highSpeedReducer(state = initialState.highSpeed, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_HIGH_SPEED:
			return payload
		default:
			return state
	}
}

export default {
	from: fromReducer,
	to: toReducer,
	isCitySelectorVisible: isCitySelectorVisibleReducer,
	currentSelectingLeftCity: currentSelectingLeftCityReducer,
	cityData: cityDataReducer,
	isLoadingCityData: isLoadingCityDataReducer,
	isDateSelectorVisible: isDateSelectorVisibleReducer,
	departDate: departDateReducer,
	highSpeed: highSpeedReducer,
}
