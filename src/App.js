import React, { Component } from "react";
import Cardlist from './Cardlist';
//import { robots } from './robots';
import SBox from './searchBox';
import scroll from './scroll';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
//fechting data from an external source
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        }).then(user => {
            this.setState({robots: user})})
        
    }

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        

    }

    render(){
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        console.log(filteredRobots);
        return !robots.length ?
             <h1>Loading</h1> :
       
             (
                <div className="tc">
                    <h1 className="f1">RobotFriends</h1>
                    <SBox searchChange = {this.onsearchChange}/>
                    <scroll>
                        <Cardlist robots={filteredRobots}/>
                    </scroll>
                    
                </div>
            )
        

    }
}

export default App;