import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
    ImageButton,
    Index,
    ImageContainer,
    Title,
} from './Projects.style';
import  { Container, Relative, Flex } from 'theme/grid';
import  { A } from 'theme/types';
import ParallaxImage from 'react-image-parallax2';
class Projects extends Component {
    render() {
        return (
            <Container>
            <Title>Fotografías</Title>
            <Relative marginTop="100px" marginBottom="50px">
            <Index>
               <h1>01</h1> 
            </Index>
            <h1>Comunidad <A>Estudiantil</A></h1>
            </Relative>
            <Flex justify={'center'} marginBottom="5em">
          <Zoomy
            imageUrl={require('assets/photo.jpg')}
            renderThumbnail={({ showImage }) => 
            <ImageButton onClick={showImage}>
            <img
              src={require('assets/photo_thumbnail.jpg')}
              alt="photo-1" />
            </ImageButton>
            }
            scale={[1.1, 1.1]}
            imageProps={{
        style: { 
         width: '100vw',
         height: 'auto'
            }
          }}
        />
        </Flex>
        <Relative marginBottom="100px">
            <Index>
               <h1>02</h1> 
            </Index>
            <h1>Comunidad. <A>Logros y méritos</A></h1>
            </Relative>
            <ImageContainer>
            <ParallaxImage
            reduceHeight={1/5}
            src={require('assets/inspector.jpg')}/>
            </ImageContainer>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
     </Container>
        );
    }
}
 
export default Projects;
