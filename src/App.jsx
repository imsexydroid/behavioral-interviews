import "./App.css";
import data from "../behaviorals.json";
import VideoPlayer from "./VideoPlayer";
function App() {
  return (
    <>
      <h1>Behavioral Interviews</h1>
      {data.behaviorals.map((item) => {
        return (
          <VideoPlayer
            name={item.name}
            description={item.description}
            vimeoId={item.video.vimeoId}
            instructor={item.video.instructor}
          />
        );
      })}
    </>
  );
}

export default App;
