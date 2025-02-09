"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

<<<<<<< HEAD
export default function Cal() {
    const dateArray = [new Date(2025,1,21).toISOString(), new Date(2025,1,22).toISOString(), new Date(2025,1,23).toISOString()];
    const [value, onChange] = useState<Value>(new Date());

    function onDayClick(value : Date) {
=======
export default function Cal({ id }: { id: string }) {
    const dateTest = new Date(2025, 1, 21); // Test date
    const [value, onChange] = useState<Value>(new Date());

    function onDayClick(value: Date) {
>>>>>>> 7ca36e0d18f292019fe39abf8132dbd829e0a57e
        console.log(value.toISOString());
    }

    function formatDate(date: Date, locale: string) {
        if (dateArray.includes(date.toISOString())) {
            return String("");
        }
        return String(date.getDate());
    }

    return (
<<<<<<< HEAD
      <Calendar 
      className = "justify-center"
      tileContent={({date,view})=>view=='month'&&dateArray.includes(date.toISOString())?<p className="bg-sky-500">{date.getDate()}</p>:null} 
      formatDay={(locale, date)=>formatDate(date, 'd')} 
      onClickDay={(value)=>onDayClick(value)} 
      onChange={onChange} 
      value={value} />
  );
}
=======
        <div className="calendar-wrapper">
            <Calendar
                className="box-border custom-calendar"
                tileContent={({ date, view }) =>
                    view === 'month' && date.toISOString() === dateTest.toISOString() ? (
                        <p className="bg-sky-500">{date.getDate()}</p>
                    ) : null
                }
                formatDay={(locale, date) => formatDate(date, 'd')}
                onClickDay={(value) => onDayClick(value)}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
>>>>>>> 7ca36e0d18f292019fe39abf8132dbd829e0a57e
