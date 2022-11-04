import styled, { css } from "styled-components";
import { THEME } from "../../../constants";
import CloseAlertButton from '../../../assets/svg/closeButton-icon'

type AlertContainerProps={
    success?: boolean;
    notification?: boolean;
    error?: boolean;
    warning?: boolean;
    info?: boolean;
    visible?: any;
}

export const StyledAlertContainer = styled.div<AlertContainerProps>`
    display: flex;
    height: 58px;
    width: 410px;
    align-items: center;
    padding: 0px 5px 0px 5px;
    ${({success}) => success && StyledSuccessContainer};
    ${({notification}) => notification && StyledNotificationContainer};
    ${({error}) => error && StyledErrorContainer};
    ${({warning}) => warning && StyledWarningContainer};
    ${({info}) => info && StyledInfoContainer};
    
    ${({visible})=>{
        return css`
        display: ${visible ? 'flex' : 'none'};
        `;
    }};
        img{
            margin-right: 5px;
        }
`;

export const StyledSuccessContainer = css`
    background-color: ${THEME.light.colors.success1};
    color: ${THEME.light.colors.success2};
    border: 1px solid ${THEME.light.colors.success2};

    button{
        color: ${THEME.light.colors.success2};
        border: 1px solid ${THEME.light.colors.success2};
    }
`;

export const StyledNotificationContainer = css`
    background-color: ${THEME.light.colors.notification1};
    color: ${THEME.light.colors.notification2};
    border: 1px solid ${THEME.light.colors.notification2};

    button{
        color: ${THEME.light.colors.notification2};
        border: 1px solid ${THEME.light.colors.notification2};
    }
`;

export const StyledErrorContainer = css`
    background-color: ${THEME.light.colors.error1};
    color: ${THEME.light.colors.error2};
    border: 1px solid ${THEME.light.colors.error2};

    button{
        color: ${THEME.light.colors.error2};
        border: 1px solid ${THEME.light.colors.error2};
    }
`;

export const StyledWarningContainer = css`
    background-color: ${THEME.light.colors.alert1};
    color: ${THEME.light.colors.alert2};
    border: 1px solid ${THEME.light.colors.alert2};

    button{
        color: ${THEME.light.colors.alert2};
        border: 1px solid ${THEME.light.colors.alert2};
    }
`;

export const StyledInfoContainer = css`
    background-color: ${THEME.light.colors.info1};
    color: ${THEME.light.colors.info2};
    border: 1px solid ${THEME.light.colors.info2};

    button{
        color: ${THEME.light.colors.info2};
        border: 1px solid ${THEME.light.colors.info2};
    }
`;