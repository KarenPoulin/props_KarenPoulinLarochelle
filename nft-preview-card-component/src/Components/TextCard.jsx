import React from 'react'
import './TextCard.css'

const TextCard = (props) => {
  const classes = ["text"]

  if (props.className) classes.push(props.className);
  
  switch (props.className) {
    case "title":
      return <h4 className={classes.join(" ")}>{props.children}</h4>;
    case "price":
      return <p className={classes.join(" ")}>{props.children}</p>
    case "days":
      return <p className={classes.join(" ")}>{props.children}</p>
    case "creator":
      return <p className={classes.join(" ")}>{props.children}</p>
    case "span":
      return <span className={classes.join(" ")}>{props.children}</span>
    default:
      return <p className={classes.join(" ")}>{props.children}</p>;
  }
}

export default TextCard