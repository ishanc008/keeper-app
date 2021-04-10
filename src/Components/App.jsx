import React , {useEffect} from "react"
import axios from "axios"
import Heading from "./Heading"
import CreateArea from "./CreateArea"
import Content from "./Content"
import Footer from "./Footer"
import { SettingsInputAntennaTwoTone } from "@material-ui/icons"

function App(){
    const [notes,setNotes] = React.useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/notes/")
        .then (res => {
            setNotes(res.data);
            //console.log(notes);
        })
        .catch(err => {
            console.log(err);
        })
    },[notes.length])

    function handleChange(newNote){
        setNotes(prevValue=>[...prevValue,newNote]);
    }

    function deleteItem(id)
    {
        axios.delete('http://localhost:5000/notes/'+id)
            .then(response => { console.log("deleted")})
        setNotes(prevValue=>
            prevValue.filter(item=>(item._id!==id))
        )
    }

    return (
        <div>
            <Heading />
            <CreateArea handleChange={handleChange} />
            {notes.map((item)=>(
                    <Content key={item._id} title={item.title} content={item.content} id={item._id} deleteItem={deleteItem} />
                ))}
            <Footer />
        </div>
    )
}

export default App;