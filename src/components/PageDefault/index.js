import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import NavBar from '../NavBar';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;

    ${({ page }) => page !== 'home' && css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `}

    ${({ paddingAll }) => css`
       padding: ${paddingAll}
    `}
`;

function PageDefault({ children, page, paddingAll }) {
    return (
        <>
            <NavBar page={page} />
            <Main page={page} paddingAll={paddingAll}>
                {children}
            </Main>

            <Footer />
        </>
    );
}

PageDefault.defaultProps = {
    page: '',
    paddingAll: 0,
};

PageDefault.propTypes = {
    children: PropTypes.node.isRequired,
    page: PropTypes.string,
    paddingAll: PropTypes.number,
};

export default PageDefault;
