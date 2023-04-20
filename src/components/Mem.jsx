import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useModifyMemVote } from "../hooks/useModifyMemVote";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Mem = (props) => {
  const { mem } = props;
  const { title, upvotes, downvotes, img } = mem;

  const modifyMemVote = useModifyMemVote();

  const handleUpClick = () => {
    const updatedMem = {
      ...mem,
      upvotes: mem.upvotes + 1,
    };

    modifyMemVote(updatedMem);
  };

  const handleDownClick = () => {
    const updatedMem = {
      ...mem,
      downvotes: mem.downvotes + 1,
    };

    modifyMemVote(updatedMem);
  };

  return (
    <Card className="mb-6 text-black" sx={{ maxWidth: 650 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-center pt-6 font-dyna-puff text-xl md:text-2xl"
        >
          {title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={img}
        alt={title}
        height="140"
        className="p-4"
      />

      <CardActions className="flex items-center pl-6 pb-5 justify-center">
        <div>
          <Button
            size="small"
            className="flex items-center"
            onClick={handleUpClick}
          >
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="2x"
              className="font-light text-black"
            />
            <Typography className="font-bold pl-3">{upvotes}</Typography>
          </Button>
        </div>
        <div className="pl-3">
          <Button
            size="small"
            className="flex items-center"
            onClick={handleDownClick}
          >
            <FontAwesomeIcon
              icon={faThumbsDown}
              size="2x"
              className="font-light text-black"
            />
            <Typography className="font-bold pl-3">{downvotes}</Typography>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default Mem;
