import React from "react";
import { useDispatchCtx } from "./AppContext";

function Mem( props) {

  // const hot = showmem.filter(({upvote, downvote}) => upvote - downvote >= 5)
  // const regular = showmem.filter(({upvote, downvote}) => upvote - downvote <= 5)
  
    const dispatch = useDispatchCtx();

    const addToFavourite = (item) => {
      console.log(item);
      dispatch({ type: "ADD", item });
    }
  

  let { memElement, incrementVoteCount, decrementVoteCount } = props;
 
  return (
    <div className="photos">
          <div className="container">
            <div className="headline">
              <div className="number__id">#{memElement._id}</div>
              <span className="star__icon">☆</span>
            </div>
            <div className="frame">
              <img
                className="image__size"
                src={`/assets/${memElement.photo}`}
                alt={memElement.photo}
              />
            </div>
            <div className="title__mem">
              <p className="name">{memElement.name}</p>
              
              <div className="subtitle__mem">
                <p className="description">{memElement.description}</p>
                <div className="click__vote">
                  <button className="upvote" onClick={() => incrementVoteCount(memElement._id)}><img className="upvote__icon" src="../ok.png" alt="ok" />{memElement.upvote}</button>
                  <button className="downvote" onClick={() => decrementVoteCount(memElement._id)}><img className="downvote__icon" src="../not.png" alt="not" />{memElement.downvote}</button>
                  {/* <button onClick={() => addToFavourite(props)}>Add To Favourite</button> */}
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Mem;
