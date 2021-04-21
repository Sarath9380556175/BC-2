import axios from 'axios';
import React from 'react';
import '../styles/contactus.css';
import {motion} from 'framer-motion'
class Contactus extends React.Component{
    constructor()
    {
        super();
        this.state={
            firstname:undefined,
            lastname:undefined,
            email:undefined,
            password:undefined,
            comment:undefined,
            Contactus:{}
        }
    }


    

    validation()
    {
        
        var x=document.forms['formdata']['firstname'].style.color="red";
        var y=document.forms['formdata']['firstname'].style.background="blue";
       
    }


    valid()
    {
        var x=document.forms['formdata']['firstname'].style.color="black";
        var y=document.forms['formdata']['firstname'].style.background="white";
       
    }

    
    
   


    handlesubmit=()=>{
        const {firstname,lastname,email,password,comment}=this.state;
        axios({
            url:'http://localhost:8080/contactus',
            method:'POST',
            headers:{'content-Type':'application/json'},
            data:
            {
                firstname:firstname,
                lastname:lastname,
                password:password,
                email:email,
                comment:comment
            }
            
        }).then(res=>this.setState({Contactus:res.data.contactus}))
        .catch(err=>console.log(err))

        this.props.history.push('/thankyou')
}
       
       
    firstname=(event)=>{
        const name=event.target.name;
        console.log(name)
        const value=event.target.value;
        console.log(value)
        this.setState({[name]:value})
    }

    lastname=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value})
    }

    password=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value})
    }

    email=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value})
    }

    comment=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value})
    }

    render()
    {
        return(
        
            <div>
<div className="jumbotron text-center">
		<div style={{fontWeight: "bold"}}>Contactus
<br/>
<motion.form className="rounded forms" name="formdata"  onSubmit={this.handlesubmit} animate={{rotate:360}}>
    {/*eslint-disable-next-line*/}
<i className="fas fa-user"></i>&nbsp;&nbsp;<input type="text" name="firstname"   required  style={{border:"2px solid black"}} className="rounded"  onkeydown="valid()" onKeyDown={this.validation} onKeyUp={this.valid} onChange={this.firstname}/><br/><br/>
<i className="fas fa-user"></i>&nbsp;&nbsp;<input type="text" name="lastname"  required  className="rounded" style={{border:"2px solid black"}} onChange={this.lastname} /><br/><br/>
<i className="fas fa-lock"></i>&nbsp;&nbsp;<input type="password" name="password"  required className="rounded text-primary" style={{border:"2px solid black"}} onChange={this.password}/><br/><br/>
<i className="fas fa-envelope"></i>&nbsp;&nbsp;<input type="email" name="email" required  className="rounded" style={{border:"2px solid black"}}  onChange={this.email}/><br/><br/>
<i className="fas fa-comment"></i>&nbsp;&nbsp;<textarea rows="3" cols="20" width="200" height="30" required   name="comment" className="text-success" style={{fontSize: "12px"}} onChange={this.comment}></textarea><br/><br/>
<motion.button className="btn btn-primary btn-sm" initial={{x:'-100vw'}} animate={{x:0}}>submit</motion.button>
</motion.form>
</div>

</div>
            </div>

        );
}

}

export default Contactus;