const Done = ({ tasks }) => {
    const data = tasks?.filter(data => data.task == "done");
    return (
        <div class="column done" data-status="done">
            <h2>Done</h2>
            {data.map((data, index) => (
                <>
                    {data ? <div class="tasks" data-status="done" key={index}>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div> : ""}

                </>
            ))}
        </div>
    )
};

export default Done;