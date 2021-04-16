import React , {useEffect} from "react"
import axios from "axios"
import Heading from "./Heading"
import CreateArea from "./CreateArea"
import Content from "./Content"
import Footer from "./Footer"

function App(){
    const [notes,setNotes] = React.useState([]);
    const [alert,setAlert] = React.useState(true);

    useEffect(() => {
        if(!alert){
            return;
        }
        axios.get("https://keeperapp008.herokuapp.com/notes/")
            .then (res => {
                setNotes(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[alert])

    useEffect(() => {
        if(alert){
            setAlert(false);
        }
    },[alert])

    function handleChange(){
        setAlert(true);
    }

    function deleteItem(id)
    {
        axios.delete('https://keeperapp008.herokuapp.com/notes/'+id)
            .then(() => {
                setAlert(true); 
                console.log("deleted");
            })
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