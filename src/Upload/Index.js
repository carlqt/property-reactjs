import React, { Component } from 'react';
import AddressForm from './Components/AddressForm';

class Index extends Component {
  render() {
    return(
      <div>

        <div className="ui container">
          <AddressForm />
        </div>
      </div>
    )
  }
}

export default Index;