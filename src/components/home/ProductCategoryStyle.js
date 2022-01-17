import styled from "styled-components";
import { getTheme } from "../../utils/utils";
import Box from "../Box";

const StyledProductCategory = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  min-width: 240px;
  border-radius: 5px;

  &:hover {
    box-shadow: ${getTheme("shadows.4")};
  }

  .product-category-title {
    font-size: 17px;
    font-weight: 600;
    text-transform: capitalize;
    margin-left: 1.5rem;
  }

  .show-all {
    font-size: 16px;
    width: 100%;
    text-align: center;
  }
`;

export default StyledProductCategory;
