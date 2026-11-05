import React, { useLayoutEffect } from "react";

async function fetchUsers() {
  const response = await fetch("http://localhost:8000/users");
  const result = await response.json();

  console.log(result);
}

function Test() {
  useLayoutEffect(function () {
    fetchUsers();
  }, []);

  return <div>Test</div>;
}

export default Test;
