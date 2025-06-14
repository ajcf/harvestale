import List from '@mui/material/List';
import { ReadableAppPage } from "./Components/AppPage";
import ScheduleDay from "./Components/ScheduleDay";
import ScheduleItem from "./Components/ScheduleItem";

const Schedule = () => (
  <ReadableAppPage includeHeader currentPage="Schedule">
    <div className="schedule-date">October 10-13, 2025</div>
    <p className="schedule-location">
      <a href="https://maps.app.goo.gl/kJKiUn8JAoJPTT4n7" target="_blank" rel="noreferrer">
      Camp Apex <br/>
      45 Peckville Rd <br />
      Shelburne Falls, MA <br />
      </a>
    </p>
    <List>
    <ScheduleDay
      day="Friday"
      date="10/10"
      events={[
        { time: "5p", label: "Camp Opens", location: "Camp Apex"}
      ]}
    />
    <ScheduleDay
      day="Saturday"
      date="10/11"
      events={[
        { time: "8:15a", label: "Breakfast", location: "Camp Apex"},
        { time: "10a", label: "Leave Camp"},
        { time: "10:30a", label: "First Stand"},
        { time: "11:30a", label: "Second Stand"},
        { time: "12:30a", label: "Wilder Farm Sampler", location: "Wilder Farm, Buckland"},
      ]}
    />
    <ScheduleDay
      day="Sunday"
      date="10/12"
      events={[
        { time: "8:15a", label: "Breakfast", location: "Camp Apex"},
        { time: "9a", label: "Squire's Meeting"},
        { time: "10:30a", label: "First Stand", location: "Three Sisters Sanctuary"},
        { time: "11:30a", label: "Second Stand"},
        { time: "12:30p", label: "Singing", location: "Trolley Museum"},
        { time: "1:30p", label: "Lunch", location: "Camp Apex"},
        { time: "3:00", label: "Lunch", location: "Camp Apex"},
      ]}
    />
    </List>
    <ScheduleItem
      time="5 PM"
      label="Friday"
      location={
        <div>
          Camp opens. Potluck dinner will be provided by the host teams.
        </div>
      }
      side="left"
    />
    <ScheduleItem
      time="8:15 - 9:30 AM"
      label="Saturday"
      location={
        <div>
          Breakfast
        </div>
      }
      side="right"
    />
    <ScheduleItem
      time="8:15 - 9:30 AM"
      label="Sunday"
      location={
        <div>
          Breakfast
        </div>
      }
      side="left"
    />
    <ScheduleItem
      time="10:00 PM"
      label="Monday"
      side="right"
    />
  </ReadableAppPage>
);

export default Schedule;
