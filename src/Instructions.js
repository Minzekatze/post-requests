import React from "react";

export default function Instructions() {
  return (
    <div className="block">
      <h1>POST request</h1>
      <details>
        <summary>
          <strong>Goals</strong>
        </summary>
        <p>
          So you are now and expert handling fetch requests (GET) to get data?
          What if you want to send data over to create a resource?
        </p>

        <p>
          We'll be using JSON Placeholder, in this exercise. Your task? Create a
          form to fill in the necessary data to create a new
          <strong>post</strong> entry. Once you get a successful response,
          display a list with all the posts you create.
        </p>
      </details>
      <details>
        <summary>
          <strong>Instructions</strong>
        </summary>
        <h3>Level 1:</h3>
        <ul>
          <li>Create a new post</li>
          <li>Display a list of posts</li>
        </ul>
        <h3>Level 2:</h3>
        <ul>
          <li>Handle potential errors from the API</li>
          <li>Use a different HTTP client, maybe axios</li>
        </ul>
        <h3>Level 3:</h3>
        <ul>
          <li>Refactor to async/await</li>
        </ul>
      </details>

      <br />
      <a className="link" href="https://jsonplaceholder.typicode.com/">
        JSON Placeholder
      </a>
      <a
        className="link"
        target="_blank"
        rel="noreferrer"
        href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data"
      >
        Using Fetch API
      </a>
      <a
        className="link"
        target="_blank"
        rel="noreferrer"
        href="https://axios-http.com/"
      >
        Axios
      </a>
    </div>
  );
}
