import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
class ProfileDetail extends Component{



renderProfile(dish) {
   
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
  
}
render(){
    if(this.props.profile!=null)
    return(
        <div class = "container">
        <div className="row">
          <Breadcrumb>
            
             <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
             <BreadcrumbItem active>{this.props.profile.name}</BreadcrumbItem>
           </Breadcrumb>
           <div className="col-12">
              <h3>{this.props.profile.name}</h3>
              <hr/>
              </div>
           </div>
        <div class="row">
        {this.renderProfile(this.props.profile)}
        </div>
            </div>
    );
    else
    return(
        <div>
            </div>
    );
}
}

export default ProfileDetail;