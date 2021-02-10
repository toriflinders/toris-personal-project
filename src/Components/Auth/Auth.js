import {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/authReducer';
import './Auth.css';

class Auth extends Component {
  constructor(props){
    super(props) 

    this.state = {
      username: '',
      email: '',
      password: '',
      verifyPass: '',
      registerView: false
    }
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleToggle = () => {
    this.setState({registerView: !this.state.registerView})
  }
  handleRegister = () => {
    const {username, email, password, verifyPass} = this.state

    if(password && password === verifyPass){
      axios.post('/auth/register', {username, email, password})
        .then(res => {
          this.props.getUser(res.data)
          this.props.history.push('/announcements')
        })
        .catch(err => console.log(err))
    } else {
        alert('Passwords do not match, please enter again.')
    }
  }
  handleLogin = () => {
    const {email, password} = this.state

    axios.post('/auth/login', {email, password})
      .then(res => {
        this.props.getUser(res.data)
        this.props.history.push('/announcements')
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div className='auth-container' style={{height: 'calc(100vh - 100px)', width: '100vw', backgroundColor: '#538f77', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className='auth-inputs' style={{height: '400px', width: '200px', display: 'flex',flexDirection: 'column', alignItems: 'center', color: '#095975', fontWeight: '500'}}>
          <h1>LOGIN</h1>
            {this.state.registerView
            ? (
              <>
                <h3>Register Below</h3>
                <input
                  value={this.state.username}
                  name='username'
                  placeholder='Username Input'
                  onChange={e => this.handleInput(e)} />
              </>
            )
            : <h3>Login Below</h3>}
          <input
            value={this.state.email}
            name='email'
            placeholder='Email Input' 
            onChange={e => this.handleInput(e)} />
          <input
            value={this.state.password}
            name='password'
            type='password'
            placeholder='Password Input'
            onChange={e => this.handleInput(e)} />
          {this.state.registerView
          ? (
              <>
                <input
                  value={this.state.verifyPass}
                  name='verifyPass'
                  type='password'
                  placeholder='Verify Password Input'
                  onChange={e => this.handleInput(e)} />
                <button onClick={this.handleRegister}>Register</button>
                <p>Have an account? <span onClick={this.handleToggle}> Login here</span></p>
              </>
            )
          : (
              <>
                <button onClick={this.handleLogin}>Login</button>
                <p>Don't have an account? <span onClick={this.handleToggle} >Register here</span></p>
              </>
          )}
        </div>
      </div>
    )
  }
}
export default connect(null, {getUser})(Auth);



// class component because it needs to access state for the user
// need to worry about admin in state?