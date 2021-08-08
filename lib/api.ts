import axios from 'axios'

type ResponseType = [
  {
    timestamp: number,
    temperature: number,
    humidity: number
  }
]

export const getCondition = async (from: number) => {
  const url = `${process.env.NEXT_PUBLIC_TEMPERATURE_API_URL}?from=${from}&to=345`
  const res = await axios.get<ResponseType>(url, {
    headers: {
      'X-API-Key': process.env.NEXT_PUBLIC_TEMPERATURE_API_KEY
    }
  })

  return res.data
}