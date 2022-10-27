import React, { useState } from 'react';
import * as Styled from './eye-style'


export default function EyeIcon(){

    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);

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