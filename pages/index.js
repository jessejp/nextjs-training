import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Bridge Hangout",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hohenzollernbr%C3%BCcke_K%C3%B6ln.jpg/1280px-Hohenzollernbr%C3%BCcke_K%C3%B6ln.jpg",
    address: "Cross Ave. 3, 31333, Köln",
  },
  {
    id: "m2",
    title: "Hike up the alps!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/RhB_BDt_at_La_Punt-Chamues-ch.jpg/1280px-RhB_BDt_at_La_Punt-Chamues-ch.jpg",
    address: "Alps, Switzerland",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
