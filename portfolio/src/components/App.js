import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';

class App extends Component {
    state = { DisplayBio: false};

    // constructor() {
    //     super();
    //     this.state = { DisplayBio: false };

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState ({DisplayBio: !this.state.DisplayBio});
    }

    render() {
        return (
           <div>
                <img src = {profile} alt = 'profile' className = 'profile'/> 
                <h1>Hello !!</h1>
                <p> My name is Shubham.</p>
                <Title />
                <p> I always looks to do good stuffs </p>
                {
                this.state.DisplayBio ? (
                 <div>
                    <p> I lives in Pune and code everyday </p>
                    <p> My favorite language is javascript and React.js is awesome </p>
                    <p> Besides coding I also love music and dance </p>
                    <button onClick = {this.toggleDisplayBio}> Show Less </button>
                 </div>
                )
                : <div>
                    <button onClick = {this.toggleDisplayBio}> Read More</button>
                  </div>
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />  
           </div>
        );
    }
}
  
export default App;
