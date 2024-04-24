import {  useState } from "react"
const TodoForm = ({setTodos, todos}) => {
    const [inputText, setInputText] = useState("")
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTasks,setFilteredTasks] = useState(todos);



    const addNewItem = (event) => {
        event.preventDefault();
        if(inputText.trim() !== "") { // Check if the input text is not empty or whitespace-only
            const todoItem = {
                text: inputText.trim(), // Trim the input text to remove leading and trailing spaces
                id: new Date().getTime()
            }
            setTodos((old) => [...old, todoItem]);
            setFilteredTasks((old) => [...old, todoItem]);
            setInputText("");
        }
    }
    
    

    const handleSearch = (e) => {
        const query = e.target.value;

        if(query === ''){
            setTodos([...filteredTasks])
            return
        }
        const filtered = todos.filter(task => 
            task.text.toLowerCase().includes(query.toLowerCase())
        )
        
        if(searchQuery.length > query.length){
            const filtered = filteredTasks.filter(task => 
                task.text.toLowerCase().includes(query.toLowerCase())
            )    
           return setTodos([...filtered])
        }

        setTodos([...filtered])
    }
    return(
    <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <form onSubmit={addNewItem}>
            <input className="input_1" placeholder="Write here..." type="text" name="item" onChange={(ev) => setInputText(ev.target.value)} value={inputText}/>
            <button  className="btn" type="submit" >Add Item</button>
        </form>
        <div>
            <input className="input_1"
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(ev) => { 
                    setSearchQuery(ev.target.value)
                    handleSearch(ev)
                    }}/>
                <button className="btn">Search</button>
        </div>
    </div>
    )
}
export default TodoForm





