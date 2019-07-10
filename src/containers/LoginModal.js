
import { Link } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import { Card, Grid, Icon, Button, Modal, Image, Header, Checkbox, Form, Message, Segment } from 'semantic-ui-react'
import { login } from '../services/api'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignupForm'
// 
const LoginModal = props => (
  <Modal trigger={<Button>List car</Button>}>
   <Header as='h2' color='teal' textAlign='center'>
       Log-in to your account
      </Header>
    <Modal.Content>
      <LoginForm signin={props.signin}/>
    </Modal.Content>
    <Modal.Actions>
      <SignUpForm/>
    </Modal.Actions>
  </Modal>
)
export default LoginModal

// class LoginForm extends Component {
  //   state = { 
  //     email: '', 
  //     password: '', 
  //     }
  
  //   handleChange = (event) => this.setState({ [event.target.name]: event.target.value });
  
  //   handleSubmit = () => {
  //     //making our get request to the server sending these details, in that route we authenticate and issue a token 
  //     login(this.state.email, this.state.password)
  //     .then(data => {
  //       if (data.error) {
  //         alert(data.error)
  //       } else {
  //         //if we pass authentication in this route , then we invoke our signIn method
  //         this.props.signin(data)
  //       }
  //     })
  //     // const { name, email } = this.state
  //     // this.setState({ submittedName: name, submittedEmail: email })
  //   }
  
  //   render(){
  //     const { email, password ,submittedEmail, submittedPassword } = this.state
  //   return(
  //   <>
  //       <Form onSubmit={this.handleSubmit} size='large'>
  //         <Segment stacked>
  //           <Form.Input 
  //           fluid icon='user' 
  //           iconPosition='left' 
  //           placeholder='E-mail address'
  //           name="email"
  //           value= {email}
  //           onChange={this.handleChange}
  //           />
  //           <Form.Input
  //             fluid
  //             icon='lock'
  //             iconPosition='left'
  //             placeholder='Password'
  //             type='password'
  //             name="password"
  //             value= {password}
  //           onChange={this.handleChange}
  //           />
  
  //           <Button color='teal' fluid size='large' className="ui button">
  //             <Link to='/listings'>Login</Link>
  //             </Button>
  //         </Segment>
  //       </Form>
  //       </>
  // )
  //   }
  // }

// class NestedSignUpModal extends Component {
  //   state = { open: false }
  
  //   open = () => this.setState({ open: true })
  //   close = () => this.setState({ open: false })
  
  //   render() {
  //     const { open } = this.state
  
  //     return (
  //       <Modal
  //         open={open}
  //         onOpen={this.open}
  //         onClose={this.close}
  //         size='small'
  //         trigger={
  //           <Button primary icon>
  //             Sign Up <Icon name='right chevron' />
  //           </Button>
  //         }
  //       >
  //         <Modal.Header>Register</Modal.Header>
  //         <Modal.Content>
  //         <Form>
  //           <Form.Field>
  //             <label>name</label>
  //             <input placeholder='name' />
  //           </Form.Field>
  //           <Form.Field>
  //             <label>Username</label>
  //             <input placeholder='username' />
  //           </Form.Field>
  //           <Form.Field>
  //             <label>Email</label>
  //             <input placeholder='email' />
  //           </Form.Field>
  //           <Form.Field>
  //             <label>Password</label>
  //             <input placeholder='password' />
  //           </Form.Field>
  //           <Form.Field>
  //             <Checkbox label='I agree to the Terms and Conditions' />
  //           </Form.Field>
  //           <Button color="teal" type='submit'>Submit</Button>
  //         </Form>
  //         </Modal.Content>
  //         <Modal.Actions>
  //           <Button primary icon='check' content='All Done' onClick={this.close} />
  //         </Modal.Actions>
  //       </Modal>
  //     )
  //   }
  // }