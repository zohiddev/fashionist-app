import styled from "styled-components"

export const Company = styled.a`
    border-radius: 10px;
    background-color: #dfe9ff;
    padding: 12px;
    display: inline-flex;
`

export const CompanyImage = styled.div`
    position: relative;
    width: 30px;
    height: 30px;

    svg {
        flex-shrink: 0;
    }
`
export const CompanyText = styled.div`
    font-size: 12px;
    line-height: 130%;
    color: #1c1917;
    margin-left: 12px;
    max-width: 170px;
`
