
import React from 'react';
const Reflections = () => {
 
  return (
    <section className="reflections section">
      <div className="header">
        <h1>
          Reflections Tracker
        </h1>
        <p>Track how many Slaps you've made by putting in your wallet address</p>
      </div>
      <div className="reflections-div">
        <iframe title="TrackBSC" width="100%" height="100%" src="https://trackbsc.com/earnings?token=0xbc30d59aff36d7ade2faf8152fb1a66757410fee"></iframe>
      </div>
    </section>
  );
}
export default Reflections;