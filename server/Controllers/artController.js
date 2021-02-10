module.exports = {
  getArt: (req, res) => {
    const {artist_id} = req.params
    const db = req.app.get('db')

    db.art.get_art(artist_id)
      .then(art => res.status(200).send(art))
      .catch(err => res.status(500).send(err))
  },
  createArt: (req, res) => {
    const {title, price, img_url, artist_id} = req.body;
    const db = req.app.get('db')

    db.art.create_art(title, price, img_url, artist_id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
  },
  deleteArt: (req, res) => {
    const {art_id} = req.params
    const db = req.app.get('db')

    db.art.delete_art(art_id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
  }
}
// did not add artist_id to destructuring in createArt because it needed to be inserted with sql files but not controller?