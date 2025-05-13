import { Card, CardBody, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoBox from '@/components/LogoBox';
import PageMetaData from '@/components/PageTitle';
import ThirdPartyAuth from '@/components/ThirdPartyAuth';
import LoginForm from './components/LoginForm';
const SignIn2 = () => {
  return <>
      <PageMetaData title="Sign In" />

      <Col xl={5} className="mx-auto">
        <Card className="auth-card">
          <CardBody className="px-3 py-5">
            {/* <header className="container mx-auto max-w-6xl mb-4 text-center">
              <h1
                className="text-3xl lg:text-4xl fw-bold "
                style={{
                  color: '#aab8c4',
                  fontFamily: 'Roboto, sans-serif',
                  letterSpacing: '0.01em',
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Pitchmatter
              </h1>
            </header> */}
            <LogoBox textLogo={{
            height: 24,
            width: 110
          }} squareLogo={{
            className: 'me-2',
            width: 33,
            height: 28
          }} containerClassName="mx-auto mb-4 text-center auth-logo" />
            <h2 className="fw-bold text-center fs-18">Sign In</h2>
            <p className="text-muted text-center mt-1 mb-4">Enter your email address and password to access admin panel.</p>
            <div className="px-4">
              <LoginForm />
              <ThirdPartyAuth />
            </div>
          </CardBody>
        </Card>
        <p className="mb-0 text-center">
          New here?
          <Link to="/auth/sign-up-2" className="fw-bold ms-1">
            Sign Up
          </Link>
        </p>
      </Col>
    </>;
};
export default SignIn2;