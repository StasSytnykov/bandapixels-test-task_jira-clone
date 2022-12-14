import Avatar from 'react-avatar'
import PropTypes from 'prop-types'
import { useAppDispatch, useAppSelector } from 'redux/hooks/hook'
import { getTicketEntities, getUsersEntities } from 'redux/selectors/selectors'
import { changeStatus } from 'redux/tickets/ticketsSlice'
import style from '../Board.module.scss'

interface BoardListProps {
  ticketStatus: string
  marginReset: boolean
}

export const BoardList: React.FC<BoardListProps> = ({ ticketStatus, marginReset }) => {
  const tickets = useAppSelector(getTicketEntities)
  const users = useAppSelector(getUsersEntities)
  const dispatch = useAppDispatch()

  return (
    <ul className={`${style.boardList} ${marginReset ? style.marginReset : ''}`}>
      {tickets.map(
        (ticket) =>
          ticket.status === ticketStatus && (
            <li
              className={`${style.ticketListItem} ${style.boardListItem}`}
              onClick={() => dispatch(changeStatus(ticket.id))}
              key={ticket.id}
            >
              {users.map(
                (user) =>
                  user.id === ticket.userId && (
                    <Avatar key={ticket.id} name={user.name} round size='90' />
                  ),
              )}
              <p className={style.ticketText}>{ticket.title}</p>
            </li>
          ),
      )}
    </ul>
  )
}

BoardList.propTypes = {
  ticketStatus: PropTypes.string.isRequired,
  marginReset: PropTypes.bool.isRequired,
}
