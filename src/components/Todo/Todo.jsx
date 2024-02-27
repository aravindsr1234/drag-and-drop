const Todo = ({ tasks }) => {
    const data = tasks?.filter(data => data.task == "todo");
    const editData = (id) => {
        console.log(id);
    };
    return (
        <div class="column todo" data-status="todo">
            <h2>To Do</h2>
            {data.map((data, index) => (
                <>
                    {data ? <div class="tasks" data-status="todo" key={index}>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                        <button onClick={() => editData(data._id)}>Edit</button>
                        <button>Delete</button>
                    </div> : ""}

                </>
            ))}
        </div>
    )
}

export default Todo;