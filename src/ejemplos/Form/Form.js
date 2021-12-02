import React from 'react'

export const Form = () => {

    const handleInputChange = (e) => {
        console.log(e.target.value);
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="form-control m-2"
                    type="text"
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}
