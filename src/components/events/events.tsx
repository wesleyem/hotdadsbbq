import Event from "./event";

export default function Events() {
  return (
    <section className="page-section bg-primary" id="upcoming">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="text-center mt-2">Upcoming</h2>
            <hr className="divider" />
            <Event
              dateOrPlace="September 23rd, 2023"
              eventName="12th Annual Sampolo Ct Rib Cookoff"
              location="Citrus Heights, CA"
            />
          </div>
          <div className="col-lg-6 text-center">
            <h2 className="text-center mt-2">Past Events</h2>
            <hr className="divider" />
            <Event
              dateOrPlace="2nd Place"
              eventName="4th Annual Slanted Field of Dreams Invitational Rib Cook-off"
              location="Penryn, CA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
