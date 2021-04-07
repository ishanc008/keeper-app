import React from "react"
import Heading from "./Heading"
import CreateArea from "./CreateArea"
import Content from "./Content"
import Footer from "./Footer"

function App(){
    const [notes,setNotes] = React.useState([]);

    function handleOnClick(newItem)
    {
        console.log(newItem);
        setNotes(prevValue=>[...prevValue,newItem])
    }

    function deleteItem(id)
    {
        setNotes(prevValue=>{
            return(
                prevValue.filter((item,i)=>{
                    return i!==id;
                })
            )
        })
    }

    return (
        <div>
            <Heading />
            <CreateArea handleChange={handleOnClick}/>
            {notes.map((item,i)=>{
                return (
                    <Content id={i} title={item.title} content={item.content} deleteFunction={deleteItem}/>
                )
            })}
            <Footer></Footer>
        </div>
    )
}

export default App;