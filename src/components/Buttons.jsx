import React from 'react'

function Button({link, linkName, id}) {
  return (
    <div className="container-links">
      <a id={id='btn_submit'} href={link} className="link">{linkName}</a>
    </div>
  )
}

export default Button