import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


class FavFlowers extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      favArr: [],
      updateObj: {},
      showUpdateModal: false,

    }
  }



  showingModal=(element)=>{
    this.setState({
      updateObj: element,
      showUpdateModal: false,
    })
  }
  
  componentDidMount = () => {
    const url=`http://localhost:3005/favCard`;
    axios
    .get(url)
    .then(result => {
      this.setState({ 
        favArr: result.data,
      })
      console.log(result.data);
    })
    .catch(err => { console.log(err)})
  }

  deleteFav = (id) =>{
    const url=`http://localhost:3005/deleteFav/${id}`;

    axios
    .delete(url)
    .then(result=>{
      this.setState({
        favArr: result.data,
      })
    })
    .catch(err => { console.log(err)})
  }


  updateFav = (event) => {
    const flowersId = this.state.updateObj._id;
    const bodyObj = {
      name : event.target.name.value,
      imgUrl : event.target.imgUrl.value,
      about: event.target.about.value,
    }
    const url=`http://localhost:3005/updatedata/${flowersId}`;
    axios.
    .put(url, bodyObj)
    .then(result=>{
      const updatedArr = this.state.favArr.map(element{
        if( element._id===)
      }
        )
    })
  }
  
  
  render() {
    return(
      <>
        <h1>My Favorite Flowers</h1>
        {this.state.favArr.map((element, idx)=>{
           return (

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={element.imgUrl} />
              <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>
                  {element.about}
                </Card.Text>
                <Button variant="warning"onClick={()=>{this.updateFav(event)} >update</Button>
                <Button variant="danger" onClick={()=>{this.deleteFav(element._id)}}>delete</Button>
              </Card.Body>
            </Card>
              )

        })}
      </>
    )
  }
}

export default withAuth0(FavFlowers);
