import React from "react";
import { useState } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const Home = () => {
  const [url, setUrl] = useState("");
  const [isloading, setIsloading] = useState(false);

  const handleOnChange = (e) => {
    setUrl(e.target.value);
  };

  const handleDownload = (e) => {
    window.location.href = `http://localhost:8000/download?URL=${url}`;
  };

  return (
    <div className="container">
      <InputGroup>
        <Input type="text" placeholder="Paste Link" onChange={handleOnChange} />
        <InputGroupAddon addonType="append">
          <Button color="primary" onClick={handleDownload}>
            Download
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Home;
