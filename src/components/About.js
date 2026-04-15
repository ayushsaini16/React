 import User from "./User";
 import UserClass from "./UserClass";

 const About = ()=>{
    return (
        <div>
            <h1>Hello</h1>
            <h3>This is About page</h3>
            <User name= {"Ayush"} location = {"Kanpur"}/>
            <UserClass name= {"Ayush"} location = {"delhi"}/>
        </div>
    )
}

export default About;