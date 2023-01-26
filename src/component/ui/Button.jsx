import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;
    // props로 받은 title을 버튼에 표시하고, 
    // onClick은 StyledButton의 onClick에 넣어 줌으로써 클릭 이벤트를 상위 컴포넌트에서 받을 수 있도록 함
    return (
        <StyledButton onClick={onClick}>
            {title || "button"}
        </StyledButton>
    )
}

export default Button;