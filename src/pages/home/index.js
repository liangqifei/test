import React from 'react'
import './index.less'
import imgUrl from '../../../static/img/sss.png'
class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div className='home'>Home Home<img src={imgUrl}/></div>
  }
}

export default Home