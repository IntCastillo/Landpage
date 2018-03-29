import React, { Component } from 'react';
import { Container, Flex } from 'theme/grid';
import { Title, VideoContainer, StyledPlayButton } from './Peticiones.style';
import ReactPlayer from 'react-player';
import { H2, P } from 'theme/types';
import ToggleState from 'react-toggle-state';

class Peticiones extends Component {
    render() {
        return (
            <Container>
               <Title>Peticiones</Title>
               <H2 align="left">Para trámites y papeleo:</H2>
              <Flex>
                 <P align="left">Puede contactar directamente en nuestro plantel académica o enviarnos sus
                                 inquietudes a nuestro correo</P>
                 <ToggleState>
                  {({ isTrue: playing, turnTrue: startPlay, turnFalse: stopPlay }) =>
                  <ToggleState>
                    {({ isTrue: hovering, turnTrue: onMouseOver, turnFalse: onMouseLeave }) =>
                     <VideoContainer
                     onMouseLeave={onMouseLeave}
                     onMouseOver={onMouseOver}
                     onClick={playing ?  stopPlay: startPlay}
                     >
                    <StyledPlayButton playing ={playing} hover={hovering}/>
                 <ReactPlayer
                    /*loop*/
                    playing={playing}
                    height= "auto"
                    width= "100%"
                    url={require('assets/profile.mp4')} />
                    </VideoContainer> 
                    }
                  </ToggleState>
                  }
                 </ToggleState>            
                 </Flex>
            </Container>
        );
    }
}

export default Peticiones;