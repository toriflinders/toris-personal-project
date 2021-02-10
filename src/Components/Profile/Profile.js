import {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Profile.css';

class Profile extends Component {

  render(){
    return(
      <div className='profile-container' style={{height: '95vh', width: '100vw', backgroundColor: '#538f77', margin: 0, display: 'inline-block'}}>
        <h1 style={{marginLeft: '15px'}}>AJ Kaumavae</h1>
        {this.props.location.pathname === '/'
          ? (
            <nav style={{ marginBottom: '40px', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <Link to ='/email' className='nav-links'>Email</Link>
          <Link to='/announcements' className='nav-links'>Announcements</Link>
          <Link to='/art' className='nav-links'>Art</Link>
        </nav>
        ) : null}
        <div>
          <div className='contact-container' style={{margin: 'auto', marginBottom: '50px', height: '150px', width: '600px', border: '2px solid #095975', borderRadius: '5px', fontSize: '14pt', color: '#095975'}}>
            <p>Alatini's Artwork</p>
            <p>Email: fakeEmail@email.com</p>
            <p>Or email me through this website</p>
          </div>
          <div className='about-container' style={{ height: '400px', width: '700px', border: '2px solid #095975', borderRadius: '5px', display: 'inline-flex', color: '#095975', alignItems: 'center', fontSize: '14pt'}}>
            <div style={{margin: '25px'}}>
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

//     <div className='about-container' style={{height: '300px', width: '550px', border: '2px solid #095975', borderRadius: '5px', display: 'inline-flex', color: '#095975', alignItems: 'center'}}>
//             <p>Beneath the blackest static of the digital bog,
//                 In the deepest chambers of the cyber sanctum,
//                 A corruptor of recorded data rages,
// Unrealized and seized in sarcophagi.
// Its idle wrath to be turned loose,
// Only at the drop of one worthy groove.
//             </p>
//           </div>
//           <div className='other-container' style={{height: '300px', width: '550px', display: 'inline-flex', border: '2px solid #095975', borderRadius: '5px', color: '#095975', alignItems: 'center'}}>
//             <p>Beneath the blackest static of the digital bog,
//               In the deepest chambers of the cyber sanctum,
//               A corruptor of recorded data rages,
//               Unrealized and seized in sarcophagi.
//               Its idle wrath to be turned loose,
//               Only at the drop of one worthy groove.
//             </p>
//             <p>
//               We Summon the Dungeon Crawler --
//               Keeper of skeletal ciphers and broadcasts of straight-medieval volumes --
//               To emerge beserk and unchained,
//               To let them fell pipes beat forth,
//               To cast that electric shade in rays.
//             </p>
//             <p>
//               In the Hidden Pod all sound is swallowed.
//               None shall hear this yearly howl.
//               So find your **** and lose your cross.
//               This joint belongs to the Hidden Boss.
//             </p>
//           </div>