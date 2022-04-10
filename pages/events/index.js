import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage() {
  const events = getAllEvents();

  const router = useRouter()


  //below function executes after props.onSearch() from EventsSearch file
  function findEventsHandler(year, month){


    // fullPath to reach slug file
    const fullPath = `/events/${year}/${month}`

    //router.push() is called to go to a different page
    router.push(fullPath)

  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
