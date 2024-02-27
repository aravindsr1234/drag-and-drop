import { useState } from "react";
import { useDispatch } from "react-redux";
import { tasks } from "../../features/createTask/CreateTaskSlice";

const AddTaskModal = ({ modal, setModal }) => {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        title: '',
        description: '',
        task: '',
        dueDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        dispatch(tasks(data));
        setModal(false)
    }

    return (
        <>
            {modal ? <div id="add-task-modal" class="modal">
                <div class="modal-content">
                    <span class="close-button" onClick={() => setModal(false)}>&times;</span>
                    <h2>Add New Task</h2>
                    <form id="add-task-form" onSubmit={handleSubmit}>
                        <input type="text" id="task-title" placeholder="Task Title" name="title" onChange={handleChange} required />
                        <textarea id="task-description" placeholder="Task Description" name="description" onChange={handleChange} required></textarea>
                        <select id="column-select" name="task" onChange={handleChange}>
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                        <input type="date" id="task-due-datae" name="dueDate" onChange={handleChange} />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div> : ""}
        </>
    )
}

export default AddTaskModal;