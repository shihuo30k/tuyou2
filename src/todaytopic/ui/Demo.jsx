import { PullToRefresh } from 'antd-mobile';
import React from "react";
import axios from "axios";
import { Democon } from "./styledtodaytopic"
 

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
      showdata:[],
      pageindex:-1,
      pagesize:5
    };
  
  }

  componentDidMount() {
      axios.get("http://localhost:9000/todaytopic").then(res=>{
        
        let showdata1=res.data.comment.splice(0,this.state.pagesize)
        this.setState({ 
          refreshing: true ,
          pageindex:0,
          data:res.data.comment,
          showdata:showdata1
        });
        // console.log(this.state.data)
      }).catch(err=>{
        console.log(err)
      })
  }
  render() {
    return (
    <div>
      <PullToRefresh
        damping={60}

        style={{
          height: this.state.height,
          overflow: 'auto',
          touchAction:"none"
        }}
        distanceToRefresh
         
        direction='up'
        refreshing={this.state.refreshing}

        onRefresh={() => {
         
          let data1=this.state.data.splice((this.state.pageindex)*this.state.pagesize,this.state.pagesize)
          var data2=this.state.showdata.concat(data1)
          this.setState({ 
            refreshing: true ,
            // data:[]
            showdata:data2
          });
        }}
      >
        { 
          this.state.showdata && this.state.showdata.map(i => (
            <Democon key={i.id} >
               <div className="up">
                      <div className="imgcon">
                            <div className="img">
                              <img src={i.img} alt=""/>
                            </div>
                            <div>
                                <div className="name">{i.name}</div>
                                <div className="date">{i.date}</div>
                            </div>
                     </div>
                     <div className="lou">{i.id+1}楼</div>
               </div>
               <div className="content">
                      {i.content}
               </div>

               <div className="huifu">
                 <img src="http://yl.charmiot.com/travel_qygbz1/images/%E6%B8%B8%E8%AE%B0/u987.svg" alt=""/>
                 <span>回复</span>
               </div>
            </Democon>
          ))
        }
      </PullToRefresh>
    </div>
    );
  }
}

export default Demo