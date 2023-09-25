/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  large: {
    height: 16,
    padding: 4,
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unknown size passed into the Progress Bar:${size}`);
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--padding": styles.padding + "px" }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar
        style={{
          "--width": value + "%",
          "--height": styles.height + "px",
        }}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
  border-radius: 4px;
  overflow: hidden;
  padding: var(--padding);
`;
const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
