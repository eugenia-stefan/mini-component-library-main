import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const Wrapper = styled.div`
    position: relative;
    width: max-content;
  `;

  const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    width: var(--size);
    height: var(--size);
    pointer-events: none;
  `;
  const SelectElem = styled.select`
    height: 43px;
    flex-shrink: 0;
    border-radius: 8px;
    border-width: 0px;
    background: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    appearance: none;
  `;
  return (
    <Wrapper>
      <SelectElem value={value} onChange={onChange}>
        {children}
      </SelectElem>
      <IconWrapper style={{ "--size": 24 + "px" }}>
        <Icon id="search" strokeWidth={2} size={24} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Select;
