import { useState,useContext } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import * as Yup from 'yup';
import { Field, Formik } from "formik";
import { FaRegEye } from "react-icons/fa";

function LoginForm(){
    const history = useHistory();
    const { setAuthData } = useContext(authContext);
    const [error, setError] = useState('')
    const [isPassword, setIsPassword] = useState(true)

    const shema = Yup.object().shape({
        email: Yup.string()
            .email("Correo electrónico inválido")
            .required("Campo requerido"),
        password: Yup.string()
            .required('Campo requerido'),
    });

    return(
        <Formik
            initialValues={{email:'' ,password: ''}}
            validationSchema={shema}
            onSubmit={(values, { setSubmitting,setFieldValue }) => { 
                console.log(values)
            }}
        >{({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
        }) => (
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center mt-4">
                    <Col xs="12" md="6">
                        <Form.Group controlId="formBasicEmail">                    
                            <Field 
                                type="email" 
                                name="email"
                                className={`${errors.email && 'error'} form-control input-login`}
                                placeholder="Correo electrónico"
                            />   
                            { errors.email && <div className="invalid-feedback d-block">{errors.email}</div> }
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs="12" md="6">
                        <Form.Group>    
                        <InputGroup className="mb-3">
                            <Field 
                                type={isPassword ? 'password' : 'text'} 
                                name="password"
                                className={`${errors.password && 'error'} form-control input-login border-right-0`}
                                placeholder="Contraseña"
                            />   
                            <InputGroup.Append>
                                <InputGroup.Text 
                                    className={`${errors.password && 'error'} bg-transparent cursor-pointer`} 
                                    onClick={e=>setIsPassword(!isPassword)}><FaRegEye /> </InputGroup.Text>
                            </InputGroup.Append>
                            { errors.password && <div className="invalid-feedback d-block">{errors.password}</div> }
                        </InputGroup>                            
                        
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs="12" md="3">
                        <Button className="btn-login" block type="submit">Continuar</Button>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-center"><Button type="buttom" variant="link" className="text-primary2">He olvidado mi contraseña</Button></Col>
                </Row>
            </Form>
        )}
        </Formik>
    )
}

export default LoginForm