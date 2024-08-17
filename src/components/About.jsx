import TypeIt from "typeit-react";
import aboutImg from '/imgabout.png'
export default function About(){

    
    return(<>
        <div className="aboutpage" id="About">
          
            <div className="container content">

                
                <div className="row d-flex min-vh-100 justify-content-center align-items-center mb-0">
                    <div className="col-sm text-about">
            
                        <center>
                    <TypeIt
                     as="h1"
                     options={{
                        strings: [
                            "Hi, I'm <span style='color:green'>Omar Morales</span>, "+
                            "a <span style='color:lightblue'>software developer</span> "+
                            "with a passion for building <span style='color: purple'> scalable</span> " +
                            "and <span style='color: yellow'> impactful </span> digital solutions"
                        ],
                        speed: 5,
                        waitUntilVisible: true,
                     }}/>
                     </center>

                    </div>
                    <div className="col-sm image-about">
                        <center>
                        <img src={aboutImg} alt="" className="img-fluid avatar"/>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </>)
}