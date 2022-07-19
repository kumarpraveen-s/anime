import React from "react";
import AddIcon from "@mui/icons-material/Add";
import classes from "./container.module.css";
const Container = ({ data, func }) => {
  return (
    <div className={classes.container}>
      {data.map((i) => (
        <div key={i.mal_id} className={`${classes.align} ${classes.card}`}>
          <img src={i.images.jpg.image_url} alt={i.title} />
          <h4>{i.title}</h4>
          <p>{i.rating}</p>
          <div>
            <AddIcon
              sx={{ color: "brown" }}
              className={classes.icon}
              onClick={() => func(i)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
