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
import styles from '../styles/section.module.css'
import BalanceadoImg from '../images/balanceado.png'
import Aspas from '../images/aspas.png'

const Section4 = () => {
    return (
        <MDBModalBody style={{paddingTop: '60px', paddingBottom: '100px'}}>
            <div style={{float: 'left', paddingLeft: '100px', paddingTop: '50px'}}>
                <div className={styles.bubble}>
                    <img src={BalanceadoImg} style={{width: '230px'}}/>
                    <div style={{paddingTop: '50px', paddingRight: '20px', textAlign: 'justify', width: '450px'}}>
                        <img src={Aspas}/>
                        <span style={{fontWeight: 'bold'}}>Utilizamos a Central do Franqueado há bastante tempo e cada vez mais vem se tornando imprecindível para o nosso negócio.</span>
                        <p style={{marginTop: '15px', fontWeight: 'bold'}}>Giuseppe Frizzo</p>
                        <span style={{position: 'relative', top: '-10px'}}>Coordenador de Operação da Rede Balanceado</span>
                    </div>
                </div>
                <div className={styles.triangle}>
                </div>
            </div>
            <div style={{textAlign: 'left', float: 'right', width: '700px', paddingRight: '120px', paddingLeft: '50px'}}>
                <h3 style={{paddingBottom: '20px'}}>Junte-se às mais de 200 Franquias que já transformaram sua gestão com a Central do Franqueado!</h3>
                <p>Dois a cada três clientes afirmam que contar com a nossa plataforma agrega valor na venda de novas unidades</p>
                <p>Economia de um terço no tempo gasto com o suporte às unidades</p>
                <p>35% de economia financeira com a diminuição do retrabalho e a otimização da equipe</p>
                <p>54% dos nossos clientes afirmam que houve um aumento na padronização da rede</p>
            </div>
        </MDBModalBody>
        
    )
}

export default Section4