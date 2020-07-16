import { h0 } from '../common/fp'
import { ORDER_DEPASRT } from './constant'
import {
	ACTION_SET_FROM,
	ACTION_SET_TO,
	ACTION_SET_DEPART_DATE,
	ACTION_SET_HIGH_SPEED,
	ACTION_SET_TRAIN_LIST,
	ACTION_SET_ORDER_TYPE,
	ACTION_SET_ONLY_TICKETS,
	ACTION_SET_TICKET_TYPES,
	ACTION_SET_CHECKED_TICKET_TYPES,
	ACTION_SET_TRAIN_TYPES,
	ACTION_SET_CHECKED_TRAIN_TYPES,
	ACTION_SET_DEPART_STATIONS,
	ACTION_SET_CHECKED_DEPART_STATIONS,
	ACTION_SET_ARRIVE_STATIONS,
	ACTION_SET_CHECKED_ARRIVE_STATIONS,
	ACTION_SET_DEPART_TIME_START,
	ACTION_SET_DEPART_TIME_END,
	ACTION_SET_ARRIVE_TIME_START,
	ACTION_SET_ARRIVE_TIME_END,
	ACTION_SET_IS_FILTERS_VISIBLE,
	ACTION_SET_SEARCH_PARSED,
} from './actions'

const initialState = {
	from: null,
	to: null,
	departDate: h0(Date.now()),
	highSpeed: false,
	trainList: [],
	orderType: ORDER_DEPASRT,
	// 只看邮票
	onlyTickets: false,
	// 坐席类型
	ticketTypes: [],
	checkedTicketTypes: {},
	// 车次类型
	trainTypes: [],
	checkedTrainTypes: {},
	// 出发车站
	departStations: [],
	checkedDepartStations: {},
	// 到达车站
	arriveStations: [],
	checkedArriveStations: {},
	// 触发时间起始点
	departTimeStart: 0,
	departTimeEnd: 24,
	arriveTimeStart: 0,
	arriveTimeEnd: 24,
	isFiltersVisible: false,
	// 用来标识url参数是否解析完成
	searchParsed: false,
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
function trainListReducer(state = initialState.trainList, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_TRAIN_LIST:
			return payload
		default:
			return state
	}
}
function orderTypeReducer(state = initialState.orderType, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_ORDER_TYPE:
			return payload
		default:
			return state
	}
}
function onlyTicketsReducer(state = initialState.onlyTickets, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_ONLY_TICKETS:
			return payload
		default:
			return state
	}
}
function ticketTypesReducer(state = initialState.ticketTypes, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_TICKET_TYPES:
			return payload
		default:
			return state
	}
}
function checkedTicketTypesReducer(state = initialState.checkedTicketTypes, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_CHECKED_TICKET_TYPES:
			return payload
		default:
			return state
	}
}
function trainTypesReducer(state = initialState.trainTypes, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_TRAIN_TYPES:
			return payload
		default:
			return state
	}
}
function checkedTrainTypesReducer(state = initialState.checkedTrainTypes, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_CHECKED_TRAIN_TYPES:
			return payload
		default:
			return state
	}
}
function departStationsReducer(state = initialState.departStations, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_DEPART_STATIONS:
			return payload
		default:
			return state
	}
}
function checkedDepartStationsReducer(state = initialState.checkedDepartStations, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_CHECKED_DEPART_STATIONS:
			return payload
		default:
			return state
	}
}
function arriveStationsReducer(state = initialState.arriveStations, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_ARRIVE_STATIONS:
			return payload
		default:
			return state
	}
}
function checkedArriveStationsReducer(state = initialState.checkedArriveStations, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_CHECKED_ARRIVE_STATIONS:
			return payload
		default:
			return state
	}
}
function departTimeStartReducer(state = initialState.departTimeStart, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_DEPART_TIME_START:
			return payload
		default:
			return state
	}
}
function departTimeEndReducer(state = initialState.departTimeEnd, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_DEPART_TIME_END:
			return payload
		default:
			return state
	}
}
function arriveTimeStartReducer(state = initialState.arriveTimeStart, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_ARRIVE_TIME_START:
			return payload
		default:
			return state
	}
}
function arriveTimeEndReducer(state = initialState.arriveTimeEnd, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_ARRIVE_TIME_END:
			return payload
		default:
			return state
	}
}
function isFiltersVisibleReducer(state = initialState.isFiltersVisible, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_IS_FILTERS_VISIBLE:
			return payload
		default:
			return state
	}
}
function searchParsedReducer(state = initialState.searchParsed, action) {
	const { type, payload } = action
	switch (type) {
		case ACTION_SET_SEARCH_PARSED:
			return payload
		default:
			return state
	}
}

export default {
	from: fromReducer,
	to: toReducer,
	departDate: departDateReducer,
	highSpeed: highSpeedReducer,
	trainList: trainListReducer,
	orderType: orderTypeReducer,
	onlyTickets: onlyTicketsReducer,
	ticketTypes: ticketTypesReducer,
	checkedTicketTypes: checkedTicketTypesReducer,
	trainTypes: trainTypesReducer,
	checkedTrainTypes: checkedTrainTypesReducer,
	departStations: departStationsReducer,
	checkedDepartStations: checkedDepartStationsReducer,
	arriveStations: arriveStationsReducer,
	checkedArriveStations: checkedArriveStationsReducer,
	departTimeStart: departTimeStartReducer,
	departTimeEnd: departTimeEndReducer,
	arriveTimeStart: arriveTimeStartReducer,
	arriveTimeEnd: arriveTimeEndReducer,
	isFiltersVisible: isFiltersVisibleReducer,
	searchParsed: searchParsedReducer,
}
