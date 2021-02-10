import axios from 'axios';
import {Component} from 'react';
import './Art.css'

class Art extends Component {
  constructor(props){
    super(props)

    this.state = {
      art: [],
      title: '',
      price: '',
      imgUrl: ''
    }
  }
  getArt = () => {
    // axios.get('/art')
     axios.get(`/art/:${this.props.artist_id}`)
    // might want to leave it with the ${1} because for now, I'll only want
    // axios.get(`/art/${1}`)
      .then(res => {
        console.log(res.data)
        this.setState({art: res.data})
      })
      .catch(err => console.log(err))
  }
  componentDidMount(){
    this.getArt()
  }
  handleAddToCart = (art_id) => {
    this.props.history.push(`/checkout/${art_id}`)   
  }
  handleInquire = () => {
    this.props.history.push('/email')
  }
  render(){
    // console.log(this.props.art)
    return(
      <div className='art-container' style={{position: 'fixed', height: '95vh', width: '100vw', backgroundColor: '#538f77'}}>
        
        <h1>Purchasable Art</h1>
        <div className='art-flex' style={{ margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {this.state.art.map(art => (
            <div className='art-hold' key={art.art_id} style={{margin: '10px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
              <img src={art.img_url} alt='mappedImg' style={{borderRadius: '5px', height: '200px', width: '300px'}} />
              <button onClick={this.handleInquire}>Inquire about art</button>
              <button onClick={() => this.handleAddToCart(art.art_id)}>Add to Cart</button>
            </div>
            ))}
        </div>
      </div>

    )
  }
}

export default Art;

// handleAddToCart = (art_id) => {
//   axios.post(`/checkout/${art_id}`)
//     .then(() => {
//       this.props.history.push(`/checkout/${art_id}`)
//     })
//     .catch(err => console.log(err))
// }
  // handleInput = (event) => {
  //   this.setState({[event.target.name]: event.target.value})
  // }
  // createArt = () => {
  //   axios.post('/add_art', {title: this.state.title, price: this.state.price, imgUrl: this.state.imgUrl, artist_id: this.props.artist_id })
  //     .then(() => {
  //       this.getArt()
  //       this.setState({title: '', price: '', imgUrl: ''})
  //     })
  //     .catch(err => console.log(err))
  // }
  // deleteArt = (art_id) => {
  //   axios.delete(`/art/${art_id}`)
  //     .then(() => {
  //       this.getArt()
  //     })
  //     .catch(err => console.log(err))
  // }

/* <button onClick={() => this.deleteArt(art.art_id)}>Delete</button>
            </div>
        <input
          value={this.state.title}
          name='title'
          placeholder='title input'
          onChange={event => this.handleInput(event)} />
        <input 
          value={this.state.price}
          name='price'
          placeholder='price input'
          onChange={event => this.handleInput(event)} />
        <input 
          value={this.state.imgUrl}
          name='imgUrl'
          placeholder='image url input'
          onChange={event => this.handleInput(event)} />
        <button onClick={this.createArt}>Add</button> */
