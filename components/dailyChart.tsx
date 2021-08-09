import Condition from "../types/condition";
import {LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'

type Props = {
  conditionList: Condition[]
}
const DailyChart = ({conditionList}: Props) => {

  return (
    <>
      <div className="chart">
        <LineChart width={window.innerWidth * 0.9} height={400} data={conditionList}>
          <XAxis dataKey="time"/>
          <YAxis yAxisId="left" domain={['dataMin -0.5', 'dataMax +0.5']}/>
          <YAxis yAxisId="right" orientation="right" domain={['dataMin -5', 'dataMax + 5']}/>
          <Tooltip/>
          <Legend/>
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#FF8888"/>
          <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#8888FF"/>
        </LineChart>
      </div>
    </>
  )
}

export default DailyChart