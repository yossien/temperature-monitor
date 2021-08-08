import Condition from "../types/condition";
import {Card, CardContent, CardHeader, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import { faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons/'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  condition: Condition
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      margin: "0 auto 2rem",
      textAlign: "center"
    },
    titleIcon: {
      marginRight: "0.8rem"
    },
    info: {
      margin: "4rem auto",
      textAlign: "center"
    },
    infoIcon: {
      marginRight: "1.2rem"
    }
  })
)

const Monitor = ({condition}: Props) => {

  const classes = useStyles()

  const temperatureColor = () => {
    return condition?.temperature > 28 ? 'red'
      : condition?.temperature < 23 ? 'red'
        : 'green'
  }

  const humidityColor = () => {
    return condition?.humidity > 80 ? 'red'
      : condition?.humidity < 30 ? 'red'
        : 'green'
  }

  return (
    <>
      <Card>
        <CardContent>
          <Typography align="center" color="textSecondary" variant="h5">Latest Data</Typography>
        </CardContent>

        <CardContent>
          <Typography color="textSecondary" align="center" variant="h4" ><FontAwesomeIcon className={classes.titleIcon} icon={faClock}/> <span>{condition?.time}</span> </Typography>
          <div className={classes.info}>
            <Typography align="center" variant="h3" ><FontAwesomeIcon className={classes.infoIcon} icon={faThermometerHalf} color={temperatureColor()}/><span style={{color: temperatureColor()}}>{condition?.temperature} ℃</span></Typography>
          </div>
          <div className={classes.info}>
            <Typography align="center" variant="h3" ><FontAwesomeIcon className={classes.infoIcon} icon={faTint} color={humidityColor()}/><span style={{color: humidityColor()}}>{condition?.humidity} ％</span></Typography>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default Monitor