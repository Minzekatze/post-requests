import "./styles.scss";
import Instructions from "./Instructions.js";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [created, setCreated] = useState([]);
  const titleRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleSubmit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        body: JSON.stringify({
          title: titleRef.current.value,
          body: bodyRef.current.value,
          userId: 7
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((response) => {
        console.log(response);
        setCreated(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div className="App">
      <div className="Instructions">
        <Instructions />
        <div className="block">
          <input type="text" placeholder="title" ref={titleRef} />
          <input type="text" placeholder="body" ref={bodyRef} />
          <button onClick={handleSubmit}>submit</button>
          {created && (
            <div>
              {created.title} {created.body}
            </div>
          )}
          {posts.map((post) => (
            <div>
              <p key={post.id}>
                {post.id}, UserID: {post.userId}, title: {post.title}, body:
                {post.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
