import React from "react";

function Projects() {

    const imgStyle = {
        maxHeight: '150px',
        maxWidth: '100px',
    };

    const cardStyle = {
        width: "18rem",
        paddingTop:"5mm",
        paddingBottom:"5mm"
    }

    return (
        <div className="container-fluid bg-dark p-5" id="projects">

            <div className="jumbotron bg-dark jumbotron-fluid p-4 display-4 text-center text-light">
                Projects
            </div>

            <div class="card-columns">

                <div class="p-3">
                    <div class="card text-light shadow-lg dark mb-3" style={cardStyle}>
                    <img class="card-img-top mx-auto d-block" src="https://avatars0.githubusercontent.com/u/39052374?s=400&v=4" style={imgStyle} alt="Havoc OS"/>
                    <br/>
                    <div class="card-body">
                        <h5 class="card-title"><b>About</b></h5>
                        <p class="card-text">
                            Havoc-OS 3.x is based on AOSP, inspired by Google Pixel.
                            Has a refined Material Design 2 UI crafted by @SKULSHADY.
                            Many useful features that will blow your mind.
                            All you can dream of and all you'll ever need.
                        </p>
                        <br/>
                        <h5 class="card-title"><b>Links</b></h5>
                        <a href="https://mega.nz/folder/f4d3jC6b#Q2xDoEQvShPbzhnPe0F5hQ" className="App-link">Download</a>
                        <a href="https://forum.xda-developers.com/galaxy-s8/samsung-galaxy-s8--s8-cross-device-development/havoc-os-3-x-t4088681" className="App-link">XDA page</a>
                    </div>
                    </div>
                </div>

                <div class="p-3">
                    <div class="card text-light shadow-lg dark mb-3" style={cardStyle}>
                    <img class="card-img-top mx-auto d-block" src="https://img.xda-cdn.com/BBd2bXc1VPgMHAVuHN-WE47kUQo=/https%3A%2F%2Fraw.githubusercontent.com%2FDerpFest-OP5T%2Fplatform_packages_apps_Settings%2Ff8ad7bd7fa9e98459456c125bbdb44cd28d1d9f0%2Fres%2Fdrawable-nodpi%2Fderp_about.png" style={imgStyle} alt="Havoc OS"/>
                    <br/>
                    <div class="card-body">
                        <h5 class="card-title"><b>About</b></h5>
                        <p class="card-text">DerpFest OS is a custom ROM that incorporates the best features around and longs to support the community with its own unique features and contributions.</p>
                        <br/>
                        <h5 class="card-title"><b>Links</b></h5>
                        <a href="https://mega.nz/folder/fx8hBKCQ#ZZHdsWYgjZfXGgle1_Q3mw" className="App-link">Download</a>
                        <a href="https://forum.xda-developers.com/galaxy-s8/samsung-galaxy-s8--s8-cross-device-development/android-10-derpfest-t4097381" className="App-link">XDA page</a>
                    </div>
                    </div>
                </div>

                <div class="p-3">
                    <div class="card text-light shadow-lg dark mb-3" style={cardStyle}>
                    <img class="card-img-top mx-auto d-block" src="https://avatars0.githubusercontent.com/u/39052374?s=400&v=4" style={imgStyle} alt="Havoc OS"/>
                    <br/>
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