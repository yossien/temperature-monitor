import Condition from '../types/condition'
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
  Area,
  Bar,
  Brush,
  AreaChart,
} from 'recharts'
import { useDarkMode } from 'next-dark-mode'

type Props = {
  conditionList: Condition[]
}
const DailyChart = ({ conditionList }: Props) => {
  const { darkModeActive } = useDarkMode()
  const className = darkModeActive ? 'dark' : ''
  const stroke = darkModeActive ? '#d4cccc' : '#888888'
  return (
    <>
      <div className={`chart ${className}`}>
        <h3 className={`temperature ${className}`}>Temperature</h3>
        <ResponsiveContainer width="90%" height={150}>
          <AreaChart syncId="sync1" data={conditionList}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" stroke={stroke} />
            <YAxis domain={['dataMin', 'dataMax']} stroke={stroke} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="temperature"
              fill="#55EE88"
              stroke="#33DD44"
              opacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
        <h3 className="humidity">Humidity</h3>
        <ResponsiveContainer width="90%" height={150}>
          <AreaChart syncId="sync1" data={conditionList}>
            <CartesianGrid strokeDasharray="3 3" stroke="#8888BB" />
            <XAxis dataKey="time" stroke={stroke} />
            <YAxis domain={['dataMin', 'dataMax']} stroke={stroke} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="humidity"
              fill="#66b1ef"
              stroke="#66b1ef"
              opacity={0.6}
            />
            <Brush dataKey="time" stroke="#AAEEEE" opacity="0.8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default DailyChart
