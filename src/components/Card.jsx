import React from "react"

import "./Card.scss"

function Card({ imgSrc, text, width, className, badge }) {
  return (
  <aside 
    className={"Card " + className} 
  >
    <img src={imgSrc} style={{ height: width, width }} alt="album cover" />
    <div className="text">
      {text}
    </div>
    {
      badge && (
        <div className="badge">{badge}</div>
      )
    }
  </aside>
  )
}

Card.defaultProps = {
  width: 80,
  className: ""
}

export default Card
