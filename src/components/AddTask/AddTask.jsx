import { useState } from "react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

const AddTask = () => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <button type="button" onClick={() => setModal(true)}>AddTask</button>
            <AddTaskModal modal={modal} setModal={setModal}/>
        </>
    )
};

export default AddTask;