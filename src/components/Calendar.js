import React from "react";
import { format, subMonths, startOfWeek, endOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay, parse, addMonths } from "date-fns";
import "./App.css";

export default function Calendar() {
    const currentState = {
      currentMonth: new Date(),
      selectedDate: new Date()
    };

    function renderHeader() {
      const dateFormat = "MMMM yyyy";

      return (
        <div className="header row flex-middle">
          <div className="col col-start">
            <div className="icon" onClick={prevMonth()}>
              chevron_left
            </div>
          </div>
          <div className="col col-center">
            <span>
              {format(addMonths(currentState.currentMonth, 1), dateFormat)}
            </span>
          </div>
          <div className="col col-end">
            <div className="icon" onClick={nextMonth()}>
              chevron_right
            </div>
          </div>
        </div>
      );
    }

    function renderDays() {
      const dateFormat = "EEEE";
      const days = [];

      let startDate = startOfWeek(currentState.currentMonth);

      for (let i = 0; i < 7; i++) {
        days.push(
          <div className="col col-center" key={i}>
            {format(addDays(startDate, i), dateFormat)}
          </div>
        );
      }

      return <div className="days row">{days}</div>
    }

    function renderCells() {
      const { currentMonth, selectedDate } = currentState;
      const monthStart = startOfMonth(currentMonth);
      const monthEnd = endOfMonth(monthStart);
      const startDate = startOfWeek(monthStart);
      const endDate = endOfWeek(monthEnd);

      const dateFormat = "d";
      const rows = [];

      let days = [];
      let day = startDate;
      let formattedDate = "";

      while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
          formattedDate = format(day, dateFormat);
          const cloneDay = day;
          days.push(
            <div className={`col cell ${!isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate) ? "selected" : ""}`}
              key={day}
              onClick={ () => onDateClick(parse(cloneDay))}
            >
              <span className="number">{formattedDate}</span>
              <span className="bg">{formattedDate}</span>
            </div>
          );
          day = addDays(day, 1);
        }
        rows.push(
          <div className="row" key={day}>
            {days}
          </div>
        );
        days = [];
      }

      return <div className="body">{rows}</div>
    }

    const onDateClick = day => {
      currentState.selectedDate = day;
    }

    const nextMonth = () => {
      currentState.currentMonth = addMonths(currentState.currentMonth, 1);
    }

    const prevMonth = () => {
      currentState.currentMonth = subMonths(currentState.currentMonth, 1);
    }

    return (
        <div className="calendar">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
};