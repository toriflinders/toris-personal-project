
module.exports = {
  createAnnouncement: (req, res) => {
    const {author_id, title, content, dateCreated} = req.body;
    const db = req.app.get('db')

    db.announcements.create_announcement(author_id, title, content, dateCreated)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
  },
  getAnnouncements: (req, res) => {
    const {author_id} = req.params
    const db = req.app.get('db')

    db.announcements.get_user_announcements({author_id})
      .then(announcements => res.status(200).send(announcements))
      .catch(err => res.status(500).send(err))
  },
  editAnnouncement: (req, res) => {
    const {id} = req.params
    console.log(req.params)
    console.log(req.body)
  
    const {title, content, dateCreated} = req.body
    const db = req.app.get('db')

    db.announcements.edit_announcement(id, title, content, dateCreated)
    .then(announcement => res.status(200).send(announcement))
    .catch(err => res.status(500).send(err))
  },
  deleteAnnouncement: (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')

    db.announcements.delete_announcement(id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
   }
}





