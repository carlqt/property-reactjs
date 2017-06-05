/* eslint-disable no-undef */
import React, { Component } from 'react';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      country: '',
      postal_code: '',
      locality: '',
      administrative_area_level_1: '',
    };

  }

  componentDidMount() {
    let autocomplete = new google.maps.places.Autocomplete(this.address, {types: ['geocode']});
    autocomplete.addListener('place_changed',
     address => this.fillAddress(autocomplete.getPlace()));
  }

  fillAddress(place) {
    this.setState({
      route: '',
      country: '',
      postal_code: '',
      locality: '',
      administrative_area_level_1: '',
    });
    // Google --- App
    // postal_code == zip
    // locality == city
    // country == country
    // route == street address
    // administrative_area_level_1 == nationState
    // ---> p.types[0]

    for (let p of place.address_components) {
      if (this.state[p.types[0]] !== undefined) {
        this.setState({[p.types[0]]: p.long_name});
      }
    }
  }

  formSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <div className="ui form field">
          <input type="text" name="address" placeholder="Address" ref={address => this.address = address}/>
        </div>

        <form className="ui form" onSubmit={this.formSubmit.bind(this)}>
          <div className="two fields">
            <div className="field twelve wide">
              <input type="text" value={this.state.route} name="street" placeholder="Street Address" />
            </div>

            <div className="four wide field">
              <input type="text" name="city" placeholder="City" value={this.state.locality}/>
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <input type="text" name="country" className="hidden" placeholder="Country" value={this.state.country}/>
            </div>
            <div className="field four wide">
              <input type="text" value={this.state.postal_code} name="zipcode" className="hidden" placeholder="Zip code"/>
            </div>

            <div className="field four wide">
              <input type="text" name="state" value={this.state.administrative_area_level_1} className="hidden" placeholder="state"/>
            </div>
          </div>

          <button className="ui green button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddressForm;