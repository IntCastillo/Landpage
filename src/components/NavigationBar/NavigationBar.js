import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
    render() {
        return (
            <NavigationContainer>
                <NavItem to="/">Inicio</NavItem>
                <NavItem to="/projects">Multimedia</NavItem>
                <NavItem to="/simbolos">Símbolos</NavItem>
                <NavItem to="/cronograma">Cronograma</NavItem>
                <NavItem to="/peticiones">Peticiones</NavItem>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;