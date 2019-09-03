
import { Link,  withRouter, } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import { Icon, Button, Modal, Checkbox, Form } from 'semantic-ui-react'
import { signup, login} from '../services/api'

 class SignUpModal extends Component {
  state = { 
    open: false,
    name: "",
    username: "",
    address: "",
    email: "",
    password: ""

  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });
  
  handleSubmit = () => {
    signup(this.state).then(data => login(this.state.email , this.state.password)).then( info => {
      // difference beween login and signin. is that login is api request which returns the users email and token.
      // signin is then invoked to manage state for session. with an email 
      this.props.signin(info)
      this.props.history.push('/cars')
    })

  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Sign Up <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header>Register</Modal.Header>
        <Modal.Content>
        <Form onSubmit = {this.handleSubmit}>
        <Form.Input
              placeholder='name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
        <Form.Input
              placeholder='username'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
        <Form.Input
              placeholder='address'
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
            />
        <Form.Input
              placeholder='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
        <Form.Input
              placeholder='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button color="teal" type='submit'>Submit</Button>
        </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default withRouter(SignUpModal)