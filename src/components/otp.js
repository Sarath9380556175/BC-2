import React from "react";
import axios from "axios";
import qs from 'query-string'



class Otp extends React.Component {
    constructor()
    {
        super();
        this.state={
            otp:[],
            OTP:undefined,
            emailotp:undefined,
            firstotpnumber:undefined
           
          
        }
    }


  
    componentDidMount()
    {
        
        axios({
          
            url:'http://localhost:8080/getotp',
            method:'GET',
            headers:{'content-Type':'application/json'},
    
          })
          .then(res=>this.setState({otp:res.data.getotp, OTP:res.data.getotp.map((item)=>{return item.OTP})}))
  
          .catch(error=>console.log(error))

    }
  

    otp=()=>{
        const {OTP,firstotpnumber}=this.state;
       
    
        const skr=OTP.indexOf(Number(firstotpnumber))
        console.log(skr)
    
        OTP[skr] == firstotpnumber? this.props.history.push('/thankyou') : alert('please enter a valid otp')

            
    }

    skr=(event)=>{
      const hr=event.target.value;
      this.setState({firstotpnumber:hr})
console.log(hr)
    }

    resendotp=()=>{
      const number=(Math.random(123456,654321).toFixed(6)/100*100000000);
      const skr=qs.parse(this.props.location.search)
      const emails=skr.email;
      const mobilenumber=skr.mobilenumber;
       axios({
          
          url:'http://localhost:8080/postotp',
          method:'POST',
          headers:{'content-Type':'application/json'},
          data:
          {
            otp:number,
            email:emails,
            mobilenumber:mobilenumber
          }
        })
        .then(res=>this.setState({otp:res.data.otp}))

        .catch(error=>console.log(error))
    }

  render() {
    return (
      <div className="container text-center">
       
       
          <div className="text-center" style={{color:'deepskyblue'}}>Enter the OTP which is sent to your E-mail</div>
          <br/>
          
        
        <br/>
        <form onSubmit={this.otp}>
        <input type="tel" maxLength="6" style={{width:'4em'}} required onChange={this.skr}/>
        <br/>
        
        <br/>
        <button className="btn btn-success btn-sm ">submit</button>
        </form>
        <br/>

       <div className="text-center" style={{color:'orangered',textDecoration:'underline'}} onClick={this.resendotp}>Resend otp</div>
      </div>
    );
  }
}

export default Otp;

