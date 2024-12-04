import React from 'react';
import vr_kid from '../images/vr_kid.png';

function Overview() {
  const styles = {
    splitScreen: {
      display: 'flex',
      flexDirection: 'row',
    },
    topPane: {
      width: '50%',
      padding: '10px',
      border: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'center', // Horizontally center content
      alignItems: 'center', // Vertically center content
    },
    bottomPane: {
      width: '50%',
      padding: '10px',
      border: '1px solid #ccc',
    },
    imageStyle: {
      width: '50%', // Adjust as needed
      height: 'auto', // Maintain aspect ratio
      objectFit: 'cover', // Ensure the image covers the container without stretching
    }
  };

  return (
    <div style={styles.splitScreen}>
      <div style={styles.topPane}>
        <img
          src={vr_kid}
          alt="vr_kid"
          style={styles.imageStyle} // Apply the image styling from the defined styles object
        />
      </div>
      <div style={styles.bottomPane}>
        <h1>Generations Unite: VR for a Greener Tomorrow</h1>
        <br />
        <div>
          Generations Unite uses immersive VR simulations to educate students in Years 5-7 about sustainability, agriculture, and climate change. Designed for rural and regional areas with limited resources, the program empowers young learners to become environmentally conscious citizens.
        </div>
        <br />
        <div>
          We collaborate with schools, educators, environmental groups, local councils, and tech partners to create impactful, accessible learning experiences.
        </div>
        <br />
        <div>
          Shaping a greener future through education and innovation.
        </div>
      </div>
    </div>
  );
}

export default Overview;
