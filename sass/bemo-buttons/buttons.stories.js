import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Button', module)
  .add('button', () => (
    <button className='button button--alert'>Button</button>
  ))
  .add('button--primary', () => (
    <div className='space--both-2'>
      <button className='button--primary'>Button</button>
      <button className='button--primary hover'>hover</button>
      <button className='button--primary focus'>focus</button>
      <button className='button--primary selected'>selected</button>
      <button className='button--primary disabled'>disabled</button>
    </div>
  ))
  .add('button--secondary', () => (
    <div className='space--both-2 d-flex flex-justify-between'>
      <button className='button--secondary'>Button</button>
      <button className='button--secondary hover'>hover</button>
      <button className='button--secondary focus'>focus</button>
      <button className='button--secondary selected'>selected</button>
      <button className='button--secondary disabled'>disabled</button>
    </div>
  ))
  .add('button--outline-primary', () => (
    <div className='space--both-2 d-flex flex-justify-between'>
      <button className='button--outline-primary'>Button</button>
      <button className='button--outline-primary hover'>hover</button>
      <button className='button--outline-primary focus'>focus</button>
      <button className='button--outline-primary selected'>selected</button>
      <button className='button--outline-primary disabled'>disabled</button>
    </div>
  ))
  .add('button--small', () => (
    <div className='space--both-2'>
      <a className="button--small button--primary mr-6" href="#url" role="button">Small link button</a>
      <button className="button--small button--outline-dark" type="button">Small button button</button>
    </div>
  ))
  .add('button--large', () => (
    <div className='space--both-2'>
      <a className="button--large button--orange mr-6" href="#url" role="button">Large link button</a>
      <button className="button--large button--outline-red" type="button">Large button button</button>
    </div>
  ))
  .add('button--link', () => (
    <div className='space--both-2 d-flex flex-justify-between'>
      <button className='btn-link'>Button</button>
    </div>
  ))
