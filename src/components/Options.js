import React from 'react'

import { Option } from './Option'

const Options = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
        <div className='container'>
            <Option options={options} />
        </div>
    );

}

export default Options;


