import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  AppContainer,
  Heading,
  UserInputTitle,
  UserInputContainer,
  UserInputDesc,
  CommentListContainer,
  CustomAddButton,
  NoListContainer,
  NoListImg,
  NoListHeading,
  NoListPara,
} from './styledComponents'
import NoteItem from '../NoteItem'

// Write your code here

const Notes = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [commentsList, setComment] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeDesc = event => {
    setDesc(event.target.value)
  }
  const onSubmitForm = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      title,
      desc,
    }
    setComment(prevList => [...prevList, newComment])
    setTitle('')
    setDesc('')
  }

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <UserInputContainer onSubmit={onSubmitForm}>
        <UserInputTitle
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <UserInputDesc
          row="5"
          column="10"
          placeholder="Take a Note..."
          value={desc}
          onChange={onChangeDesc}
        />
        <CustomAddButton type="submit">Add</CustomAddButton>
      </UserInputContainer>
      {commentsList.length === 0 ? (
        <NoListContainer>
          <NoListImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoListHeading>No Notes Yet</NoListHeading>
          <NoListPara>Notes you add will appear here</NoListPara>
        </NoListContainer>
      ) : (
        <CommentListContainer>
          {commentsList.map(eachItem => (
            <NoteItem key={eachItem.id} commentDetails={eachItem} />
          ))}
        </CommentListContainer>
      )}
    </AppContainer>
  )
}

export default Notes
