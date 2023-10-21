import { useNavigate } from "react-router-dom"
import '../styles/components/Navigation.scss'

export const Navigation = () => {

    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar">
                <div className="buttons-container">
                    <div className="button button-dashboard" onClick={()=>{navigate("/dashboard")}}>Dashboard</div>
                    <div className="button button-charities" onClick={()=>{navigate("/charities")}}>Charities</div>
                    <div className="button button-settings" onClick={()=>{navigate("/settings")}}>Settings</div>
                </div>
            </nav>
        </>
    )
}