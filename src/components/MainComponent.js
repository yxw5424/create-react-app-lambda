

import React, { Component } from 'react';

import HeaderComponent from './Header';
import HeroComponent from './Homepage/HeroComponent';
import ProjectComponent from './Homepage/ProjectComponent';
import SkillsComponent from './Homepage/SkillsComponent';
import PortfolioComponent from './Homepage/PortfolioComponent';
import FooterComponent from './FooterComponent';
import ProjectPage from './ProjectPage';
import GalleryPage  from './GalleryPage';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component{
  
  render(){
    const HomePage = () => {
      return(
        <div>
          <HeroComponent />
          <ProjectComponent />
          <SkillsComponent />
          <PortfolioComponent/>
        </div>
       
      )
    }
  
    return (
      <div className="App">
        {/* <TransitionGroup>
            	<CSSTransition key={this.props.location.key} classNames="page" timeout={300}> */}
        <HeaderComponent/>
          <Switch location={this.props.location}>
						<Route path='/home' component={HomePage} />
						<Route exact path='/projects' component={() => <ProjectPage/>} />
            <Route exact path='/gallery' component={() => <GalleryPage/>} />
						{/* <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
						<Route path='/menu/:dishId' component={DishWithId} />
						<Route exact path='/contactus' component={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />} /> */}
						<Redirect to="/home" />
          </Switch>
        <FooterComponent />      
        {/* </CSSTransition>
      </TransitionGroup> */}

    </div>
    );
  }
}

export default withRouter((Main))












//   render() {
	
  
// 	const DishWithId = ({match}) => {
// 	return(
// 		<DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
// 			isLoading={this.props.dishes.isLoading}
// 			errMess={this.props.dishes.errMess}
// 			comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
// 			commentsErrMess={this.props.comments.errMess}
// 			postComment={this.props.postComment}
// 		/>
// 	);
// 	};
//     return (
//       <div>
        
        
//       </div>
//     );
//   }
// }

// ;

