import InputOptionTheme from './InputOptionTheme'
import { themes } from '../../utils/themes'
import { RiArrowDropDownLine } from 'react-icons/ri'

const SelectTheme = () => {

  return (
    <>
      <div className='dropdown'>
        <div tabIndex={0} role='button' className='btn m-1'>
          Theme
          <RiArrowDropDownLine size={20} />
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 overflow-y-scroll h-96'>
          {themes().map((theme) => (
            <li key={theme} tabIndex={0} role='button'>
              <InputOptionTheme label={theme} value={theme} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SelectTheme
