import MyCarousel from './Carousel'
import {Link} from 'react-router'

const Home = React.createClass({
  render: function (){
    return (
      <div>
        <MyCarousel />
        <h1>Homepage :D 1</h1>
        <Link to="/about">About</Link>
      </div>
    )
  }
})

export default Home;
