import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

import { useState } from "react";
import axios from "axios";
import UserCard from "../components/usercard";
import UserCardDetail from "../components/UserCardDetail";

export default function Home() {
  const [inputNumber, setInputNumber] = useState(1);
  const [data, setData] = useState([]);

  const genUsers = async () => {
    if (inputNumber < 1) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${inputNumber}`
    );
    setData(resp.data.results);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          value={inputNumber}
          onChange={(event) => setInputNumber(event.target.value)}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {data.map((elem) => (
        <UserCard
          name={elem.name.first + " " + elem.name.last}
          img={elem.picture.large}
          email={elem.email}
          address={
            elem.location.city +
            " " +
            elem.location.state +
            " " +
            elem.location.country +
            " " +
            elem.location.postcode
          }
        />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Thian Suwannakul 620610176
      </p>
    </div>
  );
}
