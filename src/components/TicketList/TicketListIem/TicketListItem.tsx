import style from './TicketListItem.module.scss'

export const TicketListItem: React.FC = () => (
  <li className={style.item}>
    <span>VS</span>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages
    </p>
    <p>To do</p>
  </li>
)
