import Header from "../components/Header"
import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../utils/appStore"
import { BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"

it("Should load Header Component with Login button" , ()=>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>)

    //Querying
    const loginbutton = screen.getByRole("button" , {name: "Login"} );

    fireEvent.click(loginbutton);

    const logoutbutton = screen.getByRole("button", {name: "LogOut"});

    expect(logoutbutton).toBeInTheDocument();
})