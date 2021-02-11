import {useState} from 'react';
import './Announcement.css'

const Announcement = (props) => {
  const {announcement, editAnnouncement, deleteAnnouncement} = props
  const [editToggle, setEditToggle] = useState(false)
  const [editTitle, setEditTitle] = useState('')
  const [content, setContent] = useState('')
  const [dateCreated, setDateCreated] = useState('')
  return (
    <div key={announcement.announce_id} style={{overflow: 'scroll', margin: '10px', padding: '15px'}}>
      {!editToggle ? (
        <div className='edit-container' style={{margin: 'auto', height: '150px', width: '100vw', color: '#264653', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <div className='input-flex'>
            {announcement.title}
          </div>
          <div className='input-flex'>
            {announcement.content}
          </div>
          <div className='input-flex'>
            {announcement.date_created}
          </div>
          <button onClick={() => setEditToggle(true)}>Edit Post</button> 
          <button onClick={() => deleteAnnouncement(announcement.announce_id)}>Delete</button>
        </div>        
      ) : (
        <div>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)} />
          <input 
            value={content}
            onChange={(e) => setContent(e.target.value)} />
          <input 
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)} />
          <button onClick={() => setEditToggle(false)}>Cancel</button>
          <button onClick={() => {
            editAnnouncement(announcement.announce_id, editTitle, content, announcement.date_created)
            setEditToggle(false)
            }}>Save</button>
        </div>
      )} 
              
    </div>
  )
}

export default Announcement;


// return (
//     <div key={announcement.announce_id}>
//       {!editToggle ? (
//         <div className='edit-container' style={{margin: '30px', height: '150px', width: '100vw', color: '#264653', display: 'flex',  flexDirection: 'column', justifyContent: 'space-evenly',  alignItems: 'center'}}>
//           <div className='title' style={{height: '50px', width: '250px', backgroundColor: '#095975', border: '2px solid #538f77', color: '#2a94b8', borderRadius: '5px'}}>
//             {announcement.title}
//           </div>
//           <div className='content' style={{height: '50px', width: '250px', backgroundColor: '#095975', border: '2px solid #538f77', color: '#2a94b8', borderRadius: '10px'}}>
//             {announcement.content}
//           </div>
//           <div className='dateCreated' style={{height: '50px', width: '250px', backgroundColor: '#095975', border: '2px solid #538f77', color: '#2a94b8',  borderRadius: '10px'}}>