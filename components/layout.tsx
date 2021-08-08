import React from "react";
import Alert from "./alert";
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";

type Props = {
  preview?: boolean,
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Container fixed>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">Temperature Monitor</Typography>
          </Toolbar>
        </AppBar>
        <Alert preview={preview}/>
        <main>
          {children}
        </main>
      </Container>
    </>
  )
}

export default Layout