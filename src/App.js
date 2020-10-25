import {
  CloseBtn,
  FavoriteBtn,
  MuteBtn,
  NavUpBtn,
  NavLeftBtn,
  NavRigthBtn,
  NavOKBtn,
  MenuBtn,
  NavDownBtn,
  RadioBtn,
  RewindBtn,
  StopBtn,
  PauseBtn,
  PlayBtn,
  ForwardBtn,
  NavPlayRoomBtn,
  NavLivingRoomBtn,
} from './assets/buttons'
import styled from 'styled-components'
import { useState } from 'react'

function App() {
  const [room, setRoom] = useState('daddelzimmer')
  return (
    <>
      <Title>{room.toUpperCase()}</Title>
      <TopButtons>
        <FavoriteBtn />
        <MuteBtn />
      </TopButtons>
      <MainButtonsContainer>
        <MainUp>
          <NavUpBtn />
        </MainUp>
        <MainMiddel>
          <NavLeftBtn />
          <NavOKBtn width={'80px'} height={'80px'} />
          <NavRigthBtn />
        </MainMiddel>
        <MainDown>
          <MenuBtn style={{ alignSelf: 'end' }} />
          <NavDownBtn height={'100px'} />
          <CloseBtn style={{ alignSelf: 'end' }} />
        </MainDown>
      </MainButtonsContainer>
      <RadioBtnContainer>
        <RadioBtn color="red" />
        <RadioBtn color="green" />
        <RadioBtn color="jellow" />
        <RadioBtn color="blue" />
      </RadioBtnContainer>
      <MediaControlContainer>
        <RewindBtn />
        <StopBtn />
        <PauseBtn />
        <PlayBtn />
        <ForwardBtn />
      </MediaControlContainer>
      <NavBar>
        <NavPlayRoomBtn onClick={() => handleRoomChange('daddelzimmer')} />
        <NavLivingRoomBtn onClick={() => handleRoomChange('wohnzimmer')} />
      </NavBar>
    </>
  )

  function handleRoomChange(newRoom) {
    room !== newRoom && setRoom(newRoom)
  }
}

export default App

const Title = styled.h1`
  text-align: center;
  margin: 0 0 20px 0;
`
const TopButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
const MainButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MainUp = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`
const MainMiddel = styled.div`
  display: flex;
  justify-content: center;
  height: 73px;
`

const MainDown = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8px;
`
const RadioBtnContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  & svg {
    fill: grey;
  }

  & svg:nth-of-type(1) {
    & circle {
      fill: red;
    }
  }
  & svg:nth-of-type(2) {
    & circle {
      fill: green;
    }
  }
  & svg:nth-of-type(3) {
    & circle {
      fill: yellow;
    }
  }
  & svg:nth-of-type(4) {
    & circle {
      fill: blue;
    }
  }
`

const MediaControlContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
`
