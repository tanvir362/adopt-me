import React, {useState} from 'react'

const useDropdown = (label, defaultState, options) => {
    const [stateValue, setStateValue] = useState(defaultState)
    
    const Dropdown = () => {
        const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`
        return(
            <label htmlFor={id}>
                {label}
                <select
                    id={id}
                    value={stateValue}
                    onChange={e => setStateValue(e.target.value)}
                    onBlur={e => setStateValue(e.target.value)}
                    disabled={options.length === 0}
                >
                    <option>All</option>
                    {
                        options.map(item => <option key={item} value={item} >{item}</option>)
                    }

                </select>

            </label>
        )
    }

    return [stateValue, Dropdown, setStateValue]
}

export default useDropdown