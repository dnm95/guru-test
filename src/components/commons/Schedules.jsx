import React from "react";
import { arrayOf, shape } from "prop-types";
import dayjs from "dayjs";
import { getDay } from "helpers";

const getFormattedSchedule = (start, end) => {
  if (start === "0000" && end  === "0000") return "24 horas";
  return `${dayjs(start).format("HH")} - ${dayjs(end).format("HH")}`;
}

const Schedules = ({ schedules }) => (
  <div>
    <p>Horarios:</p>
    <ul>
      {schedules && schedules.map((schedule) => (
        <li key={schedule.day}>
          {`${getDay(schedule.day)} : ${getFormattedSchedule(schedule.start, schedule.end)}`}
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
