import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/yXFYb16/registration.jpg" )
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  height: 50%;
  padding: 35px;
  background-color: white;
  ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
  font-size: 39px;
  font-weight: 900;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 35%;
  margin: 10px 10px;
  padding: 10px;
  font-size: 17px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  margin: 10px 10px;
  font-size: 20px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color:red;  
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <br />
        <br />
        <Title>SIGN IN</Title>
        <br />
        <Form>
          <Input placeholder="username"
           onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}><b>LOGIN</b></Button>
          <br />
          {error &&<Error>Something went wrong....</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
