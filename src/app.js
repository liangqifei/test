import React, { Suspense, lazy } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './pages/login/index'
// import antScreenLogin from './pages/ant.made/ant.screen.login/index'
// import AntEntrance from './pages/ant.made/index'  //增加定制路由,类似于登录
// import MainScreen from './pages/ant.made/main.screen/index'  //增加定制页面
// import AntScreen from './pages/ant.made/ant.screen/index'  //增加定制页面
// import { envUrl } from './service/axios'
// const Main = lazy(() => import(/* webpackChunkName: "entry.main" */ './main'))
// const TaskDetailSmall = lazy(() => import(/* webpackChunkName: "p.task.details.small" */ './pages/task.details.small/index'))
// const taskDetailSmallDell = lazy(() => import(/* webpackChunkName: "p.task.details.small.dell" */ './pages/task.details.small.dell/index'))
//定制大屏需求 路由配置

@withRouter
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Switch>
        <Route path={`/`} component={Login} exact />
        {/* <Route path={`/${envUrl.router}/login`} component={Login} exact />
        <Route path={`/${envUrl.router}/loginDing`} component={LoginDing} exact />
        <Route path={`/${envUrl.router}/antScreenLogin`} component={antScreenLogin} exact />
        <Route path={`/${envUrl.router}/antEntrance`} exact component={AntEntrance} />
        <Route path={`/${envUrl.router}/antEntrance/mainScreen`} component={MainScreen} exact />
        <Route path={`/${envUrl.router}/antEntrance/antScreen/:id`} component={AntScreen} exact/>
        <Suspense fallback={<LoadingPage />}>
          <Route path={`/${envUrl.router}/taskDetailSmall/:id`} component={TaskDetailSmall} />
          <Route path={`/${envUrl.router}/taskDetailSmallDell`} component={taskDetailSmallDell} exact />
          <Route path={`/${envUrl.router}/task`} component={Main} exact />
          <Route path={`/${envUrl.router}/project`} component={Main} exact />
          <Route path={`/${envUrl.router}/projectDetails/:id`} component={Main} />
          <Route path={`/${envUrl.router}/statistics`} component={Main} exact />
          <Route path={`/${envUrl.router}/dynamic`} component={Main} exact /> 
        </Suspense>*/}
      </Switch>
    )
  }
}

export default App
