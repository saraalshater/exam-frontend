import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: ' ',
      flowers: [],
    }
  }




componentDidMount = () => {
  const {user} = this.props.auth0;

  const url=`http://localhost:3005/flowers?email=${this.state.email}`;

  axios
  .get(url)
  .then(result => {
    this.setState({
      email: user.email,
      flowers: result.data,
    })
  })
  .catch(err => { console.log(err)})
}



addFav = (idx) =>{
  const url=`http://localhost:3005/addFav?email=${this.state.email}`;

  let obj = {
    name : this.state.flowers[idx].name,
    imgUrl : this.state.flowers[idx].imgUrl,
    about : this.state.flowers[idx].about,
  }
  console.log(obj);
  axios.post(url, obj)
}





  render() {

    return (
      <>
        <h1>API Flowers</h1>
        <div>
          {this.state.flowers.map((element, idx)=>{
            return (

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={element.imgUrl} />
            <Card.Body>
              <Card.Title>{element.name}</Card.Title>
              <Card.Text>
                {element.about}
              </Card.Text>
              <Button variant="warning" onClick={()=>{this.addFav(idx)}}>add fav</Button>
            </Card.Body>
          </Card>
            )
          })

          }
        </div>
      </>
    )
  }
}

export default withAuth0(Home);
