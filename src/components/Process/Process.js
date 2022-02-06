//Este es el componente encargado de renderizar los procesos individuales, maneja su tiempo de vida y su nombre
import React, { useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Process = (props) => {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(props.started);

  //Temporizador
  React.useEffect(() => {
    setStart(props.started);
    if (start) {
      console.log(start);
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }

    
  }, [start, props.started]);

  //Parte visual del renderizado
  return (
    <>
      {console.log(props.duration)}
      <Box sx={{ width: "80%", m: 2, mt: 5 }} className="process__bar">
        <h1 className="process__title">Proceso {props.name}</h1>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </>
  );
};

export default Process;
