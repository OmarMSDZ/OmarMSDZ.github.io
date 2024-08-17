export default function Contact() {
    return(
        <>
        <div className="contactContainer" id="Contact">
            <div className="container">
                <h2 className="contactTitle">Contact Me!</h2>
                    <hr className="contactSeparator" />
                <div className="container">
                
                    <div className="contactButtons">
                    <a href="https://github.com/OmarMSDZ"><button className="contactButton"> <i className="bi bi-github"> </i> </button></a>
                        <a href="https://www.linkedin.com/in/omarmoralesdiaz/"><button className="contactButton"> <i className="bi bi-linkedin"></i>  </button></a>
                        <a href="mailto:rdbluedog@gmail.com" > <button className="contactButton"><i className="bi bi-google"> </i> </button></a>
                    </div>
                    
                    <div className="contactImage">
                        <img src="/contact.png" alt="" className="img-fluid"/>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}