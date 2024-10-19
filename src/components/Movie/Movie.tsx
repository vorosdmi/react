import { useLoaderData } from "react-router-dom"
import { movieDetailsProps } from "../../interfaces/movieDetails.props";
import styles from './Movie.module.css';

export function Movie() {
    const data = useLoaderData() as movieDetailsProps;
    return(
        <div className={styles.info}>{data.name}</div>
    )
}