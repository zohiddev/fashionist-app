import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import Box from "./Box";

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: row;

  ${flexbox}
  ${layout}
  ${color}
  ${flexbox}
  ${space}
  ${border}
`;

export default FlexBox;
