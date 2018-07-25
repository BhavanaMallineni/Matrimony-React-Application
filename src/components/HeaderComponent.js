import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
        <NavbarToggler onClick={this.toggleNav}/>
           <NavbarBrand className="mr-auto" href="/">
            <img src="" height="30" width="40" alt="Match Matrimony"/>
            </NavbarBrand>
           <Collapse isOpen={this.state.isNavOpen} navbar>
           <Nav navbar>
           <NavItem>
               <NavLink className="nav-link" to="/home">
                <span className="fa fa-home fa-lg"></span>Home
               </NavLink>
               </NavItem>
               <NavItem>
               <NavLink className="nav-link" to="/aboutus">
                <span className="fa fa-info fa-lg"></span>About Us
               </NavLink>
               </NavItem>
               <NavItem>
               <NavLink className="nav-link" to="/menu">
                <span className="fa fa-list fa-lg"></span>Profiles
               </NavLink>
               </NavItem>
               <NavItem>
               <NavLink className="nav-link" to="/contactus">
                <span className="fa fa-address-card fa-lg"></span>Contact Us
               </NavLink>
               </NavItem>
           </Nav>
           <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
       </Collapse>
       
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Match Matrimony </h1>
                       <p>Our website is one of the pioneers of online matrimony service. It is regarded as the most trusted matrimony website by Brand Trust Report. We have also been featured in Limca Book of records for having Record number of documented marriages online. Our purpose is to build a better lives through happy marriages.</p>
                   </div>
               </div>
           </div>
       </Jumbotron>

       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                       
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
    </React.Fragment>
    );
  }
}

export default Header;