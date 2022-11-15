import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Welcome() {

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <>
      <body>
          <header className="bg-dk2">
              <h1 id="page-heading">Portfolio of Nicholas Conklin</h1>
          </header>
          <section id="me-block" className="bg-md">
              <p id="statement">My name is Nicholas Conklin and I am a Certified Full Stack Web Developer. I have a B.S. in Computer Science with a focus on software development. I was trained in the U.S. Air Force in logical problem solving that has been fine tuned by academic
                  and professional experience.</p>
              {<img className="image" id="selfie" src="../images/selfie.jpg " alt="selfie"/>}
          </section>
      </body>
  </>
  );
}
