// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 80%;
  margin: auto;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-size: 30px;
`

export const UserInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  line-height: 2;
  background-color: #ffffff;
  padding: 20px;
`

export const UserInputTitle = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  font-family: 'Roboto';
`

export const UserInputDesc = styled.textarea`
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  font-family: 'Roboto';
`

export const CustomAddButton = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  background-color: #4c63b6;
  border-radius: 8px;
`

export const CommentListContainer = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
`

export const NoListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoListImg = styled.img`
  height: 100px;
`

export const NoListHeading = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  color: #d8d8d8;
`

export const NoListPara = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #d8d8d8;
`
