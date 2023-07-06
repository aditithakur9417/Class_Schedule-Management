import React, { useState } from "react";
import styles from "./Booknow.module.scss";

var total_weeks = [];
for (var i = 0; i <= 53; i++) {
  total_weeks.push(0);
}

function BooknowButton(props) {
  function seatsAllotment(data) {
    const [day, month, number, year] = data.split(" ");
    var date = new Date(`${number} ${month} ${year}`);

    var currentDate = date;
    var startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    var weekNumber = Math.ceil(days / 7);

    if (total_weeks[weekNumber] < 3) {
      total_weeks[weekNumber]++;
      availabilityHandler();
    } else alert("You can only book maximum 3 classes per week");
  }

  function addItems() {
    seatsAllotment(props.scheduleData.date);
    props.setBookedItems((items) => {
      return [...items, { ...props.scheduleData }];
    });
  }

  function availabilityHandler() {
    var sortedElement;
    var countPropogation = 0;
    props.test((items, i) => {
      if (countPropogation < 1) {
        const index = items.indexOf(props.scheduleData);
        const newArray = items.map(function (element, i) {
          if (i == index) {
            element.availability = element.availability - 1;
            countPropogation = countPropogation + 1;
            sortedElement = element;
            return element;
          } else return element;
        });
        return [...items];
      }

      return [...items];
    });
  }

  function removeItems() {
    props.setListeddata((items) => {

      const index = items.indexOf(props.scheduleData);
      const newArray = items.filter(function (element, i) {
        return i !== index;
      });

      return newArray;
    });
  }

  if (props.availabilityInfo == "Full") {
    return (
      <>
        <button
          className={styles.booknowButton}
          style={{ backgroundColor: "#D93600" }}
          onClick={() => alert("This schedule is full")}
        >
          {props.availabilityInfo}
        </button>
      </>
    );
  } else if (props.availabilityInfo == "Book Now") {
    return (
      <button
        className={styles.booknowButton}
        style={{ backgroundColor: "#FF8000" }}
        onClick={addItems}
      >
        {props.availabilityInfo}
      </button>
    );
  } else {
    return (
      <button
        className={styles.booknowButton}
        style={{ backgroundColor: "#FF8000" }}
        onClick={removeItems}
      >
        {props.availabilityInfo}
      </button>
    );
  }
  {
    /* <button className={styles.booknowButton} style={{backgroundColor: props.availabilityInfo=="Full"?"#D93600":"#FF8000"}}>{props.availabilityInfo}</button>
        {props.test} */
  }
}

export default BooknowButton;
