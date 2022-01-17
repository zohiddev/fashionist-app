import styled from "styled-components";
import { getTheme } from "../../utils/utils";

const StyledAppLayout = styled.div`
    box-shadow: ${getTheme("shadows.regular")};
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export default StyledAppLayout;
