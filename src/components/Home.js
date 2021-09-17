import React, { useState } from 'react';
import { Jumbotron } from 'reactstrap';
import  projects  from './projects';
import styled from 'styled-components';

const Home = () => {
    const categories= ['All','Art','M.E','Robot']

    const [active, setActive] = useState(categories[0]);
    const [items,setItems] = useState(projects)

    const filterItem = (cateItem) => {
      const updatedItems = projects.filter((curElem)=>{
        return curElem.category === cateItem;
      })
      setItems(updatedItems)
      setActive(cateItem)
    }
    
    
    const Tab = styled.button`
      
      cursor: pointer;
      opacity:0.6;
      background:white;
      border: 0;
      outline:0;
      ${({active})=>
      active &&
      `
      border-bottom: 2px solid black;
      opacity: 1;
      `
      }
    `;  

    function TabGroup() {
      
      return(
        
        <>
          {categories.map(cate=>(
            <Tab 
              className="filter-tag col-1"
              key={cate}
              active={active === cate}
              onClick = { () => {
                  if (cate === "All"){
                    setItems(projects)
                    setActive("All")
                  }
                  else {
                  filterItem(cate)
                  }
                }
              }
            >
              {cate}
            </Tab>
          ))}
          </>
        
        
      )
    }
  

    return(
      <div className="container">
         <Jumbotron>
            <div className="container" style={{marginTop:"80px", marginBottom:'40px'}}>
                <div className="row row-header">
                    <div className="col-12 col-sm-8" style={{textAlign:"left"}}>
                        <div className="container welcome">
                            <h1>Hello, I'm Tim.</h1>
                            <h1>A Enginner & Designer</h1>
                            <h1>Welcome to my Portfolio!</h1>
                            <p>Currently available for select projects, collaborations and consulting </p>
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
        <div className="container">
          <div className="row" algin="left">
           
              <span className="col-1 filter">Filter:</span>
              
              <TabGroup className="col-6" />

          </div>
          {/* main items sections*/}
          <div className="container">
            <div className="row">
              <div className="col-11 mx-auto">
                <div className="row my-5">
                  {
                    items.map((project)=>{
                      const { id, image, category, name } = project;
                      return (
                        <div key={id}>
                          
                          <h1> {name}</h1>
                          <h1>{image}</h1>
                          <h1>{category}</h1>
                          
                        </div>
                      )
                    })
                  }
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
      
    );
  
}

export default Home;   