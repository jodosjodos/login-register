import { Container, Row, Col, Form, Button, CardHeader } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 10px;
`;

const FullWidthButton = styled(Button)`
  width: 100%;
  height: 100%;
  border: none;
`;

const LoginButton = styled(FullWidthButton)`
  background-color: #6713a0;
  border-radius: 6px 10px 0px 0px;
  border: 2px solid black;
  &:hover,
  &:active {
    background-color: #cbbbf7;
    color: #21004c;
    border: 2px solid black;
  }
`;

const SignUpButton = styled(FullWidthButton)`
  background-color: #76c1b5;
  border-radius: 10px 6px 0px 0px;
  border: 2px solid black;

  &:hover {
    background-color: #087865;
    color: white;
    border: 2px solid black;
  }
`;

const LoginButton2 = styled(Button)`
  background-color: #cbbbf7;
  margin-bottom: 4px;
  border: none;
  align-self: center;
  justify-self: center;
  color: #21004c;
  height: auto;
  font-weight: bold;

  width: 40%;
  &:hover {
    background-color: #6713a0;
    color: white;
  }
`;

const CustomInput = styled(Form.Control)`
  background-color: #cbcacb;
  color: black;
  &::placeholder {
    color: #6f6e72;
  }
  &:focus {
    background-color: #cbcacb;
    border: none;
    outline: none;
  }
`;
const FormComponent = styled(Form)`
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled(CardHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Labeled = styled(Form.Label)`
  font-weight: bold;
`;
//  login page
export function LoginPage() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signUp");
  };
  return (
    <div
      style={{ height: "100%", padding: "0px 4px", background: "#0000001A" }}
    >
      <Header>
        <h1>Login</h1>
      </Header>
      <div style={{ height: "80%" }}>
        <StyledContainer style={{ justifyContent: "flex-start" }}>
          <Row
            className="justify-content-center"
            style={{ height: "fit-content" }}
          >
            <Col
              md={6}
              style={{
                gap: "10px",
                border: "2px solid white",
                borderTop: "none",
                borderRadius: "12px",
                padding: "4px",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <div style={{ width: "100%", display: "flex" }}>
                <LoginButton>Login</LoginButton>
                <SignUpButton onClick={handleSignUp}>Sign up</SignUpButton>
              </div>
              <div
                style={{
                  borderRight: "2px solid black ",
                  borderBottom: "2px solid black ",
                  borderLeft: "2px solid black ",
                  borderRadius: "0px 0px 6px 5px",
                  margin: "0px 4px",
                }}
              >
                <FormComponent className="d-flex flex-column">
                  <Form.Group className="mb-4">
                    <Labeled>Username</Labeled>
                    <CustomInput type="text" placeholder="value"></CustomInput>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Labeled>Password</Labeled>
                    <CustomInput type="email" placeholder="value"></CustomInput>
                  </Form.Group>
                  <LoginButton2>Let&apos;s go</LoginButton2>
                </FormComponent>
              </div>
            </Col>
          </Row>
        </StyledContainer>
      </div>
    </div>
  );
}
