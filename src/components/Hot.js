import "../App.css";
import TheBestMems from "./TheBestMems";
import Nav from "./Nav";
import { useHot, useDispatchCtx } from "./AppContext";

function Hot() {

  return (
    <div>
      <header className="App-header">
        <Nav />
      </header>
      <div className="content">
        <TheBestMems />
      </div>

    </div>
  );
}

export default Hot;

// export default function Hot(props) {
//   const items = useHot();
//   let { memElement, upvote, downovote } = props;
  // const sumVoting = upvote - downvote >= 5;

  // if (items.length === 0) {
  //   return (
  //     <div>
  //       <p className="content">List is empty.</p>
  //     </div>
  //   )
  // }

  // if (items.length >= 5) {
  //   return (
  //     <div>
  //       <p className="content">{memElement.upvote}</p>
  //     </div>
  //   )
  // }

  // return (
  //   <div>
  //     {items.map((item, index) => (
  //       <HotItem
  //         // handleRemove={handleRemove}
  //         key={index}
  //         item={item}
  //         index={index}
  //       />
  //     ))}
  //   </div>
  // );

// };

