import {Component} from 'react';
import Announcement from '../Announcement/Announcement';
// import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAnnounce, createAnnounce} from '../../redux/announcementsReducer';
import {editAnnounce} from '../../redux/announcementsReducer';
import {deleteAnnounce} from '../../redux/announcementsReducer';
import axios from 'axios';
import './Announcements.css';


class Announcements extends Component {
  constructor(props){
    super(props)

    this.state = {
      announcements: [],
      title: '',
      content: '',
      dateCreated: '',
      adminView: false
    }
  }
  handleToggle = () => {
    this.setState({adminView: !this.state.adminView})
  }
  getUserAnnouncements = () => {
    // console.log(this.props)
    // axios.get(`/announcements/${1}`)
    axios.get(`/announcements/${this.props.user.user_id}`)
      .then(res => {
        console.log(res.data)
        this.setState({announcements: res.data})
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getUserAnnouncements()
  }

  handleInput = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  createAnnouncement = () => {
    axios.post('/announcement', {author_id: this.props.author_id, title: this.state.title, content: this.state.content, dateCreated: this.state.dateCreated})
    .then(() => {
      this.getUserAnnouncements()
      this.setState({title: '', content: '', dateCreated: ''})
    })
    .catch(err => console.log(err))
  }
  editAnnouncement = ( id, title, content, dateCreated) => {
    axios.put(`/announcement/${id}`, {id, title, content, dateCreated})
      .then(() => {
        this.getUserAnnouncements()
      })
  }
  deleteAnnouncement = (id) => {
    axios.delete(`/announcement/${id}`)
      .then(() => {
        this.getUserAnnouncements()
      })
      .catch(err => console.log(err))
  }
  render(){
    // console.log(this.props.announcement)
    // console.log(this.props.user)
    // console.log(this.props)
    // console.log(this.state.announcements)
    return(
      <div className='announce-container' style={{height: '100vh', width: '100vw', backgroundColor: '#538f77'}}>
        <div className='announce-info' style={{width: '100vw', height: '100vh', alignContent: 'center'}}>
          <input 
            value={this.state.title}
            name='title'
            placeholder='Title Input'
            onChange={event => this.handleInput(event)} />
          <input
            value={this.state.content}
            name='content'
            placeholder='Content Input'
            onChange={event => this.handleInput(event)} />
          <input 
            value={this.state.dateCreated} 
            name='dateCreated'
            placeholder='Leave this blank, just logs time'
            onChange={event => this.handleInput(event)} />
          <button onClick={this.createAnnouncement}>Add Post</button>
          {/* <Link to='/auth'>Auth</Link> */}
          <div className='recent' style={{ margin: 'auto', fontSize: '24pt', color: '#215e47'}}>
            <b style={{marginLeft: '40px'}}>Recent Posts</b>
          </div>
          <div>
            {this.state.announcements.map(announcement => (
              <Announcement announcement={announcement} editAnnouncement={this.editAnnouncement} deleteAnnouncement={this.deleteAnnouncement} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  // console.log(reduxState)
  
  return {
    user: reduxState.authReducer.user,
    announcement: reduxState.announcementsReducer.announcement
   
  }
}

export default connect(mapStateToProps, {getAnnounce, createAnnounce, editAnnounce, deleteAnnounce})(Announcements);
// export default withRouter(connect(mapStateToProps, {getAnnounce, createAnnounce, editAnnounce, deleteAnnounce})(Announcements));


// would I put the boolean related to admin in this component?


