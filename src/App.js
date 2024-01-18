import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";
function App() {
  const [listTodo, setListTodo] = useState([]);
  const [inputText, setInputText] = useState("");
  const [index, setIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [check, setCheck] = useState(false);
  const updateCheck = () => {
    setCheck(true);
  };
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      addList(inputText);
      setInputText("");
    }
  };
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onAddClick = () => {
    addList(inputText);
    setInputText("");
  };
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
    console.log(listTodo);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  const editListItem = (i, value) => {
    console.log("Ëdit Clicked", value, i);
    setInputText(value);
    setIsEdit(true);
    setIndex(i);
  };
  const update = (i) => {
    console.log(index + "New value " + inputText);
    let newArray = listTodo;
    newArray[index] = inputText;
    setListTodo([...newArray]);
    setInputText("");
    setIsEdit(false);
  };

  // const [editText,seteditText]=useState(['']);
  // let editListItem = (inputText)=>{
  //   // seteditText([...editText,inputText]);
  //   const editItem = listTodo.find((i)=> i.key === key);
  //   seteditText([editText.listTodo]);
  // }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput
          addList={addList}
          onChange={onChange}
          value={inputText}
          onClick={handleEnterPress}
          onAddClick={onAddClick}
          isEdit={isEdit}
          update={update}
        />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
              editListItem={editListItem}
              updateChecked={() => updateCheck}
              checked={check}
              setCheck={setCheck}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
