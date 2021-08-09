import Condition from "../types/condition";
import { Card, CardContent } from "@material-ui/core";
import { faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons/'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  condition: Condition
}

const Monitor = ({condition}: Props) => {

  const temperatureColor = () => {
    return condition?.temperature > 28 ? 'temperatureHigh'
      : condition?.temperature < 23 ? 'temperatureLow'
        : 'temperatureNormal'
  }

  const humidityColor = () => {
    return condition?.humidity > 80 ? 'humidityHigh'
      : condition?.humidity < 30 ? 'HumidityLow'
        : 'humidityNormal'
  }

  return (
    <>
      <Card className="monitor">
        <CardContent>
          <div className="title">Latest Data</div>
        </CardContent>

        <CardContent className="content">
          <div className="clock"><FontAwesomeIcon className="icon" icon={faClock}/> <span>{condition?.time}</span> </div>
          <div className="infoWrap">
            <div className={temperatureColor()}><FontAwesomeIcon className="icon" icon={faThermometerHalf} /><span>{condition?.temperature} ℃</span></div>
          </div>
          <div className="infoWrap">
            <div className={humidityColor()}><FontAwesomeIcon className="icon" icon={faTint} /><span>{condition?.humidity} ％</span></div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default Monitor