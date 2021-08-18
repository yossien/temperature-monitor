import React, { useEffect } from 'react'
import Alert from './alert'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { useDarkMode } from 'next-dark-mode'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  const { darkModeActive } = useDarkMode()
  useEffect(() => {
    if (darkModeActive) {
      document.querySelector('body').classList.add('dark')
    }
  })
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Temperature Monitor</Typography>
        </Toolbar>
      </AppBar>
      <Alert preview={preview} />
      <main>{children}</main>
    </>
  )
}

export default Layout
