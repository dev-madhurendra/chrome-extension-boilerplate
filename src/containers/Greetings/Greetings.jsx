import React, { useState } from 'react';

const GreetingComponent = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => setName(e.target.value);
  return (
    <div>
      <input value={name} onChange={handleChange} />
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default GreetingComponent;
