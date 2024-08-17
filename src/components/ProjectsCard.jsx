 

export default function ProjectsCard(props){

    return(<>
    {/* <div class="card" style="width: 18rem;"> */}
    <div class="card projectCard mx-auto mb-3"  >
    <div class="row g-0">
        <div class="col-md-4">
            <img src={props.projectImage} class="img-fluid project-image" alt="Project Image"/>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{props.projectName}</h5>
                <p class="card-text">{props.projectDescription}</p>
                <a href={props.projectViewingithub} class="btn ">View in GitHub <i className="bi bi-github"></i></a>
            </div>
        </div>
    </div>
</div>

    
    </>)
}