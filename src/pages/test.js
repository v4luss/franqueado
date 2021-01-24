import React, { Component } from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBNavLink,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow
} from 'mdbreact'
import { Link } from 'gatsby'
import src1 from '../images/logo.png'
import Header from '../components/header'


const testPage = () => {
    return (
      <Header/>
      
        
    )
}

export default testPage


/*
class NavPage extends Component {
  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }))

  render () {
    const overlay = <div id="sidenav-overlay" onClick={this.toggleCollapse('navbarCollapse')} />
    return (
        <div id="navpage">
          <MDBNavbar color="red" light expand="md" fixed="top">
            <Link to="/">
                <img src={src1} type="image/png" height="40" alt="" waves />
             
            </Link>
            <MDBNavbarToggler tag="button" className="aqua-gradient" onClick={this.toggleCollapse('navbarCollapse')} />
            <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <TwitterModalPage />
                </MDBNavItem>
                <MDBNavItem>
                  <BlogModalPage />
                </MDBNavItem>
                <MDBNavItem>
                  <ContactModalPage />
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <a
                    className="nav-link text-dark navbar-link hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://linkedin.com/"
                  >
                    <MDBIcon fab icon="linkedin" />
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a
                    className="nav-link text-dark navbar-link hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/"
                  >
                    <MDBIcon fab icon="github" />
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a
                    className="nav-link text-dark navbar-link hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <MDBIcon fab icon="twitter" />
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a
                    className="nav-link text-dark navbar-link hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://hub.docker.com/"
                  >
                    <MDBIcon fab icon="docker" />
                  </a>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {this.state.collapseID && overlay}
        </div>
    )
  }
}

export default NavPage
*/