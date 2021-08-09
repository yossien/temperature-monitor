import Condition from "../types/condition";
import {
  ComposedChart,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area, Bar, Brush,
  AreaChart
} from 'recharts'

type Props = {
  conditionList: Condition[]
}
const DailyChart = ({conditionList}: Props) => {

  return (
    <>
      <div className="chart">
        <h3 className="temperature">Temperature</h3>
        <ResponsiveContainer width="90%" height={150}>
          <AreaChart syncId="sync1" data={conditionList}>
            <CartesianGrid strokeDasharray="3 3" stroke="#88BB88"/>
            <XAxis dataKey="time"/>
            <YAxis domain={['dataMin', 'dataMax']}/>
            <Tooltip/>
            <Area type="monotone" dataKey="temperature" fill="#55EE88" stroke="#33DD44" opacity={0.6}/>
          </AreaChart>
        </ResponsiveContainer>
        <h3 className="humidity">Humidity</h3>
        <ResponsiveContainer width="90%" height={150}>
          <AreaChart syncId="sync1" data={conditionList}>
            <CartesianGrid strokeDasharray="3 3" stroke="#8888BB"/>
            <XAxis dataKey="time"/>
            <YAxis domain={['dataMin', 'dataMax']}/>
            <Tooltip/>
            <Area type="monotone" dataKey="humidity" fill="#66b1ef" stroke="#66b1ef" opacity={0.6}/>
            <Brush/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default DailyChart