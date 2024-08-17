import ProjectsCard from "./ProjectsCard"

export default function Projects(){
    return(<>
    <div className="projectscontainer" id="Projects">
        <div className="container">
            <h2 className="projectscontainer-title">Projects</h2>
            <hr className="projectsseparator" />
            <br />
            
            <div className="projects-cards">
                <ProjectsCard 
                projectImage='/santrips.jpeg' 
                projectName='SanTrips'
                projectDescription='Web app for a tours agency located in the Dominican Republic. Made in a 3 person team directed by me in a time span of three months. Developed in Laravel 11, using Bootstrap, JS/AJAX and MySQL.'
                projectViewingithub='https://github.com/OmarMSDZ/SanTripsApp.git'
               
                />

                {/* <ProjectsCard 
                projectImage='/sigh.jpeg' 
                projectName='SIGH'
                projectDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam dolorem, amet dolorum aut suscipit modi consequuntur animi temporibus possimus placeat explicabo repudiandae dolore, fugiat veritatis. Rem inventore possimus iure?'
                projectViewMore='/projects-SIGH'
                projectGithub='#'
                /> */}
            </div>

        </div>
    </div>
    </>)
}