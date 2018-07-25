import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Profiles} from '../shared/profiles';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import ProfileDetail from './ProfileDetail';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
const mapStateToProps = state => {
    return {
   profiles: state.profiles
    }
  }
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
     
    
  };
}
 





  render() {
    const HomePage = () => {
        return(
            <Home/>
        );
    }


   const ProfileWithId =({match})=> {
     return (
         <ProfileDetail profile={this.props.profiles.filter((profile)=>profile.id===parseInt(match.params.profileId,10))[0]}
        />
        );
   };



    return (
      <div className="App">
      
      <div>
        <Header/>
      <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=> <Menu profile={this.props.profiles}/>}/>
          <Route path="/menu/:profileId" component={ProfileWithId}/>
          <Route path="/aboutus" component={About}/>
          <Route path="/contactus" component={Contact}/>
          <Redirect to="/home" />
          </Switch>
        <Footer/>
        </div>
    </div>
      
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
