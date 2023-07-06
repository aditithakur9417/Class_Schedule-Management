import React, { useState, useEffect, createContext } from 'react'
import { ScheduleData } from '../../../data/ScheduleData'
import Header from '../Header/Header'
import Cart from '../Cart/Cart'
import BooknowButton from '../Booknow.js/Booknow'
import { Link } from "react-router-dom";
import RandomSeats from "../RandomSeats"
import styles from "./ClassSchedule.module.scss"

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

const shuffledArray = shuffleArray(ScheduleData)
function ClassSchedule() {

    // const [shuffledArray, setShuffledArray] = useState(shuffleArray())
    const [seatsAvailable, setSeatsAvailable] = useState(0)
    const [bookedItems, setBookedItems] = useState([])
    const [data, setData] = useState(ScheduleData)

    useEffect(() => {
        var counter = 0
        async function getData() {
            shuffledArray?.map((data, i) => {
                if (data.availability > 0) {
                    counter = counter + data.availability
                }
            })
        }
        getData().then(
            setSeatsAvailable(counter)
        )
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Header selectedData={bookedItems} setBookedItems={setBookedItems} />
                <div className={styles.heading}>
                    <div className={styles.leftAligned}>Class Schedule</div>
                    <div className={styles.rightAligned}>Free Seats left: <span className={styles.seatsNumber}>{seatsAvailable}</span></div>
                </div>
                <table className={styles.scheduleTable}>
                    <tr className={styles.headRow}>
                        <th>
                            Data
                        </th>
                        <th>
                            Time
                        </th>
                        <th>
                            Availability
                        </th>
                        <th>

                        </th>
                    </tr>
                </table>
                <div className={styles.scroll}>

                    <table className={styles.scheduleTable}>
                        {/* <tr className={styles.headRow}>
                        <th>
                            Data
                        </th>
                        <th>
                            Time
                        </th>
                        <th>
                            Availability
                        </th>
                        <th>

                        </th>
                    </tr> */}
                        <tbody>
                            {data?.map((data, i) => (
                                <>

                                    <tr>
                                        <td>{data.date}</td>
                                        <td>{data.time}</td>
                                        {data.availability == 0 ?
                                            <td>0 seats available</td> :
                                            <td>{data.availability} seats available</td>
                                        }

                                        {data.availability == 0 ?
                                            <>
                                                {/* {
                                setSeatsAvailable(seatsAvailable+1)
                            } */}
                                                <td><BooknowButton availabilityInfo="Full" /></td>
                                            </>

                                            :
                                            <>
                                                <td>
                                                    <BooknowButton availabilityInfo="Book Now" test={setData} setBookedItems={setBookedItems} scheduleData={data} /></td>
                                            </>
                                        }

                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <SelectedData.Provider value={"bookedItems"}>
                <Cart />
            </SelectedData.Provider> */}
        </>
    )
}

export default ClassSchedule
