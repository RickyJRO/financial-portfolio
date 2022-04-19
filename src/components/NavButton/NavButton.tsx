import React, { ReactElement } from 'react'
import './index.css'

interface IProps{
    icon:ReactElement;
    label:string;
}

export default function NavButton(props:IProps) {
    const {icon,label} = props;
  return (
    <div className='navButton'>{icon}<p className='navButtonLabel'>{label}</p></div>
  )
}
