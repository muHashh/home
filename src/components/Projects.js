import React from "react";

function Projects() {

    const imgStyle = {
        maxHeight: '100px',
        maxWidth: '100px',
    };

    const hrStyle = {
        margin: "5mm", 
        backgroundColor: "#A5A5A5", 
        borderWidth:"0.2mm",
    };

    return (
        <div className="container-fluid bg-dark p-5">

            <div className="jumbotron bg-dark jumbotron-fluid p-4 display-4 text-center text-light">
                Projects
            </div>

            <div class="card-columns">

                <div class="p-3">
                    <div class="card text-light shadow-lg dark mb-3">
                    <img class="card-img-top mx-auto d-block" src="https://avatars0.githubusercontent.com/u/39052374?s=400&v=4" style={imgStyle} alt="Havoc OS"/>
                    <div class="text-center text-light">
                        Havoc OS
                    </div>
                    <hr style={hrStyle}/>
                    <div class="card-body">
                        <h5 class="card-title">Informartion</h5>
                        <p class="card-text">Havoc OS builds for the S8 etc.</p>
                    </div>
                    </div>
                </div>

                <div class="p-3">
                    <div class="card text-light shadow-lg dark mb-3">
                    <img class="card-img-top mx-auto d-block" src="https://avatars0.githubusercontent.com/u/39052374?s=400&v=4" style={imgStyle} alt="Havoc OS"/>
                    <div class="text-center text-light">
                        Havoc OS
                    </div>
                    <hr style={hrStyle}/>
                    <div class="card-body">
                        <h5 class="card-title">Informartion</h5>
                        <p class="card-text">Havoc OS builds for the S8 etc.</p>
                    </div>
                    </div>
                </div>

                <div class="p-3">
                    <div class="card text-light shadow-lg dark mb-3">
                    <img class="card-img-top mx-auto d-block" src="https://avatars0.githubusercontent.com/u/39052374?s=400&v=4" style={imgStyle} alt="Havoc OS"/>
                    <div class="text-center text-light">
                        Havoc OS
                    </div>
                    <hr style={hrStyle}/>
                    <div class="card-body">
                        <h5 class="card-title">Informartion</h5>
                        <p class="card-text">Havoc OS builds for the S8 etc.</p>
                    </div>
                    </div>
                </div>

            </div>

        </div>
  );
}

export default Projects;