import React from 'react';
import lines from './lines';
var crypto = require("crypto");

// get key for list item
function getRandomString(s) {
    var result = crypto.randomBytes(s).toString('hex');
    return result;
}

// draw each word
const DrawText = ({ele,unilens}) => {
    const unilen = unilens
    const length = ele.word.length*unilen
    const unilenstr = unilen.toString()+'px'
    const boxlength= length.toString()+'px';
    return(
        <div style={{width:boxlength}} >
            <div className='row'  >
            {ele.word.split('').map((letter)=>{
                return(
                <div key={getRandomString(20)} style={{ color: ele.IsActive?'#ff8400':'#d4d4d4', fontWeight: ele.IsActive?'600':'200', height:unilenstr, width:unilenstr,textAlign:'center',fontSize:unilen >=40? "14pt":"8pt"}}>
                    {letter}
                </div> 
                )
            })
            }
            </div>
        </div>
    )
}

// draw lines
function DrawLine({line,containerstr,unilen}){
    
    return(
        <div  className="row justify-content-center align-self-center mx-auto" style={{containerstr}}>
            {
                line.map((ele)=>{
                    return  <DrawText key={getRandomString(10)} ele={ele} unilens={unilen}/>
                   
                })
            }
        </div>
    )
}

// assemble lines
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
      }
    
     handleResize = (e) => {
      this.setState({ windowWidth: window.innerWidth });
     };
    
     componentDidMount() {
      window.addEventListener("resize", this.handleResize);
     }
    
     componentWillUnmount() {
      window.addEventListener("resize", this.handleResize);
     } 
    render() {
        const { windowWidth } = this.state; 
        const unilens = windowWidth >550 ? 40:25  // responsive
        const containerstr = (unilens*12).toString()+'px'
    return(
        <div>
            <h4 style={{padding:"10px"}}>This is a clock</h4> 
            <div className='justify-content-center align-self-center mx-auto shadow mb-5 rounded' style={{backgroundColor:'white', width:containerstr, height:containerstr ,paddingTop:unilens}}>
            { lines.map((line)=>{
                
                return(
                    <div key={getRandomString(15)}>
                    {<DrawLine line={line} unilen={unilens} containerstr={containerstr}/>}
                    </div>
                )
            })}
            </div>
        </div>
    )
    }
}

export default Clock;