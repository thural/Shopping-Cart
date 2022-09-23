import React from "react";
import { createUseStyles } from "react-jss";
import Card from "./Card";

const useStyles = createUseStyles({
  wrapper: {
    width: '600px',
    margin:'0px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyContent: 'center',
    justifyItems: 'center',
    gap: '24px',
  }
});

const CardBoard = ({ cards, handleCard }) => {

  const classes = useStyles();
  
  return (
    <div className={classes.wrapper}>
      {
        cards.map((card) => (<Card key={card.id} card={card} handleCard={handleCard}/>))
      }
    </div>
  )
}

export default CardBoard