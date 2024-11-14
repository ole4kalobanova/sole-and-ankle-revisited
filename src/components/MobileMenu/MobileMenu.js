/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS } from '../../constants';
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
        <CloseButton onClick={onDismiss}>
            <Icon id='close' color={'var(--color-gray-900)'}/>
            <VisuallyHidden>
              Close modal menu
            </VisuallyHidden>
        </CloseButton>
        <Filler />
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
  background: var(--color-backdrop);
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
  background: var(--color-white);
  position: relative;
  padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;  /* We made this like a bigger tap target for phone/tablet users */
`;

const LinksWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const DialogContentFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  flex: 1;
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;

  &:hover {
    color: var(--color-gray-900);
  }
`;

const Filler = styled.div`
  flex: 1;
`;

export default MobileMenu;
