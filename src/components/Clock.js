import React from 'react';
import lines from './lines';

const unilens=40
const container = unilens*12
const containerstr = container.toString()+'px'

const DrawText = ({word,IsActive,id}) => {
    const unilen = unilens
    const length = word.length*unilen
    const unilenstr = unilen.toString()+'px'
    const boxlength= length.toString()+'px';
    return(
        <div style={{width:boxlength}} >
            <div className='row' >
            {word.split('').map((letter)=>{
                return(
                <div  style={{ color: IsActive?'#00ffcc':'#d4d4d4', fontWeight: IsActive?'600':'400',height:unilenstr,width:unilenstr,textAlign:'center'}}>
                    {letter}
                </div> 
                )
            })
            }
            </div>
        </div>
    )
}


function DrawLine(props){
    return(
        <div  className="row justify-content-center align-self-center mx-auto" style={{width:containerstr}}>
            {
                props.map((ele)=>{
                    return  DrawText(ele)
                   
                })
            }
        </div>
    )
}

function Clock(){
    
    return(
        <div>
            it is a clock
            <div className='justify-content-center align-self-center mx-auto shadow mb-5 rounded' style={{backgroundColor:'white', width:containerstr,height:containerstr ,paddingTop:unilens}}>
            { lines.map((line)=>{
                return(
                    <div >
                    {DrawLine(line)}
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Clock;