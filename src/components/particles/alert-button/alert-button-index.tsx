import React from 'react';
import { StyledCloseAlertButton } from './alert-button-style';
import Text from 'components/particles/text/text-index';

type CloseAlertProps = {
    onClick?: () => void;
}

export default function CloseAlert({onClick}: CloseAlertProps){
    return (
        <StyledCloseAlertButton
        onClick={onClick}>x</StyledCloseAlertButton>
    );
}