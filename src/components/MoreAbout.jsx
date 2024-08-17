export default function MoreAbout() {
  return (
    <>
      <div className="moreabout">
        <div className="container">
          <h2>About Me</h2>
          <hr className="aboutme-separator" />

          <div className="card terminalCard">
            <div className="card-body">
                
              <p>
                C:/users/Omar Morales&gt;{" "}
                <span className="terminalYellow">node</span> aboutme.js
              </p>
              <p>
                - Name: Omar Morales 🌱<br />
                - Field: Web/Desktop Dev. 💻 <br />
                - Years of experience: 1 year 📅 <br />
                - Location: Santiago, Dominican Republic 🌎 <br />
                - Status: Studying (CS Engineering) ⌨️<br />
                - Currently Learning: React, NodeJS, NextJS 🪐 <br />
                - Hobbies: Drawing, Coding, Gaming and SpeedCubing 🎨🎮
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
