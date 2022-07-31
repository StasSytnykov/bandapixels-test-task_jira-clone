import { ToDoList } from './ToDoList'
import { InProgressList } from './InProgressList'
import { DoneList } from './DoneList'
import style from '../../style/index.module.scss'

export const Board: React.FC = () => {
  return (
    <div className={style.boardContainer}>
      <ToDoList />
      <InProgressList />
      <DoneList />
    </div>
  )
}
