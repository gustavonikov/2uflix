import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;
    padding-top: 50px 5% 0px 5%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
    return (
        <>
            <Menu />
            <Main paddingAll={paddingAll}>
                {children}
            </Main>

            <Footer />
        </>
    );
}

PageDefault.defaultProps = {
    paddingAll: 'string',
};

PageDefault.propTypes = {
    children: PropTypes.node.isRequired,
    paddingAll: PropTypes.string,
};

export default PageDefault;
