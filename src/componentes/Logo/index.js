import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div `
    display: flex;
    font-size: 24px;
    margin-left: 8px; 
`
const LogoImg = styled.img `
    margin-right: 8px;
`


function Logo() {
    return (
        <LogoContainer>
            <LogoImg
                src={logo}
                alt='logo'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;