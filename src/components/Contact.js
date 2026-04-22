const Contact = ()=>{
    return (
       
        <div>
            <h1 className="font-bold">Contact Us Page</h1>
            <div>
                <input type="text" placeholder="name" className="border-2"></input>
                <input type="text" placeholder="email" className="border-2 m-2"></input>
                <button className="bg-amber-100 border-2 rounded-lg">Submit</button>
            </div>
        </div>
    )
}

export default Contact;