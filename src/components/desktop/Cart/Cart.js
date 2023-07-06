import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BooknowButton from "../Booknow.js/Booknow";
import styles from ".//Cart.module.scss";

function Cart() {
  const location = useLocation();
  const scheduleData = location.state?.data;

  const [listedData, setListeddata] = useState(scheduleData);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cartHeading}>Cart</div>

        <table className={styles.scheduleTable}>
          <tr className={styles.headRow}>
            <th>Data</th>
            <th>Time</th>
            <th>Availability</th>
            <th></th>
          </tr>
        </table>

        <div className={styles.scroll} style={{ height: "300px" }}>
          <table className={styles.scheduleTable}>
            {listedData?.map((data, i) => (
              <tr>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.availability} seats available</td>
                <td>
                  <BooknowButton
                    availabilityInfo="Cancel"
                    scheduleData={data}
                    setListeddata={setListeddata}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
