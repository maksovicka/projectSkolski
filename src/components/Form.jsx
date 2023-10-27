import {useState} from 'react';


const Form = ({newInputHandler}) => {

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    } 
    const valueHandler = (e) => {
        setValue(e.target.value);
    } 
    const formHandler = (e) => {
        e.preventDefault();

        const newInput = {
            id: Math.random(),
            description: description,
            value: value,
        };

        console.log(newInput);

        newInputHandler(newInput);

        setDescription('');
        setValue('');
    }

    return (
        <>
            <form onSubmit={formHandler}>
            <select>
                <option value='plus'>+</option>
                <option value='minus'>-</option>
            </select>
                <input type='text'
                       onChange={descriptionHandler}
                       value={description}  />
                <input type='number'
                       onChange={valueHandler}
                       value={value} />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}
export default Form;