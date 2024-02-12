import {ListItem, TitleHeading, Description} from './styledComponents'

// Write your code here
const NoteItem = props => {
  const {commentDetails} = props
  const {title, desc} = commentDetails
  return (
    <ListItem>
      <TitleHeading>{title}</TitleHeading>
      <Description>{desc}</Description>
    </ListItem>
  )
}

export default NoteItem
