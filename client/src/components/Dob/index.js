import React, { useEffect } from 'react';
import "./style.css";
// import "./style.scss";

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
<div className="mt-6" Style={{color: "black"}}>
<p className="subtitle is-6">Date of Birth</p>
<input id="dob" type="date" />
</div>
{/* <div className="column is-4">
  <div className="calendar">
  <div className="calendar-nav">
    <div className="calendar-nav-left">
      <button className="button is-link">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
    <div>March 2017</div>
    <div className="calendar-nav-right">
      <button className="button is-link">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  </div>
  <div className="calendar-container">
    <div className="calendar-header">
      <div className="calendar-date">Sun</div>
      <div className="calendar-date">Mon</div>
      <div className="calendar-date">Tue</div>
      <div className="calendar-date">Wed</div>
      <div className="calendar-date">Thu</div>
      <div className="calendar-date">Fri</div>
      <div className="calendar-date">Sat</div>
    </div>
    <div className="calendar-body">
      <div className="calendar-date is-disabled"><button className="date-item">26</button></div>
      <div className="calendar-date is-disabled"><button className="date-item">27</button></div>
      <div className="calendar-date is-disabled"><button className="date-item">28</button></div>
      <div className="calendar-date"><button className="date-item">1</button></div>
      <div className="calendar-date"><button className="date-item">2</button></div>
      <div className="calendar-date"><button className="date-item">3</button></div>
      <div className="calendar-date"><button className="date-item is-today">4</button></div>
      <div className="calendar-date"><button className="date-item" disabled="">5</button></div>
      <div className="calendar-date"><button className="date-item">6</button></div>
      <div className="calendar-date"><button className="date-item">7</button></div>
      <div className="calendar-date"><button className="date-item badge">8</button></div>
      <div className="calendar-date"><button className="date-item">9</button></div>
      <div className="calendar-date"><button className="date-item">10</button></div>
      <div className="calendar-date"><button className="date-item">11</button></div>
      <div className="calendar-date"><button className="date-item">12</button></div>
      <div className="calendar-date"><button className="date-item">13</button></div>
      <div className="calendar-date"><button className="date-item">14</button></div>
      <div className="calendar-date"><button className="date-item">15</button></div>
      <div className="calendar-date calendar-range range-start"><button className="date-item is-active">16</button></div>
      <div className="calendar-date calendar-range"><button className="date-item">17</button></div>
      <div className="calendar-date calendar-range"><button className="date-item">18</button></div>
      <div className="calendar-date calendar-range"><button className="date-item">19</button></div>
      <div className="calendar-date calendar-range range-end"><button className="date-item is-active">20</button></div>
      <div className="calendar-date"><button className="date-item">21</button></div>
      <div className="calendar-date"><button className="date-item">22</button></div>
      <div className="calendar-date"><button className="date-item">23</button></div>
      <div className="calendar-date"><button className="date-item">24</button></div>
      <div className="calendar-date"><button className="date-item">25</button></div>
      <div className="calendar-date"><button className="date-item">26</button></div>
      <div className="calendar-date"><button className="date-item">27</button></div>
      <div className="calendar-date"><button className="date-item">28</button></div>
      <div className="calendar-date"><button className="date-item">29</button></div>
      <div className="calendar-date"><button className="date-item">30</button></div>
      <div className="calendar-date"><button className="date-item">31</button></div>
      <div className="calendar-date is-disabled"><button className="date-item">1</button></div>
    </div>
  </div>
</div>
</div>

<br /><br />
<div className="calendar is-calendar-large">
  <div className="calendar-nav">
    <div className="calendar-nav-left">
      <button className="button is-link">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div> */}
    {/* <div>March 2017</div>
    <div className="calendar-nav-right">
      <button className="button is-link">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  </div>
  <div className="calendar-container">
    <div className="calendar-header">
      <div className="calendar-date">Sun</div>
      <div className="calendar-date">Mon</div>
      <div className="calendar-date">Tue</div>
      <div className="calendar-date">Wed</div>
      <div className="calendar-date">Thu</div>
      <div className="calendar-date">Fri</div>
      <div className="calendar-date">Sat</div>
    </div>
    <div className="calendar-body">
      <div className="calendar-date disabled"><button className="date-item">26</button></div>
      <div className="calendar-date disabled">
        <button className="date-item">27</button>
        <div className="calendar-events">
          <a className="calendar-event">Default event</a>
        </div>
      </div>
      <div className="calendar-date disabled"><button className="date-item">28</button></div>
      <div className="calendar-date"><button className="date-item">1</button></div>
      <div className="calendar-date"><button className="date-item">2</button></div>
      <div className="calendar-date"><button className="date-item">3</button></div>
      <div className="calendar-date tooltip" data-tooltip="Today"><button className="date-item date-today">4</button></div>
      <div className="calendar-date"><button className="date-item" disabled="">5</button></div>
      <div className="calendar-date"><button className="date-item">6</button></div>
      <div className="calendar-date"><button className="date-item">7</button></div>
      <div className="calendar-date tooltip" data-tooltip="You have appointments">
        <button className="date-item badge">8</button>
        <div className="calendar-events">
          <a className="calendar-event is-primary">Primary event</a>
          <a className="calendar-event is-warning">Warning event</a>
          <a className="calendar-event is-danger">Danger event</a>
        </div>
      </div>
      <div className="calendar-date"><button className="date-item">9</button></div>
      <div className="calendar-date"><button className="date-item">10</button></div>
      <div className="calendar-date"><button className="date-item">11</button></div>
      <div className="calendar-date">
        <button className="date-item">12</button>
        <div className="calendar-events">
          <a className="calendar-event">Default event</a>
        </div>
      </div>
      <div className="calendar-date"><button className="date-item">13</button></div>
      <div className="calendar-date"><button className="date-item">14</button></div>
      <div className="calendar-date"><button className="date-item">15</button></div>
      <div className="calendar-date calendar-range range-start"><button className="date-item is-active">16</button></div>
      <div className="calendar-date calendar-range"><button className="date-item">17</button></div>
      <div className="calendar-date calendar-range"><button className="date-item">18</button></div>
      <div className="calendar-date calendar-range"><button className="date-item">19</button></div>
      <div className="calendar-date calendar-range range-end">
        <button className="date-item is-active">20</button>
        <div className="calendar-events">
          <a className="calendar-event is-success">Success event</a>
        </div>
      </div>
      <div className="calendar-date"><button className="date-item">21</button></div>
      <div className="calendar-date"><button className="date-item">22</button></div>
      <div className="calendar-date"><button className="date-item">23</button></div>
      <div className="calendar-date"><button className="date-item">24</button></div>
      <div className="calendar-date"><button className="date-item">25</button></div>
      <div className="calendar-date"><button className="date-item">26</button></div>
      <div className="calendar-date"><button className="date-item">27</button></div>
      <div className="calendar-date"><button className="date-item">28</button></div>
      <div className="calendar-date"><button className="date-item">29</button></div>
      <div className="calendar-date"><button className="date-item">30</button></div>
      <div className="calendar-date"><button className="date-item">31</button></div>
      <div className="calendar-date disabled">
        <button className="date-item">1</button>
        <div className="calendar-events">
          <a className="calendar-event">Second default event</a>
        </div>
      </div>
    </div>
  </div>
</div> */}
    </div>
);
}
export default Dob;