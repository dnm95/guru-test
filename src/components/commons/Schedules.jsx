import React from "react";
import { arrayOf, shape } from "prop-types";
import { getDay } from "helpers";

const getFormattedSchedule = (start, end) => {
  if (start === "0000" && end  === "0000") return "24 horas";
  
  return `${start.substring(0,2)}:${start.substring(2,4)} - ${end.substring(0,2)}:${end.substring(2,4)}`;
}

const Schedules = ({ schedules }) => (
  <div>
    <p>Horarios:</p>
    <ul>
      {schedules && schedules.map((schedule) => (
        <li key={schedule.day}>
          {`${getDay(schedule.day)} : ${getFormattedSchedule(schedule.start, schedule.end)}.`}
        </li>
      ))}
    </ul>
  </div>
);

Schedules.defaultProps = {
  schedules: [],
};

Schedules.propTypes = {
  schedules: arrayOf(shape()),
};

export default Schedules;
