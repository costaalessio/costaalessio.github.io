var React = require('react');
import {Carousel} from 'react-bootstrap'
const MyCarousel = React.createClass({
  render: function () {
    return (
      <Carousel>
        <Carousel.Item>
          <img src="../../images/caro1.jpg"/>
          <Carousel.Caption>
            <h3>International Lawyers working for you</h3>
            <p>How can we help you?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
})

export default MyCarousel;
