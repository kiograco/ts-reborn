import React from 'react'


export const Modal = () => {
    const [isModalVisible, setIsMoralVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setIsMoralVisible(true)}>Open</button>
            {isModalVisible ? <h1>Modal</h1> : null}
        </div>
    )
}
