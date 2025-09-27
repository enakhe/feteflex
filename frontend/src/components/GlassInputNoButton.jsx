import PropTypes from 'prop-types'

const GlassInputNoButton = ({ placeholder, value, onChange, error, type, name }) => {
    return (
        <div>
            <div className="mt-2 rounded-md shadow-sm">
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    className="block w-full bg-[#e7e4ee] rounded-md py-3 pl-5 pr-10 placeholder:text-[#2A2346] text-gray-950 sm:text-sm sm:leading-6 focus:ring-0 focus:outline-none"
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {
                    error === true ? <span className="flex items-center font-medium tracking-wide text-red-900 text-xs mt-1 ml-1">
                        Invalid {placeholder} field !
                    </span> : ""
                }
            </div>
        </div>
    )
}

GlassInputNoButton.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.any
}

export default GlassInputNoButton