import React, { Component } from 'react';
const URL_LAN = 'http://localhost:3008/Courses';


class language extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[]
        }
    }

    rendertags = (t) => {
        return t.map((tag,index)=>{
            return (
                <div className="tag_container">
                    {tag}
                    </div>
            )
        })
    }
    changer = ()=> {
       const i =document.getElementById('upvote').innerHTML;
      console.log(i);  
    }

    renderlink = (val) => {
        return val.map((m)=>{
            return (

                <div className="root">
                      <div className="sub">
                   <div className="link_sub">
                  <a  className="anchor" href={m.url} alt={m.name} target="_blank">{m.name} </a>
                     </div>
                     <br />
                    <div className="tags">
                     {this.rendertags(m.tags)}
                     </div>
                  </div>

                <br />
                <hr />
            </div>
            )
        })
    }

renderlist = (i)=> {
   return i.map((item)=> {
       return (

           <div className="second_root">
           <div className="img_ab">
            <img alt={item.name} src={`/images/${item.logo}`} style={{ height: "70px", width: "70px" }} />
            </div>
            <div className="hardik">
            <h3 className="name">{item.name}</h3>
            <br />
            <p className="about">{item.about}</p>
            <hr />
            </div>
            {this.renderlink(item.links)}
            
            </div>
       )
   })
      
}
componentDidMount(){
    fetch(`${URL_LAN}?name=${this.props.match.params.id}`,{method:"GET"})
    .then(response => response.json())
    .then(json => {
        this.setState({data:json})
    })
}

    render() {
        return (
            <div className="main_root">
                {this.renderlist(this.state.data)}
                
            </div>
        );
    }
}

export default language;




const bycrypt  = require('bycrypt');


async function run(){
const result =  await bycrypt.genSalt(10);
console.log(result);
}


run();


7298967055