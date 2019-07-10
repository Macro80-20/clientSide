
import { Link } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import { Icon, Button, Modal, Checkbox, Form } from 'semantic-ui-react'
import { signup } from '../services/api'

export default class SignUpModal extends Component {
  state = { open: false }

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
        <Form>
          <Form.Field>
            <label>name</label>
            <input placeholder='name' />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input placeholder='username' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='password' />
          </Form.Field>
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