import styled from 'styled-components'
import defaultBcg from '../../../images/single duluxe.jpg';

const StyledHero = styled.header`
 min-height: 100vh;
 background: url(${props => props.img ? props.img : defaultBcg}) center/cover no-repeat;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 top: 0px;
 
 
`;

export default StyledHero;