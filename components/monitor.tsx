import Condition from '../types/condition'
import { Card, CardContent } from '@material-ui/core'
import { faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons/'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeHumidityColor, makeTemperatureColor } from '../lib/common'
import { useDarkMode } from 'next-dark-mode'

type Props = {
  condition: Condition
}

const Monitor = ({ condition }: Props) => {
  const { darkModeActive } = useDarkMode()
  const className = darkModeActive ? 'dark' : ''

  const temperatureColor = () => {
    return `${makeTemperatureColor(condition?.temperature)} ${className}`
  }

  const humidityColor = () => {
    return `${makeHumidityColor(condition?.humidity)} ${className}`
  }

  return (
    <>
      <div className={`monitor`}>
        <div className="title">Latest Data</div>

        <div className="content">
          <div className="clock">
            <FontAwesomeIcon className="icon" icon={faClock} />{' '}
            <span>{condition?.time}</span>{' '}
          </div>
          <div className="infoWrap">
            <div className={temperatureColor()}>
              <FontAwesomeIcon className="icon" icon={faThermometerHalf} />
              <span>{condition?.temperature} ℃</span>
            </div>
          </div>
          <div className="infoWrap">
            <div className={humidityColor()}>
              <FontAwesomeIcon className="icon" icon={faTint} />
              <span>{condition?.humidity} ％</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Monitor
