import {Component} from 'react';
import PopCheckout from '../Stripe/PopCheckout';
import axios from 'axios';
import './Checkout.css'

class Checkout extends Component {
  constructor(props){
    super(props)

    this.state = {
      invoice: [],
      billingName: '',
      billingAddress: '',
      billingCity: '',
      billingState: '',
      billingZipcode: ''
    }
  }
  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  createInvoice = () => {
    axios.post(`/checkout/${this.props.match.params.art_id}`, {billingName: this.state.billingName, billingAddress: this.state.billingAddress, billingCity: this.state.billingCity, billingState: this.state.billingState, billingZipcode: this.state.billingZipcode})
      .then(() => {
        this.setState({billingName: '', billingAddress: '', billingCity: '', billingState: '', billingZipcode: ''})
      })
      .catch(err => console.log(err))
  }
 
  render(){
    return(
      <div className='checkout-container'>
        <h1>Checkout Page</h1>
        <input
          value={this.state.billingName}
          name='billingName'
          placeholder='Billing Name Input'
          onChange={event => this.handleInput(event)} />
        <input
          value={this.state.billingAddress}
          name='billingAddress'
          placeholder='Billing Address Input'
          onChange={event => this.handleInput(event)} />
        <input
          value={this.state.billingCity}
          name='billingCity'
          placeholder='Billing City Input'
          onChange={event => this.handleInput(event)} />
        <input
          value={this.state.billingState}
          name='billingState'
          placeholder='Billing State Input'
          onChange={event => this.handleInput(event)} />
        <input
          value={this.state.billingZipCode}
          name='billingZipcode'
          placeholder='Billing Zipcode Input'
          onChange={event => this.handleInput(event)} />
        <button onClick={this.createInvoice}>Add</button>
        <div>
          
        </div>
        <PopCheckout
          art_id={this.props.match.params.art_id}
          billingName={this.state.billingName}
          billingAddress={this.state.billingAddress}
          billingCity={this.state.billingCity}
          billingState={this.state.billingState}
          billingZipcode={this.state.billingZipcode}
          
          />
      </div>
    )
  }
}
export default Checkout;



