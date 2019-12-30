import React from 'react'
import { connect } from 'react-redux'
import commonActions from '../../redux/common/acitons'
import { Input,Button } from 'antd'
@connect(
    state => {
        return {
        version: state.common.version,
        }
    },
    {
        setVersion: commonActions.setVersion
    }
)
class Login extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: envUrl.loginUser.userName,
        password: envUrl.loginUser.passWord,
        loading: false
      }
    }
    loginClick() {
      this.setState({loading:true})
      const { username,password } = this.state
      login(username,password,(data)=>{
        if(data.err){
          return false
        }
        if (data) {
          setLocal('user',data)
          this.props.getApiAccess(data)
          this.props.saveUserInfo(data)
          this.props.closeTaskDetails()
          this.setState({loading:false})
          this.props.history.push(`/${envUrl.router}/task`)
        }
      },()=>{
        this.setState({loading:false})
      })
    }
    valChange(type,val) {
      if (type === 'username') {
        this.setState({username:val})
      } else if (type === 'password') {
        this.setState({password:val})
      }
    }
  
    render() {
      const {username,password,loading,version} = this.state
      return (
        <div style={{width:'500px',margin:'150px auto 0 auto'}}>
          <Input placeholder="用户名" value={username} onChange={(e)=>{this.valChange('username',e.target.value)}} />
          <Input placeholder="密码" value={password} onChange={(e)=>{this.valChange('password',e.target.value)}} />
          <Button type="primary" loading={loading} onClick={()=>{this.loginClick()}}>登录{version}</Button>
        </div>
      )
    }
  }
  
  export default Login
  