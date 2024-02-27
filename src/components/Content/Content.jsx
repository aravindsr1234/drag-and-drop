import InProgress from "../InProgress/InProgress";
import Todo from "../Todo/Todo";
import Done from "../Done/Done";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTasks } from "../../features/createTask/CreateTaskSlice";

const Content = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.task.task);
    const tasks = useSelector((state) => state.task.getTasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch, data]);

    return (
        <>
            <div class="kanban-board">
                <Todo tasks={tasks} />
                <InProgress tasks={tasks} />
                <Done tasks={tasks} />
            </div>
        </>
    )
}

export default Content;