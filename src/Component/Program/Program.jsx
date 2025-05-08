import React from 'react'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'
import './Program.css'

const Program = () => {
  return (
    <div className='programs container'>
        <div className='program '>
            <img src={program1} alt="program1" />
            <div className="caption">
                <img src={programIcon1} alt="program_icon1" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program2} alt="program2" />
            <div className="caption">
                <img src={programIcon2} alt="program_icon2" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program3} alt="program3" />
            <div className="caption">
                <img src={programIcon3} alt="program_icon3" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Program