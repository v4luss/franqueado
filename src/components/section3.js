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
import Banner3 from '../images/banner3.png'
import Section3Img1 from '../images/home-beneficios-1.png'
import Section3Img2 from '../images/home-beneficios-2.png'
import Section3Img3 from '../images/home-beneficios-3.png'
import Section3Img4 from '../images/home-beneficios-4.png'
import styles3 from '../styles/section3.module.css'

const Section3 = () => {
    return (
        <MDBModalBody style={{clear: 'both', backgroundColor: "#2546CC"}}>
            <div style={{float: 'left', color: 'white', padding: '100px',  width: '720px'}}>
                <h3 style={{padding: '10px'}}>Otimize a gestão da sua Franquia com um <b style={{fontWeight: 'bold'}}>Software sofisticado e inovador</b></h3>
                <p style={{padding: '10px'}}>Centralize a comunicação da sua franquia, integre diversas soluções <br/>em <b style={{fontWeight: 'bold'}}>uma única plataforma</b> e acelere a expansão da sua marca com a <br/><b style={{fontWeight: 'bold'}}>Central do Franqueado</b>. É fácil!</p>
                <MDBBtn className={styles3.btn3} style={{borderRadius: '30px', width: '300px', fontSize: '18px', fontWeight: 'bold'}}>Ver planos</MDBBtn>
            </div>
            <figure style={{floar: 'right', padding: '30px'}}>
                <img src={Banner3} style={{width: '500px'}}/>

            </figure>
            <h2 style={{clear: 'both', textAlign: 'center', color: 'white'}}>E mais...</h2>
            <div>
                <ul>
                    <li style={{display: 'inline-block', paddingLeft: '150px'}}>
                        <img src={Section3Img1} style={{width: '80px'}}/>
                    </li>
                    <li style={{display: 'inline-block', paddingLeft: '200px'}}>
                        <img src={Section3Img2} style={{width: '80px'}}/>
                    </li>
                    <li style={{display: 'inline-block', paddingLeft: '200px'}}>
                        <img src={Section3Img3} style={{width: '80px'}}/>
                    </li>
                    <li style={{display: 'inline-block', paddingLeft: '200px'}}>
                        <img src={Section3Img4} style={{width: '80px'}}/>
                    </li>
                </ul>
            </div>
            
            <div style={{color: 'white'}}>
                <ul>
                    <li style={{paddingLeft: '90px', display: 'inline-block'}}><p style={{textAlign: 'center'}}>Acelere a captura de <br/>interessados para sua franquia</p></li>
                    <li style={{paddingLeft: '70px', display: 'inline-block'}}><p style={{textAlign: 'center'}}>Reduza o custo com a <br/>padronização da sua rede</p></li>
                    <li style={{paddingLeft: '90px', display: 'inline-block'}}><p style={{textAlign: 'center'}}>Aumente o engajamento com <br/>seus franqueados</p></li>
                    <li style={{paddingLeft: '70px', display: 'inline-block'}}><p style={{textAlign: 'center'}}>Melhore a percepção e imagem <br/>da sua marca</p></li>
                </ul>
            </div>


        </MDBModalBody>
    )
}

export default Section3