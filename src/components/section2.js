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
import TeaShopImg from '../images/logo-tea-shop.png'
import MariaAçai from '../images/logo-maria-acai.png'
import BarDoUrso from '../images/logo-bar-do-urso.png'
import EscolinhaFla from '../images/logo-escolinha-fla.png'
import OticaSao from '../images/logo-otica-sao-jose.png'
import Banner2 from '../images/banner2.png'

const Section2 = () => {
    return (
      <MDBModalBody>
          <div style={{textAlign: "center", color: "blue"}}>
            <p style={{padding: '20px'}}>Clientes que apostam na transforação Digital</p>
            <ul>
                <li style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure style={{backgroundColor: 'black'}}>
                            <img src={TeaShopImg}/>
                        </figure>
                    </a>
                </li>
                <li style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure>
                            <img src={MariaAçai}/>
                        </figure>
                    </a>
                </li>
                <li style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure>
                            <img src={BarDoUrso}/>
                        </figure>
                    </a>
                </li>
                <li style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure>
                            <img src={EscolinhaFla}/>
                        </figure>
                    </a>
                </li>
                <li style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure>
                            <img src={OticaSao}/>
                        </figure>
                    </a>
                </li>
            </ul>
          </div>
          <hr/>
          <div style={{float: 'left'}}>
            <img src={Banner2} style={{paddingLeft: '150px', paddingTop: '40px'}}/>
            
          </div>
          <div style={{float: 'right', textAlign: 'left', paddingRight: '220px', paddingTop: '150px'}}>
              <h3 style={{color: 'blue'}}>Sem integração não há sucesso no <br/>Franchising</h3>
              <p>Comunicação em diferentes canais está enfraquecendo o <br/>engajamento com franqueados</p>
              <p>Os gargalos no funil de vendas estão prejudicando a <br/>expansão da rede</p>
              <p>A padronização está sendo prejudicada pela dificuldade em <br/>promover treinamentos e transmitir o know-how da marca</p>
              <MDBBtn>Conhecer Solução</MDBBtn>
          </div>
      </MDBModalBody>
      
      
      
        
    )
}

export default Section2
