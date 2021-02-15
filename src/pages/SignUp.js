import { Col, Container, Image, Row } from "react-bootstrap"
import LoginForm from "../components/LoginForm"
import bgLogin from  '../img/bgLogin.png'
import logo from '../img/logo.svg'
import lBienvenidos from '../img/lBienvenidos.png'

function SignUp(){
    return (
        <div className="main">
            <Container fluid className="p-md-0">
                <Row>
                    <Col md="6" className="d-none d-md-block">
                        <Image src={bgLogin} fluid/>
                        <Image src={lBienvenidos} fluid className="letter-bienvenidos"/>
                    </Col>
                    <Col md="6" xs="12">
                        <Row className="text-center mt-4">
                            <Col xs="12" md="12">
                                <Image src={logo} fluid/>
                            </Col>
                            <Col xs="12" md="12">
                                <h2 className="text-primary1 font-weight-bold-600 mt-5 mb-2">¡Hola!</h2>
                                <label className="text-primary1 font-1-2rem">Por favor accesa con tu cuenta</label>
                            </Col>                            
                        </Row>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </div>        
    )
}

export default SignUp