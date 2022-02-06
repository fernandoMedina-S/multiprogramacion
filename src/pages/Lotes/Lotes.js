import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Process from "../../components/Process";



const Lotes = () => {
  const [processList, setProcessList] = useState([]);
  const [start, setStart] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setText("");
    const data = new FormData(event.currentTarget);
    if (data.get("name") && data.get("duration")) {
      const newProcess = {name: data.get("name"), duration: data.get("duration")}
      setProcessList(processList => [...processList, newProcess]);
      processList.forEach((element) => console.log(element));
    } else {
      alert("ño");
    }
  };

  useEffect(() => {
    processList.map((element) => {
      return <Process name={element.name} duration={element.duration} />;
    });
    console.log("use effect started");
  }, [processList, start]);

  const startProcess = () => {
    setStart(true);
  }

  return (
    <>
      <div className="lotes__content">
        <Box
          className="lotes__box-add"
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <Box className="lotes__text-grid">
            <TextField
              name="name"
              id="outlined-basic"
              className="lotes__text-field"
              label="Nombre proceso"
              variant="outlined"
              sx={{ mb: 2 }}
              value={text}
              onChange={(e)=>{setText(e.target.value)}}
              
            />
            <TextField
              name="duration"
              id="outlined-basic"
              className="lotes__text-field"
              label="Duración"
              variant="outlined"
              sx={{ mb: 2, ml: 2 }}
            />
          </Box>
          <Button type="submit" variant="contained" color="success">
            Agregar proceso
          </Button>

          <Button variant="contained" color="info" sx={{ mt: 2}} onClick={startProcess}>
            Iniciar
          </Button>
        </Box>
        <Box className="lotes__box-display">
          {processList.map((element) => {
            return <Process name={element.name} duration={element.duration} started={start}/>;
          })}
        </Box>
      </div>
    </>
  );
};

export default Lotes;
