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
import styles3 from '../styles/section3.module.css'
import img1 from '../images/home-beneficios-1.png'
import img2 from '../images/home-beneficios-2.png'
import img3 from '../images/home-beneficios-3.png'
import img4 from '../images/home-beneficios-4.png'

const Section3 = () => {
    return (
        <MDBModalBody style={{clear: 'both', backgroundColor: "#2546CC"}}>
            <div className={styles3.text} style={{float: 'left', color: 'white', padding: '100px',  width: '720px'}}>
                <h3 style={{padding: '10px'}}>Otimize a gestão da sua Franquia com um <b style={{fontWeight: 'bold'}}>Software sofisticado e inovador</b></h3>
                <p className={styles3.subtext} style={{padding: '10px'}}>Centralize a comunicação da sua franquia, integre diversas soluções em <b style={{fontWeight: 'bold'}}>uma única plataforma</b> e acelere a expansão da sua marca com a <b style={{fontWeight: 'bold'}}>Central do Franqueado</b>. É fácil!</p>
                <MDBBtn className={styles3.btn3} style={{borderRadius: '30px', width: '300px', fontSize: '18px', fontWeight: 'bold'}}>Ver planos</MDBBtn>
            </div>
            <figure className={styles3.banner} style={{floar: 'right', padding: '30px'}}>
                <img src={Banner3} style={{width: '500px'}}/>

            </figure>
            <h2 style={{clear: 'both', textAlign: 'center', color: 'white'}}>E mais...</h2>
            <div style={{color: 'white', marginTop: '50px'}}>
                <ul>
                    <li style={{display: 'inline-block', marginLeft: '80px'}}>
                        <div style={{width: '230px'}}>
                            <img src={img1} style={{width: '80px', marginLeft: '80px'}}/>
                            <p style={{textAlign: 'center'}}>Acelere a captura de interessados para sua franquia</p>
                        </div>
                    </li>
                    <li style={{display: 'inline-block', marginLeft: '80px'}}>
                        <div style={{width: '230px'}}>
                            <img src={img2} style={{width: '80px', marginLeft: '80px'}}/>
                            <p style={{textAlign: 'center'}}>Reduza o custo com a padronização da sua rede</p>
                        </div>
                    </li>
                    <li style={{display: 'inline-block', marginLeft: '80px'}}>
                        <div style={{width: '230px'}}>
                            <img src={img3} style={{width: '80px', marginLeft: '80px'}}/>
                            <p style={{textAlign: 'center'}}>Aumente o engajamento com seus franqueados</p>
                        </div>
                    </li>
                    <li style={{display: 'inline-block', marginLeft: '80px'}}>
                        <div style={{width: '230px'}}>
                            <img src={img4} style={{width: '80px', marginLeft: '80px'}}/>
                            <p style={{textAlign: 'center'}}>Melhore a percepção e imagem da sua marca</p>
                        </div>
                        
                    </li>
                </ul>
            </div>
            
            


        </MDBModalBody>
    )
}

export default Section3