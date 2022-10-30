import React from 'react';
import * as Styled from './eye-style'

type EyeIconProps={
    isEyeOpen: boolean;
    setIsEyeOpen: (value: boolean) => void
}

export default function EyeIcon({isEyeOpen, setIsEyeOpen}: EyeIconProps){

    function handleOpenEye(){
        setIsEyeOpen(!isEyeOpen)
    }
    return(
        <>
        <Styled.StyledSpan
        onClick={()=>handleOpenEye()}
        > {isEyeOpen ?(<Styled.StyledOpenEye/>) : (<Styled.StyledClosedEyeIcon/>)}
        </Styled.StyledSpan>
        </>    
    )
}