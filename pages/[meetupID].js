import MeetupDetail from "../components/meetups/MeetupDetail";

import { MongoClient, ObjectId } from "mongodb";
import { mongodbString } from "../strings/mongodb-string";

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

export async function getStaticPaths() {
  const client = await MongoClient.connect(mongodbString);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupID: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single  meetup

  const meetupID = context.params.meetupID;

  const client = await MongoClient.connect(mongodbString);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupID),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
