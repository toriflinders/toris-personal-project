import {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Profile.css';

class Profile extends Component {

  render(){
    return(
      <div className='profile-container'style={{height: '95vh', width: '100vw', backgroundColor: '#538f77', margin: 0, display: 'inline-block', color: '#095975', overflow: 'scroll'}}>
        <h1>AJ Kaumavae</h1>
        {this.props.location.pathname === '/'
          ? (
            <nav style={{ marginBottom: '40px', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <Link to ='/email' className='nav-links'>Email</Link>
          <Link to='/announcements' className='nav-links'>Announcements</Link>
          <Link to='/art' className='nav-links'>Art</Link>
        </nav>
        ) : null}
        <div>
          <div className='contact-container'>
            <p>Alatini's Artwork</p>
            <p>Email: alakaumavae@gmail.com</p>
          </div>
          <div className='about-container'>
            <div>
              <p>Beneath the blackest static of the digital bog,
                In the deepest chambers of the cyber sanctum,
                A corruptor of recorded data rages,
                Unrealized and seized in sarcophagi.
                Its idle wrath to be turned loose,
                Only at the drop of one worthy groove.
              </p>
              <p>
                We Summon the Dungeon Crawler --
                Keeper of skeletal ciphers and broadcasts of straight-medieval volumes --
                To emerge beserk and unchained,
                To let them fell pipes beat forth,
                To cast that electric shade in rays.
              </p>
              <p>
                In the Hidden Pod all sound is swallowed.
                None shall hear this yearly howl.
                So find your **** and lose your cross.
                This joint belongs to the Hidden Boss.
              </p>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}
// export default Profile;

export default withRouter(Profile);

// added link to checkout page for ease of access while building out website. will take this down before presenting it or making this a completed project.


