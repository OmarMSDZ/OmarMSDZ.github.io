import {React, useState} from 'react'

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNav = () => {
    if (!isNavCollapsed) {
      setIsNavCollapsed(true);
    }
  };

  return(
        <>
       <div className="navbarcontainer">
        {/* <div className="container"> */}
        <nav class="navbar nav navbar-expand-lg navbar-custom" >
          <div class="container-fluid">
            <a class="navbar-brand" href="/home">&lt;OmarMSDZ/&gt;</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false}  aria-label="Toggle navigation" onClick={handleNavCollapse}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link"  href="#About" onClick={closeNav}>About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Skills" onClick={closeNav}>Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Projects" onClick={closeNav}>Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Contact" onClick={closeNav}>Contact</a>
                </li>
              </ul>
            </div>
           
          </div>
        </nav>
        {/* </div> */}
        </div>
        </>
    )
}