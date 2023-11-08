import { useState, useEffect } from 'react'
import {useLocalStorage}  from '../useLocalStorage.jsx'

const Form1 = () => {
    const [name, setName] = useLocalStorage('name', '');
    

    return (
        <>
        <form>
            <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Full name'
            aria-label='fullname'/>
            <input type='submit' value='Submit'></input>
        </form>
        </>
    )
}

export default Form1;