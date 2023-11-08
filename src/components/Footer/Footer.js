import React from "react";
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className="bg-light text-center">
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Skontaktuj sie z nami:</span>
        </div>
        <div>
          <a href='https://www.facebook.com/pages/Parafia-%C5%9Bw-Miko%C5%82aja-w-Przybynowie/1852226948337601'
             className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f"/>
          </a>
          <a
            href='https://www.google.com/search?client=firefox-b-d&q=parafia+rzymskokatolicka+w+przybynowie#lrd=0x47173098ea8a7477:0xfa727f6d73bbb90d,1,,,,'
            className='me-4 text-reset'>
            <MDBIcon fab icon="google"/>
          </a>
          <a href='https://github.com/radzek15' className='me-4 text-reset'>
            <MDBIcon fab icon="github"/>
          </a>
        </div>
      </section>

      <section className={ '' }>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className={ 'mt-3' }>
            <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon fas icon="church" className="me-3"/>
                Parafia św. Mikołaja w Przybynowie
              </h6>
              <p>Parafia rzymskokatolicka, znajdująca się w archidiecezji częstochowskiej, w dekanacie żareckim.</p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Odwiedź rownież</h6>
              <p><a href='https://parafia.com.pl' className='text-reset'>Informacje</a></p>
              <p><a href='https://www.lesniow.pl' className='text-reset'>Sanktuarium w Leśniowie</a></p>
              <p><a href='https://www.zyjewangelia.net/' className='text-reset'>Żyj ewangelią</a></p>
            </MDBCol>

            <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Dane kontaktowe</h6>
              <p>
                <MDBIcon icon="home" className="me-2"/>
                ul. Czestochowska 2, 42-310 Przbynów, Polska
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3"/>
                przybynowparafia@gmail.com
              </p>
              <p>
                <MDBIcon icon="bank" className="me-3"/> 59 8279 1036 0400 0710 2004 0001
              </p>
              <p>
                <MDBIcon fas icon="mobile-alt" className="me-3"/> +48 608 321 884
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className={ 'text-center p-3 bg-dark' }>
        <p className={ 'text-light mt-3' }>Copyright: &copy; 2023 Parafia Przybynów. All rights reserved.</p>
      </div>
    </MDBFooter>
  );
}

export default Footer