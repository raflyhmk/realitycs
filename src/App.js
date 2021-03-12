import React, { useEffect } from 'react'
import {BrowserRouter, Switch, Route, useLocation, withRouter,
} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Pricing from './pages/Pricing'
import Stories from './pages/Stories'
import Features from './pages/Features'

function App() {
  function _ScrollToTop(props) {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    return props.children
  }
  const ScrollToTop = withRouter(_ScrollToTop)
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/pricing' exact component={Pricing} />
        <Route path='/stories' exact component={Stories} />
        <Route path='/features' exact component={Features} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App


