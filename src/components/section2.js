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
import styles from '../styles/section2.module.css'

const Section2 = () => {
    return (
      <MDBModalBody>
          <div style={{textAlign: "center", color: "blue"}}>
            <h3 style={{padding: '20px', fontWeight: 'bold'}}>Clientes que apostam na transforação Digital</h3>
            <ul>
                <li className={styles.img} style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure style={{backgroundColor: 'black'}}>
                            <img src={TeaShopImg}/>
                        </figure>
                    </a>
                </li>
                <li className={styles.img} style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure>
                            <img src={MariaAçai}/>
                        </figure>
                    </a>
                </li>
                <li className={styles.img} style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure>
                            <img src={BarDoUrso}/>
                        </figure>
                    </a>
                </li>
                <li className={styles.img} style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure>
                            <img src={EscolinhaFla}/>
                        </figure>
                    </a>
                </li>
                <li className={styles.img} style={{padding: '10px', display: 'inline-block'}}>
                    <a>
                        <figure>
                            <img src={OticaSao}/>
                        </figure>
                    </a>
                </li>
            </ul>
          </div>

          <hr/>

          <MDBModalBody>
            <figure style={{float: 'left'}}>
                <img src={Banner2} style={{paddingLeft: '150px', paddingTop: '40px'}}/>
            
            </figure>
            <div style={{float: 'right', textAlign: 'left', paddingRight: '120px', paddingTop: '150px', width: '590px', marginLeft: '50px'}}>
                <h3 style={{color: 'blue', fontSize: '30px'}}>Sem integração não há <b style={{fontWeight: 'bold'}}>sucesso no Franchising</b></h3>
                <ul style={{position: 'relative', left: '-20px'}}>
                    <li className={styles.list}><p>Comunicação em diferentes canais está enfraquecendo o engajamento com franqueados</p></li>
                    <li className={styles.list}><p>Os gargalos no funil de vendas estão prejudicando a expansão da rede</p></li>
                    <li className={styles.list}><p>A padronização está sendo prejudicada pela dificuldade em promover treinamentos e transmitir o know-how da marca</p></li>
                </ul>
                
                <MDBBtn className={styles.btn} style={{borderRadius: '30px', width: '300px', fontSize: '18px', fontWeight: 'bold'}}>Conhecer Solução</MDBBtn>
            </div>
          </MDBModalBody>
      </MDBModalBody>
      
      
      
        
    )
}

export default Section2
