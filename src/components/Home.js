import React, { useState } from 'react';
import { Jumbotron } from 'reactstrap';
import  projects  from './projects';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Card from './Card';
import styled from 'styled-components';

const Home = () => {
    const categories= ['All','Art','M.E','Robot']

    const [active, setActive] = useState(categories[0]);
    const [items,setItems] = useState(projects)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const filterItem = (cateItem) => {
      const updatedItems = projects.filter((curElem)=>{
        return curElem.category === cateItem;
      })
      setItems(updatedItems)
      setActive(cateItem)
    }
    
    
    const Tab = styled.button`
      
      cursor:pointer;
      opacity:0.6;
      background:white;
      border: 0;
      outline: 0;
      border-bottom: 2px solid transparent;
      transition: ease border-bottom 250ms;
      ${({active})=>
      active &&
      `
      border-bottom: 2px solid black;
      opacity: 1;
      `
      }
    `;  
    const FilterTitle = styled.button`
      font-weight: bold;
      background:white;
      border: 0;
      outline:0;
    `; 

    function TabGroup() {
      
      return(
        
        <>
          
          
          {categories.map(cate=>(
            <Tab 
              className="filter-tag filters col-1"
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
                        <div className="container">
                            <h1>Hello, I'm Tim.</h1>
                            <h1>Engineer & Designer</h1>
                            <h1>Welcome to my Portfolio!</h1>
                            <p class="quote">Currently available for select projects, collaborations and consulting </p>
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
        <div className="container">
          <div className="row" style={{alignContent:'center', alignItems:'center'}}>
            <FilterTitle
              className="filter-title col-2">
              Filter:
            </FilterTitle>
            
            <TabGroup className="col-6" />
            
            <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm" className="drop-down col-2">
              <DropdownToggle caret  style={{color:"black", background:"white", border:"transparent"}}>
                {active}
              </DropdownToggle>
              <DropdownMenu >
                {categories.map(cate=>(
                  <DropdownItem 
                  
                  onClick={ () => 
                    {
                      if (cate === "All"){
                        setItems(projects)
                        setActive("All")
                      }
                      else {
                      filterItem(cate)
                      }
                    }
                }>{cate}</DropdownItem>
                ))}
                
              </DropdownMenu>
            </Dropdown>
         
          </div>
          {/* main items sections*/}
          <div className="container">
            <div className="row">
              <div className="col-11 mx-auto">
                <div className="row">
                  {
                    items.map((project)=>{
                      const { id, image, category, name, link } = project;
                      return (
                        <Card key={id}
                          image={image}
                          category={category}
                          name={name}
                          link={link}
                          
                        />
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