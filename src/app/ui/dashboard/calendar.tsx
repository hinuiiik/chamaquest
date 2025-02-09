"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Cal() {
    const dateArray = [new Date(2025,1,21).toISOString(), new Date(2025,1,22).toISOString(), new Date(2025,1,23).toISOString()];
    const [value, onChange] = useState<Value>(new Date());

    function onDayClick(value : Date) {
        console.log(value.toISOString());
    }
    
    function formatDate(date: Date, locale: string) {
        if (dateArray.includes(date.toISOString())) {
            return String("");
        }
        return String(date.getDate());
    }

    return (
      <Calendar 
      className = "justify-center"
      tileContent={({date,view})=>view=='month'&&dateArray.includes(date.toISOString())?<p className="bg-sky-500">{date.getDate()}</p>:null} 
      formatDay={(locale, date)=>formatDate(date, 'd')} 
      onClickDay={(value)=>onDayClick(value)} 
      onChange={onChange} 
      value={value} />
  );
}