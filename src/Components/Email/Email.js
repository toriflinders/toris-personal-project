import axios from 'axios';
import {Component} from 'react';
// import './Email.css';

class Email extends Component {
  constructor(props){
    super(props)

    this.state = {
      emailTo: 'fakeEmail@email.com',
      emailFrom: '',
      content: ''
    }
  }
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = () => {
    axios.post('/email', {emailFrom: this.state.emailFrom, content: this.state.content})
      .then(() => {
        this.setState({emailFrom: '', content: ''})
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div className='email-container' style={{height: '100vh', width: '100vw', backgroundColor: '#538f77', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Email the Artist</h1>
        <input 
          value={this.state.emailFrom}
          name='emailFrom'
          placeholder='Your Email'
          onChange={e => this.handleInput(e)}
          style={{margin: '100px', width: '300px', display: 'block'}} />
        <input 
          value={this.state.content}
          name='content'
          placeholder='Enter Content Here'
          onChange={e => this.handleInput(e)} 
          style={{margin: '100px', width: '300px', display: 'block'}} />
        <button onClick={this.handleSubmit}>Send Email</button>
      </div>
    )
  }
}

export default Email;
