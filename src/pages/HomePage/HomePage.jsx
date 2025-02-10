import css from './HomePage.module.css'
import { Link, Outlet } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className={css.homePage}>
            <h1>Campers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
            <Link to='/campers'>
                View now
            </Link>
            <Outlet/>

        </div>
    )
}