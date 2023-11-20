import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import './assets/styles/layout.scss'
export default function Layout(){
    return(
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    );
}