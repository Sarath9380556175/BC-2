import React from 'react';
import '../styles/aboutus.css';
import axios from 'axios';
import {motion} from 'framer-motion';
import {animations,easings} from 'react-animation';

const styles={
    animation:`pop-in ${easings.easeOutExpo} 5000ms forwards`,
    fontSize:'25px',
    fontWeight:'bold'
}
class Aboutus extends React.Component{
    constructor()
    {
        super();
        this.state=
        {
            aboutus:[],
            aboutusdetails:[]
        }
    }

    componentDidMount()
    {
        axios({
            url:'http://localhost:8080/aboutus',
            method:'get',
            headers:{'content-Type':'application/json'}
        })
.then(res=>this.setState({aboutus:res.data.about}))

.catch(error=>console.log(error))


axios({
    url:'http://localhost:8080/aboutusdetails',
    method:'get',
    headers:{'content-Type':'application/json'}
})
.then(res=>this.setState({aboutusdetails:res.data.aboutus}))

.catch(error=>console.log(error))



    }
    
  
    handleClick=()=>{
        this.props.history.push('/contactus')
    }


    render()
    {
        const {aboutus,aboutusdetails}=this.state
        return(
            <div  className="rounded">
<br/><br/>
	<div class="text-center jumbotron container" style={{paddingTop: "22px",paddingBottom: "10px"}}>

    {
        aboutus.map((item)=>{
            return <div>
            
            <motion.h2 class="aboutus"  animate={{rotate:360}}>{item.title}</motion.h2>
            <motion.div class="jumbotron container" style={{background:`url(${item.image})`}}>
             <motion.h6 style={{color:'yellow'}} initial={{x:'-100vw'}} animate={{x:0}}>{item.aboutus}</motion.h6>
           
        
    </motion.div>
</div>
        })
        }
</div>
{
    aboutus.map((item)=>{
        return  <div className="text-center" style={styles}>{item.name}</div>

    })
}

<br/>
<br/>
<div className="container text-center" >

       
{
    aboutusdetails.map((item)=>{
        return  <motion.div className="aboutus1 rounded" animate={{rotate:360}}>
        
        <div>
            <img src={`../${item.image}`} width="300px" height="150px"  className="rounded "/>
            </div>
            <br/>
            <div>
                <div style={{fontSize:'20px',fontStyle:'italic',fontFamily:'serif',color:'LimeGreen',fontWeight:'bold'}}>{item.developer_name}</div>
                
                <br/>
                <motion.div style={{color:'orangered',fontWeight:'bold',fontStyle:'italic',fontFamily:'serif'}} initial={{y:'-100vw'}} animate={{y:0}}>{item.developer_role}</motion.div>
           
                <br/>
           <button className="btn  btn-secondary bg-dark" style={{padding:'5px 35px 5px 35px'}} onClick={this.handleClick}>{item.contact_name}</button>
            
            </div>
        </motion.div>
    })
}
</div>
  
            </div>
        )
    }
}

export default Aboutus;