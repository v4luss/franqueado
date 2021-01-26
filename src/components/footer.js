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
import LogoImg from '../images/logo.png'
import LogoFace from '../images/logo-face.png'
import LogoInsta from '../images/icon-insta.png'
import LogoLink from '../images/logo-link.png'
import LogoWhats from '../images/logo-whats.png'
import LogoYou from '../images/logo-you.png'
import StartupImg from '../images/startup.png'
import GooglePlayBtn from '../images/google_play.png'
import AppleStoreBtn from '../images/apple_store.png'

const Section5 = () => {
    return (
        <MDBModalBody style={{height: '1000px', backgroundColor: 'blue', color: 'white'}}>
            <div style={{paddingTop: '50px', paddingLeft: '100px'}}>
                <div style={{float: 'left'}}>
                    <figure style={{}}>
                        <img src={LogoImg} style={{width: '200px'}}/>
                    </figure>
                    <p style={{paddingTop: '20px'}}>(51)98126-1653</p>
                    <p>(51)3391-6340</p>
                    <figure style={{position: 'relative', left: '-20px'}}>
                        <img src={LogoFace} style={{width: '50px'}}/>
                        <img src={LogoInsta} style={{width: '50px'}}/>
                        <img src={LogoLink} style={{width: '70px'}}/>
                        <img src={LogoWhats} style={{width: '30px'}}/>
                        <img src={LogoYou} style={{width: '60px', paddingLeft: '20px'}}/>
                    </figure>
                </div>
                <div style={{float: 'left', paddingLeft: '80px'}}>
                    <ul>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}>Módulos</li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Plataforma</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>CRM</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Arquivos</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>CAF</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Checklist</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Projetos</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Compras</a></li>
                    </ul>
                </div>
                <div style={{float: 'left', paddingLeft: '30px'}}>
                    <ul>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}>A Central</li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Seja um Parceiro</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Acesse a sua Conta</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Plataforma</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Planos e Preços</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Perguntas Frequentes</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Anuncie</a></li>
                        <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Franquias</a></li>
                    </ul>
                </div>
                <div style={{float: 'left', paddingLeft: '10px'}}>
                    <ul>
                    <li style={{paddingBottom: '20px', listStyleType: 'none'}}>Educativo</li>
                    <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Cursos por E-mail</a></li>
                    <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Blog</a></li>
                    </ul>
                </div>
                <div style={{float: 'left', width: '260px'}}>
                    <ul>
                    <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Últimas do Blog</a></li>
                    <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>18 Franquias online para você trabalhar sem sair de casa</a></li>
                    <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Descubra como cobrar Royalties em uma rede de franquias</a></li>
                    <li style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Franquias baratas: mais de 100 dicas por até R$90 mil</a></li>
                    </ul>
                </div>
            </div>
            
            
            
            <hr color='grey' style={{clear: 'both', width: '1100px'}}/>
            
            <div style={{float: 'left', paddingTop: '60px', paddingLeft: '105px', paddingBottom: '50px'}}>
                <h5>Apoio</h5>
                <img src={StartupImg}/>
            </div>

            <div style={{float: 'right', paddingRight: '180px', paddingTop: '60px'}}>
                <p>Aplicativo Mobile</p>
                <img src={GooglePlayBtn} style={{width: '210px', marginRight: '50px'}}/>
                <img src={AppleStoreBtn} style={{width: '220px'}}/>

            </div>
                <hr color='grey' style={{clear: 'both', width: '1100px'}}/>

            



            <hr/>

        
        </MDBModalBody>
        


    )
}

export default Section5