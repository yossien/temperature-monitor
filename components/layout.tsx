import React, { useEffect } from 'react'
import Alert from './alert'
import {
  AppBar,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { useDarkMode } from 'next-dark-mode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  const {
    darkModeActive,
    switchToDarkMode,
    switchToLightMode,
    switchToAutoMode,
  } = useDarkMode()

  const switchScreenMode = (darkModeActive: boolean) => {
    if (darkModeActive) {
      switchToLightMode()
    } else {
      switchToDarkMode()
    }
  }

  useEffect(() => {
    if (darkModeActive) {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  })
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Temperature Monitor
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => {
              switchScreenMode(darkModeActive)
            }}
          >
            {darkModeActive ? (
              <FontAwesomeIcon className="icon" icon={faSun} />
            ) : (
              <FontAwesomeIcon className="icon" icon={faMoon} />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Alert preview={preview} />
      <main>{children}</main>
    </>
  )
}

export default Layout
