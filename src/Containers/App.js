import React from 'react';
import Cardlist from '../Components/Cardlist.js';
import Searchbox from '../Components/Searchbox.js';
import Scroll from '../Components/Scroll.js';



class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    onsearchchange = (a) => {
        this.setState({searchfield : a.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }

    render() {

        const {robots, searchfield} = this.state;

        const filterrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return (
            <div className='tc'> 
                <h1 className='f1 b grow white'>ROBO-FRIENDS</h1>
                
                <Searchbox onsearch={this.onsearchchange}/>
                <Scroll>
                    <Cardlist robots={filterrobots}/>
                </Scroll>
            </div>
        );
    }
}


export default App; 