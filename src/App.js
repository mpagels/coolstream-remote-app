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
  InfoBtn,
  PreviewBtn,
} from './assets/buttons'
import { urls } from './utils/urls'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

function App() {
  const [room, setRoom] = useState('')
  const url =
    room === 'wohnzimmer'
      ? process.env.REACT_APP_WOHNZIMMER
      : process.env.REACT_APP_DADDELZIMMER

  useEffect(() => {
    setRoom(localStorage.getItem('room') || 'wohnzimmer')
  }, [])

  useEffect(() => {
    localStorage.setItem('room', room)
  }, [room])
  return (
    <>
      <Title>{room.toUpperCase()}</Title>
      <TopButtons>
        <FavoriteBtn data-command="play" onClick={handleRemoteClick} />
        <MuteBtn data-command="mute" onClick={handleRemoteClick} />
      </TopButtons>
      <MainButtonsContainer>
        <MainUp>
          <PreviewBtn
            data-command="epg"
            onClick={handleRemoteClick}
            style={{ alignSelf: 'start' }}
          />
          <NavUpBtn
            data-command="up"
            onClick={handleRemoteClick}
            height={'100px'}
          />
          <InfoBtn
            data-command="info"
            onClick={handleRemoteClick}
            style={{ alignSelf: 'start' }}
          />
        </MainUp>
        <MainMiddel>
          <NavLeftBtn
            data-command="left"
            width="100px"
            onClick={handleRemoteClick}
          />
          <NavOKBtn
            data-command="ok"
            width={'80px'}
            height={'80px'}
            onClick={handleRemoteClick}
          />
          <NavRigthBtn
            data-command="right"
            width="100px"
            onClick={handleRemoteClick}
          />
        </MainMiddel>
        <MainDown>
          <MenuBtn
            data-command="menu"
            onClick={handleRemoteClick}
            style={{ alignSelf: 'flex-end' }}
          />
          <NavDownBtn
            data-command="down"
            onClick={handleRemoteClick}
            height={'100px'}
          />
          <CloseBtn
            data-command="exit"
            onClick={handleRemoteClick}
            style={{ alignSelf: 'flex-end' }}
          />
        </MainDown>
      </MainButtonsContainer>
      <RadioBtnContainer>
        <RadioBtn data-command="red" onClick={handleRemoteClick} />
        <RadioBtn data-command="green" onClick={handleRemoteClick} />
        <RadioBtn data-command="yellow" onClick={handleRemoteClick} />
        <RadioBtn data-command="blue" onClick={handleRemoteClick} />
      </RadioBtnContainer>
      <MediaControlContainer>
        <RewindBtn data-command="rewind" onClick={handleRemoteClick} />
        <StopBtn data-command="stop" onClick={handleRemoteClick} />
        <PauseBtn data-command="pause" onClick={handleRemoteClick} />
        <PlayBtn data-command="play" onClick={handleRemoteClick} />
        <ForwardBtn data-command="forward" onClick={handleRemoteClick} />
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

  function handleRemoteClick(event) {
    const command = urls[event.currentTarget.dataset.command]
    const commandURL = `http://${url}/control/rcem?KEY${command}`
    fetch(commandURL, { mode: 'no-cors' })
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
  margin-top: 20px;
`

const MainUp = styled.div`
  display: flex;
  justify-content: space-around;
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
