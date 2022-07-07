import React, { useState } from 'react';

export const Option = (props) => {
    const { options } = props;
    const [selected, setSelected] = useState();
    return (
        <div className="options">
            {options.map((option, index) => {
                return (
                    <div key={index}
                        className={selected === index ? 'active' : ''}
                        onClick={() => { setSelected(index) }}
                    >
                        {option}
                    </div>
                );
            })}
        </div >
    )
}
