import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';


class App extends Component {

  constructor() {
    super();

    this.state = { gifts: [] };
    AOS.init();
  }

  componentWillReceiveProps (){
    AOS.refresh();
  }

  addGift = () => {
    const { gifts } = this.state;

    gifts.push({ id:  max_number(this.state.gifts.map(gift => gift.id))+1});

    this.setState({ gifts });
  }

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id );

    this.setState({ gifts });
  }

  render() {
    return (
      <div>
        <h2 data-aos="fade-down" data-aos-offset="100">Gift Giver</h2>
        <h2 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> Hello</h2>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='gift-list'>
          {
            this.state.gifts.map(gift => {
              return(
                <Gift
                  key={gift.id}
                  gift={gift}
                  removeGift={this.removeGift}
                />
              )
            })
          }
        </div>
        <Button className='btn-add' onClick={ this.addGift }>Add Gift</Button>
      </div>

    )
  }
}

export default App;
