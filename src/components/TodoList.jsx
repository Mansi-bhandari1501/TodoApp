import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function Todolist(props) {
  // const [editText,setEditText] = useState('');
  // const handleEdit = (editText,e)=>{
  //   if(e.keyCode===13){
  //         props.editListItem(editText)
  //         setEditText("")
  //   }
  // }
  const handleChange = () => {
    props.setCheck(!props.checked)
  }
  return (
    <li className="list-item">
      <input type="checkbox" name="" id="" checked={props.checked} onChange={handleChange}/>
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
      <span style={{textDecoration:props.checked?"line-through":"none"}}>{props.item} </span>
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