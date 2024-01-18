import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
function Todolist(props) {
  // const [editText,setEditText] = useState('');
  // const handleEdit = (editText,e)=>{
  //   if(e.keyCode===13){
  //         props.editListItem(editText)
  //         setEditText("")
  //   }
  // }
  return (
    <li className="list-item">
      <CheckBoxOutlineBlankIcon
       ></CheckBoxOutlineBlankIcon>
       {/*   <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      /> */}
      {props.item}
      <span className='icons'>
        <EditIcon
        onClick={() => props.editListItem(props.index, props.item)}
       ></EditIcon>
  
        <DeleteIcon
          onClick={e => {
            props.deleteItem(props.index)
          }}></DeleteIcon>
      </span>
    </li>
  )
        }

export default Todolist;