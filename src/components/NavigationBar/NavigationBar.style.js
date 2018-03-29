import styled from 'styled-components';
import { Flex, Div } from 'theme/grid';
import { black, green2, red, white, bup } from 'theme/variables';
import { Link } from 'react-router';


export const NavigationContainer = styled(Flex)`
     position: fixed;
     right: 0;
     right: 1em;
     top: 1.5em;
`;
 
export const NavItem = styled(Link)`
   margin-right: 30px;
   font-size: 1.2em;
   cursor: pointer;
   color: ${black};
   position: relative;
   text-decoration: none;

   &:hover {
       color: ${white};
   &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: ${bup};
      z-index: -1;
      transform: scale(1.3, 1.5);
   }
   }
`;