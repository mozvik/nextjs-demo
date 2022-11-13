import { useRouter } from 'next/router';
import classes from './ArticleCard.module.css';

const ArticleCard = (props: any) => {

  const router = useRouter();

  function showDetailsHandler() {
    router.push('/articles/' + props.id);
  }

  return (
    <li className={classes.card}>
      <div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.author} | {props.published}</address>
        </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div>ID: { props.id}</div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Elolvasom</button>
        </div>
      </div>
    </li>
  );
}

export default ArticleCard;