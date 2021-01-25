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

const Section3 = () => {
    return (
        <MDBModalBody style={{clear: 'both', backgroundColor: "#2546CC"}}>
            <div style={{float: 'left', color: 'white', padding: '50px'}}>
                <h3 style={{padding: '10px'}}>Otimize a gestão da sua Franquia com um <br/>Software sofisticado e inovador</h3>
                <p style={{padding: '10px'}}>Centralize a comunicação da sua franquia, integre diversas soluções <br/>em uma única plataforma e acelere a expansão da sua marca com a <br/>Central do Franqueado. É fácil!</p>
                <MDBBtn>Ver planos</MDBBtn>
            </div>
            <figure style={{floar: 'right', padding: '30px'}}>
                <img src={Banner3} style={{width: '500px'}}/>

            </figure>
            <h2 style={{textAlign: 'center', color: 'white'}}>E mais...</h2>
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
                <span>Acelere a captura de <br/>interessados para sua franquia</span>
                <span>Reduza o custo com a <br/>padronização da sua rede</span>
                <span>Aumente o engajamento com <br/>seus franqueados</span>
                <span>Melhore a percepção e imagem <br/>da sua marca</span>
            </div>


        </MDBModalBody>
    )
}

export default Section3