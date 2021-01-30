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
import CellphoneIcon from '../images/cellicon.png'
import TelephoneIcon from '../images/telephoneicon.png'
import styles from '../styles/footer.module.css'

const Section5 = () => {
    return (
        <MDBModalBody style={{backgroundColor: '#1728AF', color: 'white'}}>
            <div style={{paddingTop: '50px', paddingLeft: '100px'}}>
                <div style={{float: 'left'}}>
                    <figure>
                        <img src={LogoImg} style={{width: '200px'}}/>
                    </figure>
                    <div style={{marginBottom: '20px', marginTop: '50px'}}>
                        <img src={CellphoneIcon} style={{width: '10px'}}/>
                        <span style={{paddingTop: '20px', fontWeight: 'bold'}} className={styles.changeColor}> &nbsp; <a>(51)98126-1653</a></span>
                    </div>
                    <div>
                        <img src={TelephoneIcon} style={{width: '10px'}}/>
                        <span className={styles.changeColor} style={{fontWeight: 'bold'}}> &nbsp; <a>(51)3391-6340</a></span>
                    </div>
                    <figure style={{position: 'relative', left: '-20px'}}>
                        <img src={LogoFace} style={{width: '50px'}} className={styles.icon}/>
                        <a className={styles.iconChangeColor}><img src={LogoInsta} style={{width: '50px'}}/></a>
                        <a><img src={LogoLink} style={{width: '70px'}}/></a>
                        <a><img src={LogoWhats} style={{width: '30px'}}/></a>
                        <a><img src={LogoYou} style={{width: '60px', paddingLeft: '20px'}}/></a>
                    </figure>
                </div>
                <div style={{float: 'left', paddingLeft: '80px'}}>
                    <ul>
                        <li style={{paddingBottom: '20px', listStyleType: 'none', fontWeight: 'bold'}}>Módulos</li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Plataforma</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>CRM</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Arquivos</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>CAF</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Checklist</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Projetos</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Compras</a></li>
                    </ul>
                </div>
                <div style={{float: 'left', paddingLeft: '30px'}}>
                    <ul>
                        <li style={{paddingBottom: '20px', listStyleType: 'none', fontWeight: 'bold'}}>A Central</li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Seja um Parceiro</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Acesse a sua Conta</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Plataforma</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Planos e Preços</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Perguntas Frequentes</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Anuncie</a></li>
                        <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Franquias</a></li>
                    </ul>
                </div>
                <div style={{float: 'left', paddingLeft: '10px'}}>
                    <ul>
                    <li style={{paddingBottom: '20px', listStyleType: 'none', fontWeight: 'bold'}}>Educativo</li>
                    <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Cursos por E-mail</a></li>
                    <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Blog</a></li>
                    </ul>
                </div>
                <div style={{float: 'left', width: '260px'}}>
                    <ul>
                    <li style={{paddingBottom: '20px', listStyleType: 'none', fontWeight: 'bold'}}><a>Últimas do Blog</a></li>
                    <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>18 Franquias online para você trabalhar sem sair de casa</a></li>
                    <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Descubra como cobrar Royalties em uma rede de franquias</a></li>
                    <li className={styles.changeColor} style={{paddingBottom: '20px', listStyleType: 'none'}}><a>Franquias baratas: mais de 100 dicas por até R$90 mil</a></li>
                    </ul>
                </div>
            </div>
            
            
            
            <hr color='grey' style={{clear: 'both', width: '1100px'}}/>
            <div>
            <div className={styles.div1} style={{float: 'left', paddingTop: '60px', paddingLeft: '105px', paddingBottom: '50px'}}>
                <h5>Apoio</h5>
                <img src={StartupImg}/>
            </div>

            <div className={styles.div2} style={{float: 'right', paddingRight: '180px', paddingTop: '60px'}}>
                <p style={{fontWeight: 'bold'}}>Aplicativo Mobile</p>
                <a><img src={GooglePlayBtn} style={{width: '210px', marginRight: '50px', borderRadius: '10px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white'}}/></a>
                <a><img src={AppleStoreBtn} style={{width: '220px', borderRadius: '10px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white'}}/></a>

            </div>
                <hr color='grey' style={{clear: 'both', width: '1100px'}}/>
            </div>
            <hr/>

        
        </MDBModalBody>
        


    )
}

export default Section5