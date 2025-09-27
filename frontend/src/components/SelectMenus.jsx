import { people } from '../app/objects'
import PropTypes from 'prop-types'


const SelectMenus = ({ placeholder, value, onChange, error, name }) => {

    return (
        <>
            <select id={name} name={name} value={value} onChange={onChange} className="mt-2 block w-full bg-[#e7e4ee] rounded-md py-3 pl-5 pr-10 placeholder:text-[#2A2346] text-gray-950 sm:text-sm sm:leading-6 focus:ring-0 focus:outline-none">
                {
                    people.map((ppl, index) => (
                        <option className='text-dark' key={index} value={ppl.name}>{ppl.name}</option>
                    ))
                }
            </select>
            {
                error === true ? <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Invalid {placeholder} field !
                </span> : ""
            }
        </>

    )

}

SelectMenus.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.any
}

export default SelectMenus