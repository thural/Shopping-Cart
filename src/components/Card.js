import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    width:'clamp(128px,9vmax,512px)',
    border: 'black solid 1px',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    '& img':{
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '16px'
    },
    '& .title': {
      borderTop: '1px solid black',
      width: '100%',
    },
    '& h3': {
      textAlign:'center',
      fontSize: 'clamp(12px, 3vmin, 5vmin)',
      margin: '0px'
    }
  }
});

const Card = ({card, handleCard}) => {
  const classes = useStyles()
  console.log(card);
  const [id, title, price, image] = card;
  return (
    <div id={id} className={classes.wrapper} onClick={(e) => {handleCard(title)}}>
      <img src={image}></img>
      <div className="title"><h3>{title}</h3></div>
      <p>${price}</p>
      <button>add to cart</button>
    </div>
  )
}

export default Card