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
  Area, Bar
} from 'recharts'

type Props = {
  conditionList: Condition[]
}
const DailyChart = ({conditionList}: Props) => {

  return (
    <>
      <div className="chart">
        <ComposedChart width={window.innerWidth * 0.9} height={350} data={conditionList}>
          <CartesianGrid strokeDasharray="3 3" stroke="#CCCCFF"/>
          <XAxis dataKey="time"/>
          <YAxis yAxisId="left" domain={['dataMin', 'dataMax']}/>
          <YAxis yAxisId="right" orientation="right" domain={['dataMin -1', 'dataMax + 5']}/>
          <Tooltip/>
          <Legend/>
          <Area yAxisId="left" type="monotone" dataKey="temperature" fill="#55EE88" stroke="#33DD44"/>
          <Bar yAxisId="right" type="monotone" dataKey="humidity" fill="#9977FF" stroke="#AA88FF" opacity={0.6}/>
        </ComposedChart>
      </div>
    </>
  )
}

export default DailyChart