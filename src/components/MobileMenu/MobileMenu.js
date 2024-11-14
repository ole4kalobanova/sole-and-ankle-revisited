/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <OverlayWrapper
      isOpen={isOpen}
      onDismiss={onDismiss}
      aria-label='Mobile modal menu'
    >
      <DialogContentWrapper>
        <DialogActions>
          <UnstyledButton onClick={onDismiss}>
            <Icon id='close' />
            <VisuallyHidden>
              Close
            </VisuallyHidden>
          </UnstyledButton>
        </DialogActions>
        <LinksWrapper>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </LinksWrapper>
        <DialogContentFooter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </DialogContentFooter>
      </DialogContentWrapper>
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled(DialogOverlay)`
  background: hsl(0deg 0% 0% / 0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`

const DialogContentWrapper = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  justify-content: space-between;
  background: white;
  position: relative;
`;

const DialogActions = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  padding: 26px 32px 16px 32px;
`;

const LinksWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 22px;
`
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const DialogContentFooter = styled.footer`
  display:flex;
  flex-direction: column;
  padding: 32px;
  gap: 14px;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:hover {
    color: ${COLORS.gray[900]};
  }
`;

export default MobileMenu;
