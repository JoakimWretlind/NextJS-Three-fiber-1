import styled from 'styled-components';

export const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 150rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 3rem;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
`;

export const Logo = styled.img`
    height: 4rem;
    margin-top: 5rem;
    opacity: .4;
`;

export const Header = styled.h1`
    margin-top: -3.5rem;
    text-transform: capitalize;
    text-align: center;
    font-weight: 200;
    font-size: 3rem;
    letter-spacing: .7rem;
`;
export const P = styled.p`
    position: absolute;
    text-transform: capitalize;
    top: 90vh;
    font-weight: 200;    
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    letter-spacing: .1rem;
    color: #000;
`;