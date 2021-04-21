import React from 'react';
import  '../styles/Home.css';
import {withRouter} from 'react-router-dom';
import {motion} from 'framer-motion'
class QuicksearchItem extends React.Component{

    quicksearch=(mealtypeId)=>{
        
        this.props.history.push(`/Dishes/?restaurant=${mealtypeId}`)
    }
    render()
    {
        const {items}=this.props;
        return(
  <motion.div className="one rounded"  animate={{
    scale: 1,
    rotate: 360,
  }}  data-toggle="tooltip" title={items.content} data-placement="bottom" onClick={()=>this.quicksearch(items.badge)}>
      <div style={{display: "inline-block",width: "45%"}}>
          <img src={items.image} width="129px" height="149px" alt="notfound" className="rounded-circle"/>
      </div>
      <motion.div style={{display: "inline-block",width: "45%",verticalAlign: "top"}} className="ml-3" initial={{opacity:0.5}} animate={{opacity:1}}>
          <div className="badge badge-dark rounded-circle  ml-3">{items.badge}</div>
          <div className="burger">{items.name}</div>
          <div className="two">{items.content}</div>
      </motion.div>

  </motion.div>


        )
    }
}

export default  withRouter(QuicksearchItem);