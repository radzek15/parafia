import React, {useState, useRef} from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  // MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {UserAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function SignIn() {
	const emailRef = useRef()
	const passwordRef = useRef()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {signIn} = UserAuth();
  // const {signInWithGoogle} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  // const handleGoogleAuth = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   try {
  //     await signInWithGoogle()
  //     navigate('/')
  //   } catch (e) {
  //     setError(e.message)
  //     console.log(e.message)
  //   }
  // };

	return (

		<MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <form onSubmit={handleSubmit}>
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                <MDBInput onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" ref={emailRef}/>
                <MDBInput onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" ref={passwordRef}/>

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                <MDBBtn size='lg'>
                  Login
                </MDBBtn>
                {/*<hr className="my-4" />*/}
                {/*<MDBBtn onClick={handleGoogleAuth} className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>*/}
                {/*  <MDBIcon fab icon="google" className="mx-2"/>*/}
                {/*  Sign in with google*/}
                {/*</MDBBtn>*/}
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
	);
}