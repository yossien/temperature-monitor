import {ReactNode} from 'react'

type Props = {
  children?: ReactNode
}
const Container = ({children}: Props) => {
  return (
    <div className="container ma-auto px-5">{children}</div>
  )
}