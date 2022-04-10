import Link from 'next/link'

import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import Button from '../ui/Button';
import styles from './EventItem.module.css'

function EventItem(props) {


    const { title, image, date, location, id} = props;

    const humanRedableDate = new Date(date).toLocaleDateString('en-IN',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(',','\n')

    const exploreLink = `/events/${id}`

  return (
    <div>
        <li className={styles.item}>
            <img src={'/' + image} alt="title" />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{humanRedableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}> 
                    <span>Explore Event</span> 
                    <span className={styles.icon}>
                        <ArrowRightIcon />
                    </span>
                    </Button>
                </div>
            </div>
        </li>
    </div>
  )
}

export default EventItem