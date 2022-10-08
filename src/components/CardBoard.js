import React, {useContext} from "react";
import { createUseStyles } from "react-jss";
import StoreContext from "./Store";
import Card from "./Card";

const useStyles = createUseStyles({
  cardboard: {
    gap: '24px',
    width: '100%',
    margin: 'auto',
    display: 'grid',
    gridTemplateRows: 'repeat( auto-fit, minmax(12rem, 1fr) )',
    gridTemplateColumns: 'repeat( auto-fit, minmax(12rem, 1fr) )'
  }
});

const CardBoard = ({ handleCart }) => {
  const cards = useContext(StoreContext);
  const classes = useStyles();

  return (
    <div className={classes.cardboard}>
      {
        cards.map((card) => (<Card key={card.id} card={card} handleCart={handleCart} />))
      }
    </div>
  )
}

export default CardBoard