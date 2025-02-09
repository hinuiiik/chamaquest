"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Cal() {
    const dateTest = new Date(2025, 1, 21); // Test date
    const [value, onChange] = useState<Value>(new Date());

    function onDayClick(value: Date) {
        console.log(value.toISOString());
    }

    function formatDate(date: Date, locale: string) {
        if (date.toISOString() == dateTest.toISOString()) {
            return String("");
        }
        return String(date.getDate());
    }

    return (
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
