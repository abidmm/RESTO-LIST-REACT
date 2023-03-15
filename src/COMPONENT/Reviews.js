import React from 'react'

export const Reviews = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                <div>
                    <h6>{item.name}</h6>
                    <div>
                        <p>{item.date}</p>
                        <p>{item.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
