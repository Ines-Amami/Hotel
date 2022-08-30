import React, { useContext, useState } from 'react'
import { faCalendar} from '@fortawesome/free-regular-svg-icons'
import { faBed, faPerson} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom'
const Booking = ({type}) => {
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
})
const {dispatch} = useContext();
const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1,
        }
    })
}
const handleSearch = () => {
  dispatch({type: "NEW_SEARCH", payload: {destination, date, options}})
  navigate("/hotels", { state: { destination, date, options } });
}
  return (
    <div>  {   type !=="smallHeader" &&
    <>
        <div className="h-col">
            <h2>Make Your Reservation</h2>
        </div>
        <div className="h-col">
            <div className="search">
                <div className="search-item">
                    <FontAwesomeIcon icon={faBed} />
                    <input type="text" onChange={(e) => setDestination(e.target.value)} placeholder='Where are you going?' />
                </div>

                <div className="search-item">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                    
                    {openDate && (<DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date} className="date"
                        minDate={new Date()}
                        />)
                    }
                </div>

                <div className="search-item">
                    <FontAwesomeIcon icon={faPerson} />
                    <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                    {
                        openOptions && (
                            <div className="options">
                                <div className="optionsItem">
                                    <span>Adult</span>
                                    <div className="optionsButton">
                                        <button onClick={() => handleOption("adult", "decrement")} className='optionsBtn' disabled={options.adult <=1}>-</button>
                                        <span>{options.adult}</span>
                                        <button onClick={() => handleOption("adult", "increment")} className='optionsBtn'>+</button>
                                    </div>
                                </div>
                                <div className="optionsItem">
                                    <span>Children</span>
                                    <div className="optionsButton">
                                        <button onClick={() => handleOption("children", "decrement")} className='optionsBtn' disabled={options.children <=0}>-</button>
                                        <span>{options.children}</span>
                                        <button onClick={() => handleOption("children", "increment")} className='optionsBtn'>+</button>
                                    </div>
                                </div>
                                <div className="optionsItem">
                                    <span>Room</span>
                                    <div className="optionsButton">
                                        <button onClick={() => handleOption("room", "decrement")} className='optionsBtn' disabled={options.room <=1}>-</button>
                                        <span>{options.room}</span>
                                        <button onClick={() => handleOption("room", "increment")} className='optionsBtn'>+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="search-item">
                    <button className='btnSearch' onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    </>
}</div>
  )
}

export default Booking