import React from 'react';
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min';

 
class Login extends React.Component {
  constructor(){
    super();
    this.state={
      counter:3,
      autorized: false,
      isControl: false,
      time:10,
    }
  }

enableInput=()=>{
  
alert("hakkınız kalmadı")
  setTimeout(()=>this.setState({isControl:false,counter:3,time:10}),10000)
 
  
}
 checkAutorized=()=>{
  const input = document.querySelector(".form-control")
  

if (this.props.userInfo.password=== input.value) { this.setState({autorized:true})

}
else {this.setState({counter:this.state.counter-1})
  alert(this.state.counter)}
  if(this.state.counter===0) {
  
    

  this.setState({isControl:true})
  this.enableInput()
  }
}



  render() {
  

let login = (
  <div className="card">
        <form class="form-inline" action='#' onSubmit={this.checkAutorized}>
          <div class="form-group">
            <input type="password" class="form-control mx-sm-3" placeholder="Password" disabled={this.state.isControl}/>
            <button type="submit" class="btn btn-primary" disabled={this.state.isControl}>Submit</button>
          </div>
        </form>
      
      </div>
);

let contact = (
  <div className="card">
    <div className="top">
      <h2 className="name">{this.props.userInfo.name}</h2>
      <img
        className="circle-img"
        src={this.props.userInfo.imgURL}
        alt="avatar_img"
      />
    </div>
    <div className="bottom">
      <p className="info">{this.props.userInfo.phone}</p>
      <p className="info">{this.props.userInfo.mail}</p>
    </div>
  </div>
);

return (
  <div id="authorization">
    <h1>
      {this.state.autorized ?"contact profil":"Enter the Password"}</h1>
    {this.state.autorized ?contact:login} 
  </div>
)
  }
}


export default Login;