import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    border: 'black solid 1px',
    borderRadius: '16px',
    padding: '16px',
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateRows: '4fr 1fr 1fr',
    '& img':{
      maxHeight: '256px',
      maxWidth: '256px',
      borderRadius: '16px',
      margin: 'auto',
    },
    '& .image':{
      minWidth: '256px',
      minHeight: '256px',
      display: 'flex',
      marginBottom: '16px',
    },
    '& .title': {
      width: '100%',
      margin: '0px',
      paddingTop: '16px',
      borderTop: '1px solid black',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: '2',
      lineClamp: '2',
      WebkitBoxOrient: 'vertical'
    },
    '& h3': {
      textAlign:'center',
      fontSize: '16px',
      margin: '0px'
    },
    '& p': {
      display: 'inline-block',
      marginRight: '16px'
    }
  },
});

const Card = ({card, handleCart}) => {
  const classes = useStyles()
  const {id, title, price, image} = card;
  return (
    <div id={id} className={classes.wrapper} onClick={() => handleCart({id, type:'increment', item:card})}>
      <div className="image">
        <img src={image}></img>
      </div>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="add">
        <p>${price}</p>
        <button>add to cart</button>
      </div>
    </div>
  )
}

export default Card