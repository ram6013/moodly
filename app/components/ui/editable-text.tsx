"use client";
import { useState } from "react";
import { Button } from "./button";
import { FaCheck, FaPenToSquare } from "react-icons/fa6";
import { Input } from "./input";
import { Textarea } from "./textarea";

export default function EditableText({
  text,
  textClassName,
  handleSubmit,
  editFieldType= "input",
}: {
  text: string;
  textClassName: string;
  handleSubmit: any;
  editFieldType?: "input" | "textarea" ;
}) {
  const [editing, setEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);

const [inputText,setInputText] = useState(text);

// lets make this submitable on enter press



  return (
    <>
    <form className="relative" onSubmit={(e)=>{
        e.preventDefault();
}}>

      {
        editing ? editFieldType === "input" ? 
         <Input  onChange={(e)=>setInputText(e.target.value)} type="text" value={inputText} />
          : <Textarea onChange={(e)=>setInputText(e.target.value)} value={inputText}></Textarea>
          
          : <h1 className={textClassName}>{currentText}</h1> 
      }
      <Button
        onClick={() =>{
            if (editing){
                //submit
                setCurrentText(inputText);
                setEditing(false);
            }else{
                setEditing(true);
            }
        }}
        className="absolute right-2 top-2"
      >
        {editing ? <FaCheck></FaCheck> : <FaPenToSquare></FaPenToSquare>}
      </Button>
    </form>
    </>
  );
}
