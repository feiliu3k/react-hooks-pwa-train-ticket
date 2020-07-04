import React, { useState, useEffect, useMemo } from "react"
import "./style/CitySelector.css"
import classNames from "classnames"
import PropTypes from "prop-types"

const CitySelector = (props) => {
  const { show, cityData, isLoading, onBack, fetchCityData } = props
  const [searchKey, setSearchKey] = useState("")
  const key = useMemo(() => {
    return searchKey.trim()
  }, [searchKey])
  useEffect(() => {
    if (cityData || isLoading || !show) return
    fetchCityData()
  }, [cityData, isLoading, show])
  return (
    <div className={classNames("city-selector", { hidden: !show })}>
      <div className="city-search">
        <div className="search-back" onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchKey}
            className="search-input"
            placeholder="城市、车站的中文或拼音"
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <i
          onClick={() => setSearchKey("")}
          className={classNames("search-clean", "iconfont", "icon-qingkong", {
            hidden: key.length === 0,
          })}
        ></i>
      </div>
    </div>
  )
}

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  cityData: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
}
export default CitySelector
