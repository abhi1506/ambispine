import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css';

export  function Button({name, redirect, buttonClass }) {
  return (
    <>
      <Link  to={`${redirect}`}  className={`about-get-value ${buttonClass}`} data-aos="fade-up">
                 {name}
              </Link>
    </>
  )
}
