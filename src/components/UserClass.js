import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 1
        }
        console.log("constructor")
    }
     
    componentDidMount(){
        console.log("ComponentDidMount")
        //Api call here
    }
    
    render() {
         const{name , location} = this.props;
         const{count ,count2} = this.state;
         console.log("render");
        return (
           <div className = "user-card">
            <h2>Count: {count}</h2>
            <div>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count +1,
                    })
                }}>Increase Count</button>
            </div>
            <h1>{name}</h1>
            <h2>{location}</h2>
        </div>
        )
    }
}

export default UserClass;
