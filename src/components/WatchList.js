import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "./container.module.css";
const WatchList = ({ data, func }) => {
  return (
    <div className={classes.container}>
      {data.map((i) => (
        <div key={i.mal_id} className={`${classes.align} ${classes.card}`}>
          <img src={i.images.jpg.image_url} alt={i.title} />
          <h4>{i.title}</h4>
          <p>{i.rating}</p>
          <div>
            <DeleteIcon
              sx={{ color: "brown" }}
              className={classes.icon}
              onClick={() => func(i.mal_id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
