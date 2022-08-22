import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info, id }) => {

    const [opendata, setOpendata] = useState(localStorage.getItem(id))
    const [showInfo, setShowInfo] = useState(opendata ? true : false)


    useEffect(() => {
        if (showInfo) {
         //   console.log(id)
            localStorage.setItem(id, id)
        }
        else {
             localStorage.removeItem(id)
        }

    }, [showInfo])

    useEffect(() => {
        window.addEventListener("storage", onStorageUpdate);
        return () => {
            window.removeEventListener("storage", onStorageUpdate);
        };
    }, [])

    //  use local storage
    // useEffect(() => {
    //     localStorage.setItem("orders", JSON.stringify(orders))
    // }, [orders])

    useEffect(() => {
        window.addEventListener("storage", (e) => {
            const { key, newValue } = e
            console.log('key',key)
            console.log('id',id)
            if (key == id) {
                // setOrders(JSON.parse(newValue))
                setShowInfo(!showInfo)
        
            }

        });
    }, [])

    const onStorageUpdate = (e) => {
        const { key, newValue } = e;
        if (key === id) {
            //setOpendata(newValue);
        }
    };

    const handleClick = (id) => {
        setShowInfo(!showInfo)
    }


    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => handleClick(id)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p> {info} </p>}
        </article >

    )



}
export default Question;
