import React from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){

    const [isClicked,setClicked] = React.useState(false);

    const [inputText,setInputText] = React.useState(
        {
            title:"",
            content:""
        }
    )

    function handleOnChange(event){
        const {name,value} = event.target;
        setInputText(prevValue=>{
            return {
                ...prevValue,
                [name] : value
            }
        })
    }

    function handleOnSubmit(event){
        props.handleChange(inputText);
        event.preventDefault();
        setInputText({
            title:"",
            content:""
        });
    }

    return(
        <div>
            <form className="create-note">
                {isClicked && <input name="title" placeholder="Title" onChange={handleOnChange} value={inputText.title}/>}
                <textarea onClick={()=>setClicked(true)} name="content" placeholder="Take a Note..." onChange={handleOnChange} value={inputText.content} rows={isClicked ? 3 : 1}></textarea>
                <Zoom in={isClicked}>
                    <Fab onClick={handleOnSubmit}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea

