import './todo-item.style.css'
import { IconPencil, IconTrash } from "../icons";

export function ToDoItem ({ item, onToggle, onDeleteToDo }) {
    const styles = ['todo-item']

    if (item.completed) {
        styles.push('completed')
    }

    return (
        <li className={styles.join(' ')}>
            <p className="date">
                {new Date(item.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <div className="details">
                <input onClick={() => onToggle(item)} type="checkbox" className="checkbox" defaultChecked={item.completed} />
                <p className="description">
                    {item.description}
                </p>
                <div className="actions">
                    <button onClick={() => onDeleteToDo(item)} className="btn">
                        <IconTrash  />
                    </button>
                    <button className="btn">
                        <IconPencil />
                    </button>
                </div>
            </div>
        </li>
    )
}