import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'


class Menu extends Component {
    constructor(props) {
        super(props);
       
      
    }
  
    

    render() {
        const menu = this.props.profile.map((profile) => {
            return (
              <div key={profile.id} className="col-12 col-md-5 m-1">
                 <Card>
                 <Link to={`/menu/${profile.id}`} >
                      <CardImg width="100%" src={profile.image} alt={profile.name} />
                        <CardImgOverlay>
                  
                    <CardTitle>{profile.name}</CardTitle>
                    </CardImgOverlay>
                    </Link>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
          <div className="row">
          <Breadcrumb>
             <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
             <BreadcrumbItem active>Profile</BreadcrumbItem>
           </Breadcrumb>
           <div className="col-12">
              <h3>Profiles</h3>
              <hr/>
              </div>
          </div>
            <div className="row">
                {menu}
              </div>
              
          </div>
        );
    }
}

export default Menu;
