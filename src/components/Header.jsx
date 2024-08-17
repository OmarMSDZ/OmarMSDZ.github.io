
export default function Header() {
    return(
        <>
       <div className="navbarcontainer">
        {/* <div className="container"> */}
        <nav class="navbar nav navbar-expand-lg navbar-custom" >
          <div class="container-fluid">
            <a class="navbar-brand" href="/home">&lt;OmarMSDZ/&gt;</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link"  href="#About">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Skills">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Contact">Contact</a>
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