import React, { Component, PropTypes } from 'react';
import {Container} from 'theme/grid';
import {
  Image,
  PhotoHeader,
  RevealP
} from './Home.style';
import  WhenInView from 'components/WheninView/WheninView';
export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
       <PhotoHeader>
        <h1>
        Bienvenidos,
        </h1>
        <h2>
        portal Institucional 
        </h2>
        </PhotoHeader>
        
        <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>
        Insfraestructura óptima y de calidad. Contamos con la mejor planta física a nivel Municipal y departamental.
        JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado
        a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.
        </RevealP>
        }
        </WhenInView>
        <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>
        Insfraestructura óptima y de calidad. Contamos con la mejor planta física a nivel Municipal y departamental.
        JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado
        a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.
        </RevealP>
        }
        </WhenInView>
        <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>
        Insfraestructura óptima y de calidad. Contamos con la mejor planta física a nivel Municipal y departamental.
        JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado
        a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.
        </RevealP>
        }
        </WhenInView>
      </Container>
    );
  }
}
