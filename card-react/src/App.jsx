import * as React from 'react';
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className="card">
        <div className="card-header text-center">FREE
          <div id="title" className="text-center">$ 0/month</div>
        </div>
        <div className="card-body">
          <ul>
            <li> single User</li>
            <li> 50GB Storage</li>
            <li> Unlimited Public Projects</li>
            <li> Community Access</li>
            <li id='none'> Unlimited Private Projects</li>
            <li id='none'> Dedicated phone Support</li>
            <li id='none'> Free subdomain</li>
            <li id='none'> Monthly status Report</li>
          </ul>
          <button id='fade' className="btn btn-primary">BUTTON</button>
        </div>
      </div>
      <div className="card">
        <div className="card-header text-center">PLUS
          <div id="title" className="text-center">$ 9/month</div>
        </div>
        <div className="card-body">
          <ul>
            <li> 5 User</li>
            <li> 50GB Storage</li>
            <li> Unlimited Public Projects</li>
            <li> Community Access</li>
            <li> Unlimited Private Projects</li>
            <li> Dedicated phone Support</li>
            <li> Free subdomain</li>
            <li id='none'> Monthly status Report</li>
          </ul>
          <button id='fades' className="btn btn-primary">BUTTON</button>
        </div>
      </div>
      <div className="card">
        <div className="card-header text-center">PRO
          <div id="title" className="text-center">$ 49/month</div>
        </div>
        <div className="card-body">
          <ul>
            <li> Unlimited User</li>
            <li> 50GB Storage</li>
            <li> Unlimited Public Projects</li>
            <li> Community Access</li>
            <li> Unlimited Private Projects</li>
            <li> Dedicated phone Support</li>
            <li> Free subdomain</li>
            <li> Monthly status Report</li>
          </ul>
          <button className="btn btn-primary">BUTTON</button>
        </div>
      </div>
    </div>
  )
}

export default App
