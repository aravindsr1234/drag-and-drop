const InProgress = ({tasks}) => {
    const data = tasks?.filter(data => data.task == "in-progress");
    return (
        <div class="column in-progress" data-status="in-progress">
            <h2>In Progress</h2>
            {data.map((data, index) => (
                <>
                    {data ? <div class="tasks" data-status="in-progress" key={index}>
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

export default InProgress;