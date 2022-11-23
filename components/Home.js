import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomItem from "./room/roomItem";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/roomActions";

export default function Home() {
  const dispatch = useDispatch();

  const { rooms, error } = useSelector((state) => state.allRooms);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);

  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        {" "}
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {rooms ? (
          // console.log(rooms)
          rooms.map((room) => <RoomItem key={room._id} room={room} />)
        ) : (
          <div className="alert alert-danger">
            <b>No Rooms.</b>
          </div>
        )}
      </div>
    </section>
  );
}
