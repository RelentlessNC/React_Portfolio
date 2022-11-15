import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Welcome() {
  return (
    <>
        <section className="bg-md" id="projects">
            <h2>Projects</h2>
            <hr/>
            <div className="flex-row-even" id="project-cards">
                <a href="https://recipeio-project2.herokuapp.com/login" className="card" id="project1" target="_blank">
                    <h3 className="card-header">RecipeIO</h3>
                    <p className="project-description">Custom Online Recipe Books</p>
                </a>
                <a href="https://relentlessnc.github.io/gifter/" className="card" id="project2" target="_blank">
                    <h3 className="card-header">Gifter</h3>
                    <p className="project-description">Upcoming gift reminder</p>
                </a>
                <a href="https://relentlessnc.github.io/Weather_Dashboard/" className="card" id="project3" target="_blank">
                    <h3 className="card-header">Weather Dashboard</h3>
                    <p className="project-description">A custom weather dashboard</p>
                </a>
                <a href="https://personal-note-tracker-njc.herokuapp.com/" className="card" id="project4" target="_blank">
                    <h3 className="card-header">Note Tracker</h3>
                    <p className="project-description">App to track personal notes</p>
                </a>
                <a href="https://relentlessnc.github.io/Single_Workday_Planner/" className="card" id="project5" target="_blank">
                    <h3 className="card-header">Workday Scheduler</h3>
                    <p className="project-description">A schedule for a single workday</p>
                </a>
                <a href="https://relentlessnc.github.io/Simple_Quiz/" className="card" id="project6" target="_blank">
                    <h3 className="card-header">Coding Quiz</h3>
                    <p className="project-description">A short quiz app</p>
                </a>
            </div>
        </section>
        <section className="bg-lt" id="demos">
            <h2>Console Demo Videos</h2>
            <hr/>
            <div className="flex-row-even">
                <table>
                    <tr>
                        <td><a href="https://youtu.be/QRfqqeIJa50" target="_blank">Readme Generator</a></td>
                        <td><a href="https://youtu.be/ab3YIYIpP4U" target="_blank">Team Profile Generator</a></td>
                        <td><a href="https://youtu.be/bNQQ0aaK5YQ" target="_blank">Employee Database</a></td>
                    </tr>
                </table>
            </div>

        </section>
    </>
  );
}
