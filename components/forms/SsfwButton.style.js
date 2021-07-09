import styled from 'styled-components';

export const SsfwButtonStyled = styled.button`
    width: auto;
    min-height: ${(props) => props.theme.btnHeight};
    padding: ${(props) => props.theme.btnPaddingVertical}
        ${(props) => props.theme.btnPaddingHorizontal}
        ${(props) => props.theme.btnPaddingVertical};
    vertical-align: middle;
    display: inline-block;
    transition: ${(props) => props.theme.transition} background-color,
        ${(props) => props.theme.transition} color;
    text-align: center;
    line-height: 27px;

    border: 0;
    border-radius: ${(props) => props.theme.btnBorderRadius};
    color: ${(props) => props.theme.btnColor};
    background-color: ${(props) => props.theme.btnBg};
    cursor: pointer;
    text-decoration: none;
    font-size: ${(props) => props.theme.btnFontSize};
    font-weight: 700;
    outline: 0;
    text-transform: uppercase;

    &:hover {
        color: ${(props) => props.theme.btnColorHover};
        background-color: ${(props) => props.theme.btnBgHover};
        text-decoration: none;
    }

    &.btn--primary {
        color: ${(props) => props.theme.btnPrimaryColor};
        background-color: ${(props) => props.theme.btnPrimaryBg};

        &:hover {
            color: ${(props) => props.theme.btnPrimaryColorHover};
            background-color: ${(props) => props.theme.btnPrimaryBgHover};
        }
    }

    &.btn--secondary {
        color: ${(props) => props.theme.btnSecondaryColor};
        background-color: ${(props) => props.theme.btnSecondaryBg};

        &:hover {
            color: ${(props) => props.theme.btnSecondaryColorHover};
            background-color: ${(props) => props.theme.btnSecondaryBgHover};
        }
    }
`;
