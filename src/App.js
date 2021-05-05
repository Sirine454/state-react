import React  from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
this.state = {
    Fullname: "Sirine Bennaceur",
    Profession:"A fullstack Js developer ",
    Bio:" I'm 26 years old I've been an Electrical automatic enginner,i graduated in October 2020 from national school of  engineers of Gabes.I did a professional transition to discover new challenges and better opportunities. I recently joind a very instructive Course among GOMYCODE team and I instantly started to learn a lot in a very short period.I'm able now to use Html, CSS ,javascript and React Js to create my Web applications I am a Devolper and also a Designer. An ambitious person that accepts all kinds ofchallenges and has no limitations.." ,
    imageSrc:'http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/t/57b057398419c2c454f09924/1471025851733/',
  
     content:"Enduring means accepting things as they are and not as you wish them to be. And then looking ahead not behind" ,
      source:"Rafael Nadal",
      show: true,
    time:0,
  };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  

  render() {
    
    
    
  return (
<div className="app">
        {this.state.show && (
          <>
          
           <div className="image" style={{backgroundImage: 'url(' + this.state.imageSrc + ')'}}>
            
             </div>
         
          <h1 className="Fullname">
            {this.state.Fullname}
            </h1>
            <div className="Bio">{this.state.Bio}</div>
              <p>{this.state.profession}</p>
            <div className="quote">
            <blockquote>&ldquo; {this.state.content} &rdquo;</blockquote>
            </div>
            <br></br>
            <div className="source">&mdash;{this.state.source}</div>
            
          </>
        )}

        <button className="btn" onClick={this.handleShowPerson}>Click here</button>
        <div className="counter">
          The last component was mounted since: {this.state.time} seconds
        </div>
      </div>
    );
        }}

export default App;
