import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Welcome() {
  return (
    <>
      <section className="bg-lt flex-row-even">
          <div id="about-me">
              <h2>About Me</h2>
              <hr/>
              <p>After spending 6 years in the U.S. Air Force, I spent some time figuring out what I wanted to do with the rest of my life. I decided to work with computers in some way. I graudated from McMurry Univerity with a Bachelor's in Science with a
                  Major in Computer Science. I have been working at McMurry University as an LMS Administrator since 2017. I am now enrolled in the Full Stack Web Developer coding bootcamp at UT Austin and hoping to jumpstart my career in a new direction!</p>
          </div>

      {/* // I decided to use &emsp; for four spaces instead of a list because I felt like the list was ultimately limiting to the formatting on my page */}
          <div id="skills">
              <h2>My Skills</h2>
              <hr/>
              <p className="shadow-text">
                  HTML5&emsp; CSS3&emsp; JavaScript&emsp; Node.js&emsp; Python3&emsp; C&emsp; Bootstrap&emsp; JQuery&emsp; SQL&emsp; React.js&emsp; JSON&emsp; AJAX</p>
          </div>
      </section>
    </>
  );
}
