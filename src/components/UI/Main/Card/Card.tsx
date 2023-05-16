import { pictureType } from "types/pictures.type";
import style from "./Card.module.scss";
import { FC } from "react";

interface ICard {
	picture: pictureType;
}

const Card: FC<ICard> = ({ picture }) => {
	return (
		<figure className={style.card}>
			<img className={style.card__img} src={picture.imageUrl} alt="img" />
			<figcaption className={style.card__caption}>
				<h2 className={style.card__caption_head}>{picture.name}</h2>
				<p className={style.card__caprion_text}>
					Author: <span>{picture.author.name}</span>
				</p>
				<p className={style.card__caprion_text}>
					Created: <span>{picture.created}</span>
				</p>
				<p className={style.card__caprion_text}>
					Location: <span>{picture.location.location}</span>
				</p>
			</figcaption>
		</figure>
	);
};
export default Card;
