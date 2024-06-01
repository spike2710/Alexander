import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../Assets/assets'
import { Context } from '../../context/context'

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <>
   <div className="main">
    <div className="nav">
      <p>Alexander</p>
      <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-container">
      {!showResult?
      <>
      <div className="greet">
        <p>Hello, User</p>
        <p>How are you today?</p>
      </div>
      </>:
      <div className='result'>
        <div className="result-title">
          <img src={assets.user_icon} alt="" />
          <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          {loading?
          <div className="loader">
            <hr />
            <hr />
            <hr />
          </div>
          :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }
          </div>
      </div>
      }

      <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Ask me anything' />
              <img src={assets.gallery_icon} alt="" />
              <img onClick={()=> onSent()} src={assets.send_icon} alt="" />
            </div>
            <p className="bottom-info">
              Alexander may provide incorrect info about people, so double check the responses.
            </p>
      </div>
      </div>
    </div>
  </>
  )
}

export default Main