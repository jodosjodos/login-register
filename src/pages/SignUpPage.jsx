import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 10px 0 10px 0;
`;

const FullWidthButton = styled(Button)`
  width: 100%;
  height: 100%;
  border: none;
`;

const LoginButton = styled(FullWidthButton)`
  background-color: #cbbbf7;
  border-radius: 5px 5px 0px 0px;
  border-radius: 5px 5px 0px 0px;
  border-top: 2px solid black;
  border-left: 2px solid black;
  &:hover {
    background-color: #6713a0;
    color: white;
    border-top: 2px solid black;
    border-right: 2px solid black;
  }
`;

const SignUpButton = styled(FullWidthButton)`
  background-color: #087865;
  border-radius: 5px 5px 0px 0px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  &:hover {
    background-color: #76c1b5;
    color: white;
    border-top: 2px solid black;
    border-right: 2px solid black;
  }
`;

const LoginButton2 = styled(FullWidthButton)`
  display: block;
  background-color: #b2e5dd;
  margin-bottom: 4px;
  color: #00382f;
  
  font-weight: bold;
  &:hover {
    background-color: #087865;
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
  padding: 12px 40px;
`;
const Labeled = styled(Form.Label)`
  font-weight: bold;
`;
const CustomCol = styled(Col)`
  &:hover {
    cursor: pointer;
  }
`;
export function SignUpPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="h-full px-3">
      <div className="d-flex justify-content-center  align-item-center">
        <h1>Sign up</h1>
      </div>
      <StyledContainer>
        <Row className="justify-content-center" style={{ height: "100%" }}>
          <Col
            md={6}
            style={{
              gap: "16px",
              border: "2px solid #ccc",
              borderRadius: "12px",
              padding: "4px",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <div style={{ width: "100%", display: "flex"}}>
                <LoginButton onClick={handleLogin}>Login</LoginButton>
                <SignUpButton>Sign up</SignUpButton>
            </div>
            <div
                style={{
                  border: "2px solid black ",
                  borderRadius: "0px 0px 6px 5px",
                }}
              >
            <FormComponent className="d-flex flex-column">
              <Form.Group className="mb-4">
                <Labeled>Email address</Labeled>
                <CustomInput type="email" placeholder="value"></CustomInput>
              </Form.Group>

              <Form.Group className="mb-4">
                <Labeled>Username</Labeled>
                <CustomInput type="text" placeholder="value"></CustomInput>
              </Form.Group>
              <Form.Group className="mb-4">
                <Labeled>Password</Labeled>
                <CustomInput type="email" placeholder="value"></CustomInput>
              </Form.Group>
              <LoginButton2>Let&apos;s go</LoginButton2>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <hr style={{ width: "30%" }} />
                <p className="mb-1">or continue with </p>
                <hr style={{ width: "30%" }} />
              </div>
              <Row>
                <CustomCol style={{}}>
                  <img src="/google.png" alt="google image" />
                </CustomCol>
                <CustomCol>
                  <img src="/meta.png" alt="meta image" />
                </CustomCol>
                <CustomCol>
                  <img src="/github.png" alt="github image" />
                </CustomCol>
                <CustomCol>
                  <img src="/metamask.png" alt="metamask image" />
                </CustomCol>
                <CustomCol>
                  <img src="/unknown.png" alt="unknown image" />
                </CustomCol>
              </Row>
            </FormComponent>
            </div>
          </Col>
        </Row>
      </StyledContainer>
    </div>
  );
}
