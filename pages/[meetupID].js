import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupID: "m1",
        },
      },
      {
        params: {
          meetupID: "m2",
        },
      },
    ],
  };
}

export function getStaticProps(context) {
  // fetch data for a single  meetup

  const meetupID = context.params.meetupID;
  console.log(meetupID);

  return {
    props: {
      meetupData: {
        id: meetupID,
        title: "First meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hohenzollernbr%C3%BCcke_K%C3%B6ln.jpg/1280px-Hohenzollernbr%C3%BCcke_K%C3%B6ln.jpg",
        address: "Some street 3, Test City",
        description: "Meet up at lunch",
      },
    },
  };
}

export default MeetupDetails;
