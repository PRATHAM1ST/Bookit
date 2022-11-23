import RoomDetails from "../../components/room/roomDetails";

import Layout from "../../components/layout/Layout";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";

export default function Index() {
  return (
    <Layout>
      <RoomDetails title="Room Details" />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async ({ req, params }) => {
    return await store.dispatch(getRoomDetails(req, params.id));
  };
});
