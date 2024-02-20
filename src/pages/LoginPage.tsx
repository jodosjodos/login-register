import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
  display: block;
  background-color: #cbbbf7;
  margin-bottom: 4px;
  color: #21004c;
  &:hover {
    background-color: #6713a0;
    color: white;
  }
`;

const CustomInput = styled(Form.Control)`
  background-color: #cbcacb; /* Custom background color */
  color: black; /* Text color */
  &::placeholder {
    /* Custom placeholder color */
    color: #6f6e72;
  }
`;
const FormComponent = styled(Form)`
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const ParentOne = styled(Col)`
  background-color: white;
  border: 5px solid #ccc;
  border-radius: 5px;
  padding: 4px;
`;
export function LoginPage() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signUp");
  };
  return (
    <div style={{ height: "100%" }}>
      <div className="d-flex justify-content-center  align-item-center">
        <h1>Login</h1>
      </div>
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
                <LoginButton2>Let's go</LoginButton2>
              </FormComponent>
            </Col>
          </Row>
        </StyledContainer>
      </div>
    </div>
  );
}
