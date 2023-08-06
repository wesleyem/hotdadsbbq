export default function Event({
  dateOrPlace,
  eventName,
  location,
}: {
  dateOrPlace: string;
  eventName: string;
  location: string;
}) {
  return (
    <div className="mt-2 mb-4">
      <div className="mb-2">{dateOrPlace}</div>
      <h3 className="h4 mb-2">{eventName}</h3>
      <p className="mb-0">{location}</p>
    </div>
  );
}
