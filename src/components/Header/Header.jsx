import AddTask from '../AddTask/AddTask';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div class="header-left">Kanban Board</div>
            <div class="header-right">
                <AddTask />
            </div>
        </header>
    )
};

export default Header;