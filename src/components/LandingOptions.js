import React from 'react'
import LoginModal from '../containers/LoginModal'
import { Link } from 'react-router-dom'



const userOptions= props => {
return(
<div className="ui centered cards">
  <div className="ui card">
    <div className="content">
      <div className="header">Sell My Car</div>
      <div className="meta">1230 cars were sold last week</div>
      <div className="description">
      First two pictures are free
      </div>
      <LoginModal signin={props.signin} />
    </div>
  </div>
  <div className="ui card">
    <div className="content">
      <div className="header">Find My Car</div>
      <div className="meta">over 10,000 cars to choose from</div>
      <div className="description">
      Latest Brand New Deals 
      </div>
      <button className="ui button"><Link to='/cars'>Search</Link></button>
    </div>
  </div>
</div>
)
}

export default userOptions

