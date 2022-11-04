import React, { useEffect, useState } from 'react';
import { StyledAlertContainer } from './alert-container-style';
import CloseAlertButton from '../../../assets/svg/closeButton-icon'
import Text from 'components/particles/text/text-index';
import infoSvg from '../../../assets/svg/info.svg';
import successSvg from '../../../assets/svg/success.svg';
import errorSvg from '../../../assets/svg/error.svg';
import notificationSvg from '../../../assets/svg/notification.svg';
import warningSvg from '../../../assets/svg/warning.svg';
import CloseAlert from 'components/particles/alert-button/alert-button-index';
import { useAuth } from "contexts/auth-context";

type AlertProps = {
    success?: boolean;
    notification?: boolean;
    error?: boolean;
    warning?: boolean;
    info?: boolean;
}

export default function AlertContainer({success, notification, error, warning, info }: AlertProps){
    const { visible, setVisible } = useAuth();

    const whichSvg = ()=>{
        if(success){
            return successSvg
        } if(info){
            return infoSvg
        } if(error){
            return errorSvg
        } if(notification){
            return notificationSvg
        } if(warning){
            return warningSvg
        };
    };

    const handleCloseAlert = () => {
        setVisible(!visible)
    }

    return(
    <>
        {visible && 
            <StyledAlertContainer
                success={success}
                notification={notification}
                error={error}
                warning={warning}
                info={info}
            >
            <img src={whichSvg()}/>
            <Text
                as='span'
            >
                Exemplo de alerta
            </Text>
            <CloseAlert
            onClick={handleCloseAlert}/>
        </StyledAlertContainer>
        }
    </>
        
    );
}