import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../Assets/assets'
import { Context } from '../../context/context'

const Sidebar = () => {

  const[extend,setExtend] = useState(false)
  const{onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

  const loadPrompt = async(prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
        <div className="top">
          <img onClick={()=>setExtend(prev=>!prev)} src={assets.menu_icon} alt="" className="expand" />
            <div onClick={()=>newChat()} className="new-chat">
              <img src={assets.plus_icon} alt="" className="plus" />
              {extend?<p>New Chat</p>:null}
            </div>
        {extend?<div className="previous">
          <p className="prev-title">Previous Prompts</p>
          {prevPrompts.map((item,index)=>{
            return(
              <div onClick={()=>loadPrompt(item)} className="prev-entry">
            <img src={assets.message_icon} alt="" />
            <p>{item.slice(0,18)}</p>
          </div>
            )
          } )}
        </div>:null}
        </div>.
        <div className="bottom">
        <div className="bottom-item prev-entry">
            <img src={assets.switchmode_icon} alt="" />
            {extend?<p>Switch Mode</p>:null}
          </div>
          <div className="bottom-item prev-entry">
            <img src={assets.help_icon} alt="" />
            {extend?<p>Help</p>:null}
          </div>
          <div className="bottom-item prev-entry">
            <img src={assets.settings_icon} alt="" />
            {extend?<p>Settings</p>:null}
          </div>
        </div>
    </div>
  )
}

export default Sidebar