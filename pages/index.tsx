import Condition from '../types/condition'
import { getCondition } from '../lib/api'
import Layout from '../components/layout'
import Head from 'next/head'
import useSWR from 'swr'
import Monitor from '../components/monitor'
import format from 'date-fns/format'
import dynamic from 'next/dynamic'

const DailyChart = dynamic(() => import('../components/dailyChart'), {
  ssr: false,
})

const Index = () => {
  const conditionList: Condition[] = useCondition()

  const latestCondition = () => {
    return conditionList[conditionList.length - 1] ?? undefined
  }

  return (
    <Layout>
      <Head>
        <title>temperature monitor page</title>
      </Head>
      <div style={{ marginTop: 60 }}>
        <Monitor condition={latestCondition()} />
        <DailyChart conditionList={conditionList} />
      </div>
    </Layout>
  )
}

export default Index

export const fetcher = (param) => {
  // from 12 hour ago
  const from = new Date().getTime() - 3600 * 12 * 1000
  return getCondition(from)
}

export const testCondition = () => {
  return [
    {
      temperature: 25.3,
      humidity: 36.4,
      timestamp: 1628429994.064391,
    },
    {
      temperature: 25.2,
      humidity: 36.3,
      timestamp: 1628430296.591606,
    },
    {
      temperature: 25.4,
      humidity: 36,
      timestamp: 1628431507.728085,
    },
    {
      temperature: 25.3,
      humidity: 35.9,
      timestamp: 1628432717.965283,
    },
    {
      temperature: 25.3,
      humidity: 36.3,
      timestamp: 1628431205.19934,
    },
    {
      temperature: 25.3,
      humidity: 35.9,
      timestamp: 1628432415.104741,
    },
    {
      temperature: 25.3,
      humidity: 36.4,
      timestamp: 1628430902.73972,
    },
    {
      temperature: 25.2,
      humidity: 36.3,
      timestamp: 1628429691.674006,
    },
    {
      temperature: 25.3,
      humidity: 36.4,
      timestamp: 1628430599.161038,
    },
    {
      temperature: 25.4,
      humidity: 36.1,
      timestamp: 1628432112.525528,
    },
    {
      temperature: 25.3,
      humidity: 35.8,
      timestamp: 1628431810.095181,
    },
    {
      temperature: 25.4,
      humidity: 37.5,
      timestamp: 1628433020.394283,
    },
  ]
}

export const useCondition = () => {
  // update interval 5min
  const { data, error } = useSWR('/api/condition', fetcher, {
    dedupingInterval: 60 * 5 * 1000,
  })
  if (!data || error) {
    return []
  }

  // const data = testCondition()

  data.sort((a, b) => {
    return a.timestamp > b.timestamp ? 1 : a.timestamp < b.timestamp ? -1 : 0
  })

  return data.map((d) => {
    const t = d.timestamp * 1000
    const dt = new Date(t)
    return {
      timestamp: t,
      temperature: d.temperature,
      humidity: d.humidity,
      date: format(t, 'yyyy-M-d'),
      time: format(t, 'HH:mm'),
    }
  }) as Condition[]
}
