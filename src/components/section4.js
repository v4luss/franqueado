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
import IconV from '../images/iconV.png'
import style2 from '../styles/section4.module.css'

const Section4 = () => {
    return (
        <MDBModalBody style={{paddingTop: '60px', paddingBottom: '100px', backgroundColor: 'white'}}>
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
            <div style={{textAlign: 'justify', float: 'right', width: '700px', paddingRight: '120px', paddingLeft: '50px'}}>
                <h3 style={{paddingBottom: '20px', color: 'blue'}}>Junte-se às mais de 200 Franquias que já <b style={{fontWeight: 'bold'}}>transformaram sua gestão com a Central do Franqueado!</b></h3>
                <ul style={{position: 'relative', left: '-20px', fontSize: '19px'}}>
                    <li className={style2.list}><p><b style={{fontWeight: 'bold'}}>Dois a cada três clientes</b> afirmam que contar com a nossa plataforma <b style={{fontWeight: 'bold'}}>agrega valor</b> na venda de novas unidades</p></li>
                    <li className={style2.list}><p><b style={{fontWeight: 'bold'}}>Economia de um terço no tempo</b> gasto com o suporte às unidades</p></li>
                    <li className={style2.list}><p><b style={{fontWeight: 'bold'}}>35% de economia financeira</b> com a diminuição do retrabalho e a otimização da equipe</p></li>
                    <li className={style2.list}><p>54% dos nossos clientes afirmam que houve um <b style={{fontWeight: 'bold'}}>aumento na padronização</b> da rede</p></li>
                
                </ul>
                
            </div>
        </MDBModalBody>
        
    )
}

export default Section4