import React, { useEffect } from 'react';
import "./style.css";


import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';

function Dob() {
useEffect(() => {
// Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="date"]', {});
// Loop on each calendar initialized
calendars.forEach((calendar) => {
// Add listener to date:selected event
calendar.on('date:selected', (date) => {
console.log(date);
});
});
// To access to bulmaCalendar instance of an element
// eslint-disable-next-line no-undef
const element = document.querySelector('#dob');
if (element) {
// bulmaCalendar instance is available as element.bulmaCalendar
element.bulmaCalendar.on('select', (datepicker) => {
console.log(datepicker.data.value());
});
}
}, []);
return (
    <div>
<div className="mt-6" style={{color: "black"}}>
<p className="is-6 mb-4" style={{color: "black"}}>Pick a Date</p>
<input id="dob" type="date" />
</div>
    </div>
);
}
export default Dob;