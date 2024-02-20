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
  &:hover {
    background-color: #cbbbf7;
    color: #21004c;
  }
`;

const SignUpButton = styled(FullWidthButton)`
  background-color: #76c1b5;
  &:hover {
    background-color: #087865;
    color: white;
  }
`;

const LoginButton2 = styled(FullWidthButton)`
  background-color: #cbbbf7;
  margin-bottom: 4px;
  color: #21004c;
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
  padding: 12px;
`;
const Header = styled(CardHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function LoginPage() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signUp");
  };
  return (
    <div style={{ height: "100%", padding: "0px 4px" }}>
      <Header>
        <h1>Login</h1>
      </Header>
      <div style={{ height: "80%" }}>
        <StyledContainer className="" style={{ justifyContent: "flex-start" }}>
          <Row
            className="justify-content-center"
            style={{ height: "fit-content" }}
          >
            <Col
              md={6}
              style={{
                gap: "10px",
                border: "2px solid black",
                borderRadius: "12px",
                outline: "medium double #ccc",
                padding: "12px",
                height: "100%",
              }}
            >
              <Row>
                <Col xs={6}>
                  <LoginButton>Login</LoginButton>
                </Col>
                <Col xs={6}>
                  <SignUpButton onClick={handleSignUp}>Sign up</SignUpButton>
                </Col>
              </Row>
              <FormComponent className="d-flex flex-column">
                <Form.Group className="mb-4">
                  <Form.Label>Username</Form.Label>
                  <CustomInput type="text" placeholder="value"></CustomInput>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <CustomInput type="email" placeholder="value"></CustomInput>
                </Form.Group>
                <LoginButton2>Let&apos;s go</LoginButton2>
              </FormComponent>
            </Col>
          </Row>
        </StyledContainer>
      </div>
    </div>
  );
}
