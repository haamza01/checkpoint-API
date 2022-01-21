import axios from "axios";
import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";

const UsersForMap = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around"
            }}
        >
            {/* {moviedata.map((el) => (
        <ListUsers el={el} key={el.id} />
      ))} */}
            {users.map((el) => (
                <ListUsers el={el} key={el.id} />
            ))}
        </div>
    );
};

export default UsersForMap;
