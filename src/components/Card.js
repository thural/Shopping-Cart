import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    border: 'black solid 1px',
    borderRadius: '1rem',
    padding: '1rem',
    backgroundColor: 'white',
    display: 'grid',
    justifyItems: 'center',
    gridTemplateRows: '4fr 1fr 1fr',
    '& img':{
      maxHeight: '8rem',
      maxWidth: '8rem',
      borderRadius: '1rem',
      margin: 'auto',
    },
    '& .image':{
      minWidth: '8rem',
      minHeight: '8rem',
      display: 'flex',
      marginBottom: '1rem',
    },
    '& .title': {
      width: '100%',
      margin: '0px',
      paddingTop: '1rem',
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
      fontSize: '1rem',
      margin: '0px'
    },
    '& p': {
      display: 'inline-block',
      marginRight: '1rem'
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