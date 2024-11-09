import React from 'react'
import Card from './Card';

const Container = ({ x }) => {
    console.log(x);

    return (
        <div>
            {
                x?.map((y,i) => {
                    return <Card key={i} y={y}/>

                })
            }
        </div>
    )
}

export default Container