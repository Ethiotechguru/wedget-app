import React from 'react'

const Text = (props) => {
    const style = {
        color: props.color,
    }
    return (
        <div style={style}>
            this text is {props.color}
        </div>
    )
}

export default Text
