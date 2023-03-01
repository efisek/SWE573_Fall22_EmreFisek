import "./topbar.css"
import { Search, Person, Notifications } from "@material-ui-icons"


export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarRight">
                <span className="logo">uselaterLogo</span>
            </div>
            <div className="topbarLeft">
                <div className="topbarLinks">
                    <span className="logo">Homepage</span>
                    <span className="logo">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>    
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">2</span>    
                    </div>
                </div>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input placeholder="Enter a word" className="searchInput"/>
                </div>
            </div>
        </div>
    )
}