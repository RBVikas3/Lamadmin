import "./NavBar.scss"
const NavBar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="logo.svg" alt="logo"/>
            <span>lamadmin</span>

        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon"/>
            <img src="/app.svg" alt="" className="icon"/>
            <img src="/expand.svg" alt="" className="icon"/>
            <div className="notification">
            <img src="/notifications.svg" alt="" className="icon"/>
                 <span>1</span>
            </div>
            <div className="users">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="icon"/>
            <span>Jane</span>
                   
            </div>
            <img src="/settings.svg" alt="" className="icon"/>


        </div>
    </div>
  )
}

export default NavBar