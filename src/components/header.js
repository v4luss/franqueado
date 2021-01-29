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
import MegafoneImg from '../images/icontMegafone2.png'
import styles from '../styles/header.module.css'
import styles2 from '../styles/header2.css'

const Header = () => {
  
  function fun () {
    document.getElementsByClassName('dropMenu1').style.display = 'block';
  }

    return (
      <div>

        <MDBNavbar style={{backgroundColor: '#FF7220', height: "50px", color: 'white'}}>
          <div style={{margin: 'auto'}}><img src={MegafoneImg} style={{marginRight: '10px'}}/><a>Anuncie em nosso <b style={{fontWeight: 'bold'}}>Portal de Franquias!</b></a></div>
        </MDBNavbar>
        <MDBNavbar style={{height: '100px', backgroundColor: "#316DE8", boxShadow: 'none'}} expand="md">
          <a><img src={src1} style={{width: "200px", margin: "20px", padding: "20px", marginLeft: '95px'}}/></a>
          <div style={{paddingLeft: "100px", color: 'white', fontSize: '20px'}}>
            <a className={styles.text} style={{marginLeft: '10px'}}>Soluções</a>
            <a className={styles.text} style={{marginLeft: '25px'}}>Preços</a>
            <a className={styles.text} style={{marginLeft: '25px'}}>Saiba mais</a>
            <MDBBtn id={styles2.butn1} className={styles.btn1} style={{marginLeft: '40px', borderRadius: '30px', width: '300px', fontSize: '15px', fontWeight: 'bold', textTransform: 'unset'}}>Quero falar com um consultor</MDBBtn>
            <MDBBtn className={styles.btn2}>Acessar conta</MDBBtn>
            
          </div>
        
        </MDBNavbar>
          <div className={styles.dropMenu1}>
            <h6 style={{fontWeight: 'bold', color: 'grey'}}>PRODUTOS</h6>
              <ul style={{marginLeft: '30px', float: 'left'}}>

                <a><li className={styles.ldrop11} style={{marginBottom: '-50px'}}>
                  <div style={{position: 'relative', top: '-80px', width: '250px', marginLeft: '10px'}}>
                    <p style={{fontWeight: 'bold', color: '#51CDB3'}}>Engajamento</p>
                    <p style={{fontSize: '15px'}}>Resolva os problemas de comunicação com seus fanqueados</p>
                  </div>
                </li></a>

                <a><li className={styles.ldrop12} style={{marginBottom: '-50px'}}>
                  <div style={{position: 'relative', top: '-80px', width: '250px', marginLeft: '10px'}}>
                    <p style={{fontWeight: 'bold', color: 'yellow'}}>Padronização</p>
                    <p style={{fontSize: '15px'}}>Otimize os padrões da sua marca com o suíte completo de Marketing</p>
                  </div>
                </li></a>

                <a><li className={styles.ldrop13} style={{marginBottom: '-50px'}}>
                  <div style={{position: 'relative', top: '-80px', width: '250px', marginLeft: '10px'}}>
                    <p style={{fontWeight: 'bold', color: 'purple'}}>Expansão</p>
                    <p style={{fontSize: '15px'}}>Capture leads, construa um funil de vendas e acelere a expansão da sua rede</p>
                  </div>
                </li></a>

                <hr style={{position: 'relative', left: '-430px', width: '320px'}}/>

                <a><li className={styles.ldrop14}>
                  <div style={{position: 'relative', top: '-80px', width: '250px', marginLeft: '10px'}}>
                    <p style={{fontWeight: 'bold'}}>Portal de Franquias</p>
                    <p style={{fontSize: '15px'}}>Anuncie sua Franquia em nosso Portal e aumente as oportunidades da sua rede</p>
                  </div>
                </li></a>
              </ul>

              <div style={{float: 'left'}}>
              <h6 style={{position: 'relative', top: '-30px', left: '-40px', color: 'grey', fontWeight: 'bold'}}>PLATAFORMA</h6>

              <ul style={{position: 'relative', top: '-20px'}}>

                <a><li className={styles.ldrop21} style={{marginBottom: '-40px'}}>
                  <div style={{position: 'relative', top: '-80px', width: '260px', marginLeft: '10px'}}>
                    <p style={{fontWeight: 'bold'}}>Visão Geral</p>
                    <p style={{fontSize: '15px'}}>Plataforma online para decolar sua rede de Franquias</p>
                  </div>
                </li></a>

                <a><li className={styles.ldrop22} style={{marginBottom: '-20px'}}>
                  <div style={{position: 'relative', top: '-50px', marginLeft: '10px', width: '260px'}}>
                    <p style={{fontWeight: 'bold'}}>CAF</p>
                    <p style={{fontSize: '15px'}}>Resolva os problemas de comunicação com seus franqueados</p>
                  </div>
                </li></a>

                <a><li className={styles.ldrop23} style={{marginBottom: '0px'}}>
                  <div style={{position: 'relative', top: '-50px', marginLeft: '10px', width: '260px'}}>
                    <p style={{fontWeight: 'bold'}}>Arquivos</p>
                    <p style={{fontSize: '15px'}}>Gerencie todos os arquivos da sua rede em um único local</p>
                  </div>
                </li></a>

                <a><li className={styles.ldrop24}>
                  <div style={{position: 'relative', top: '-70px', marginLeft: '10px', width: '260px'}}>
                    <p style={{fontWeight: 'bold'}}>Checklist</p>
                    <p style={{fontSize: '15px'}}>Mantenha a padronização da sua rede com qualidade</p>
                  </div>
                </li></a>
              </ul>
              </div>
              <ul style={{float: 'left', paddingLeft: '100px', marginTop: '-5px'}}>

                <a><li className={styles.ldrop31} style={{marginBottom: '-30px'}}>
                  <div style={{width: '270px', position: 'relative', top: '-70px', marginLeft: '10px'}}>
                    <p style={{fontWeight: 'bold'}}>Marketing</p>
                    <p style={{fontSize: '15px'}}>Fortaleça a identidade da sua marca com um marketing centralizado</p>
                  </div>
                </li></a>

                <a><li className={styles.ldrop32} style={{marginBottom: '-30px'}}>
                  <div style={{width: '270px', position: 'relative', top: '-70px', marginLeft: '10px'}}>
                    <p style={{fontWeight: 'bold'}}>Compras</p>
                    <p style={{fontSize: '15px'}}>Segurança e facilidade no processo de compras pelos franqueados</p>
                  </div>
                </li></a>

                <a><li className={styles.ldrop33}>
                  <div style={{width: '270px', position: 'relative', top: '-70px', marginLeft: '10px'}}>
                    <p style={{fontWeight: 'bold'}}>CRM</p>
                    <p style={{fontSize: '15px'}}>Gerencie seu CRM personalizados e acelere suas vendas</p>
                  </div>
                </li></a>

                <a><li className={styles.ldrop34}>
                  <div style={{width: '270px', position: 'relative', top: '-70px', marginLeft: '10px'}}>
                    <p style={{fontWeight: 'bold'}}>Projetos</p>
                    <p style={{fontSize: '15px'}}>Inaugure novas unidades e organize lançamentos de novos produtos</p>
                  </div>
                </li></a>

              </ul>


              
          </div>
          <canvas className={styles.triangle}></canvas>
        
      </div>
      
        
    )
}

export default Header
