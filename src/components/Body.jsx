import React from 'react'
import slack from "../assets/slackicon.svg"
import icon from "../assets/Icon.svg"
import Button from './Buttons'


function Main() {
  return (
    <div>
      <Button link={'https://training.zuri.team/'} id={'btn_zuri'} linkName={'Zuri Team'} />
      <Button link={'https://books.zuri.team/'} id={'books'} linkName={'Books'} />
      <Button link={'https://books.zuri.team/'} id={'python_books'} linkName={'Python Books'} />
      <Button link={'https://background.zuri.team/'} id={'pitch'} linkName={'Background Check for Coders'} />
      <Button link={'https://books.zuri.team/design-rules'} id={'book_design'} linkName={'Design Books'} />  
      <Button link={'./Contactpage'} id={'contact'} linkName={'Contact Me'} />
      <div className='slackicons'>
        <img src={slack} alt="" className="slack-icon" />
        <img src={icon} alt="" />
      </div>
    </div>
    )
  }
  
  export default Main
//   <a id='twitter' >Twitter Link</a>
//  <a id='btn_zuri' href='https://training.zuri.team/'> Zuri Team </a>
//   <a id='books' href='Zuri Books'> Zuri Books</a>
//   <a id='book_python' href='https://books.zuri.team/'> Python Books</a>
//   <a id='pitch' href='https://background.zuri.team/'> Background Check for Coders</a>
//   <a id='book_design' href='https://books.zuri.team/design-rules'> Design Books</a>
// <div className='slackicons'>
//   <img src={slack} alt="" />
//   <img src={icon} alt="" />
// </div>