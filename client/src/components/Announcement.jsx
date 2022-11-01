import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40px;
  background-color: #87e1e1;
  color: #1c1a1a94;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  ${mobile({ padding: "15px"})}
`;

const Announcement = () => {
    return <Container>Super Deal! Free Shipping on Orders Over ₹ 1000/- </Container>;
};

export default Announcement;
