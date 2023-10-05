import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 30,
  },
  large: {
    fontSize: 22,
    iconSize: 24,
    borderThickness: 2,
    height: 45,
  },
};
const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;
const InputWrapper = styled.input`
  height: var(--height);
  padding-left: 25px;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-bottom: var(--border-thickness) solid black !important;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 0;
  bottom: 0;
  right: 10px;
  pointer-events: none;
`;
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];
  return (
    <Wrapper style={{ "--height": styles.height + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <InputWrapper
        placeholder="Search..."
        style={{
          "--height": styles.height / 16 + "rem",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize / 16 + "rem",
        }}
      ></InputWrapper>
    </Wrapper>
  );
};

export default IconInput;
