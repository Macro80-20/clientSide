
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
      <SignUpForm signin={props.signin}/>
    </Modal.Actions>
  </Modal>
)
export default LoginModal
