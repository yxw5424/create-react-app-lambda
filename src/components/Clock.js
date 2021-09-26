import React from 'react';
import lines from './lines';



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
                <div class="clock-letter" style={{ color: ele.IsActive?'#ff8400':'#d4d4d4', fontWeight: ele.IsActive?'600':'200', height:unilenstr, width:unilenstr,textAlign:'center',fontSize:unilen >=40? "14pt":"8pt"}}>
                    {letter}
                </div> 
                )
            })
            }
            </div>
        </div>
    )
}


function DrawLine({line,containerstr,unilen}){
    
    return(
        <div  className="row justify-content-center align-self-center mx-auto" style={{containerstr}}>
            {
                line.map((ele)=>{
                    return  <DrawText ele={ele} unilens={unilen}/>
                   
                })
            }
        </div>
    )
}
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
        const unilens = windowWidth >550 ? 40:25
        const containerstr = (unilens*12).toString()+'px'
    return(
        <div>
            it is a clock 
            <div className='justify-content-center align-self-center mx-auto shadow mb-5 rounded' style={{backgroundColor:'white', width:containerstr, height:containerstr ,paddingTop:unilens}}>
            { lines.map((line)=>{
                
                return(
                    <div >
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