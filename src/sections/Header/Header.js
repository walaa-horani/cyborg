import logo from '../../assets/img/logo.png'
import NavItem,{NavItemDropDown} from '../../components/NavItem/NavItem'




const Header = (props) => {
  return (
    <div className="navbar navbar-expand-md  navbar-dark text-white ">
        <div className="container">
            <a href="#" className="navbar-brand">

            <img src={logo}/>

            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                  <NavItem>
                  <a href="#hero" className="nav-link">home</a>
                  </NavItem>
                  
                  <NavItem>
                  <a href="#features" className="nav-link">browse</a>
                  </NavItem>

                  <NavItem>
                  <a href="#hero" className="nav-link">features</a>
                  </NavItem>
                    <NavItemDropDown>
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Learn</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="#next" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </NavItemDropDown>
                    
                    <NavItem>
                  <a href="#hero" className="nav-link">profile</a>
                  </NavItem>
                    <li className="nav-item"><a href="./index-ar.html" className="nav-link">عربي</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header