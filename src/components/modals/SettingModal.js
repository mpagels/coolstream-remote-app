import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

function SettingModal({ onClick, onchange, value }) {
  return ReactDom.createPortal(
    <SettingsWrapper>
      <Modal>
        <Form onSubmit={onClick}>
          <ErrorTitle id="ip" name="ip">
            IP der Coolstream eingeben!
          </ErrorTitle>
          <Input
            type="text"
            id="ip"
            value={value}
            onChange={onchange}
            name="ip"
            placeholder="192.168.1.20"
            required
          />
          <Action>Speichern & zur App</Action>
        </Form>
      </Modal>
    </SettingsWrapper>,
    document.getElementById('portal')
  )
}

export default SettingModal

const SettingsWrapper = styled.div`
  background-color: var(--backgroundColor);
  bottom: 0;
  height: 100vh;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
`

const Modal = styled.section`
  background-color: var(--backgroundColor);
  display: flex;
  flex-direction: column;
  height: 18em;
  justify-content: space-between;
  left: 50%;
  margin-left: -10em;
  margin-top: -9em;
  padding: 0;
  position: fixed;
  top: 50%;
  width: 20em;
`
const Form = styled.form`
  background-color: var(--backgroundColor);
  display: flex;
  flex-direction: column;
  height: 18em;
  justify-content: space-between;
  left: 50%;
  margin-left: -10em;
  margin-top: -9em;
  padding: 0;
  position: fixed;
  top: 50%;
  width: 20em;
`

const ErrorTitle = styled.label`
  color: white;
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
`
const Input = styled.input`
  padding: 20px;
  background-color: var(--backgroundColor);
  color: white;
  border: none;
  text-align: center;
  font-size: 200%;
  &:focus {
    outline-width: 0;
  }
`

const Action = styled.button`
  all: unset;
  background-color: var(--backgroundColor);
  border-radius: 10px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  position: relative;
`
