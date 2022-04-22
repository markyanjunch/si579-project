import './App.css';
import {useState, useEffect} from "react";

import { getSongs } from "./utils";
import Panel from "./components/Panel.js";
import PlayList from "./components/PlayList";

function App() {
    const songs = getSongs();
    const [playingIndex, setPlayingIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState((playingIndex + 1) % songs.length);
    const [isPlayList, setIsPlayList] = useState(false);

    useEffect(() => { setNextIndex((playingIndex + 1) % songs.length); }, [playingIndex, songs.length]);

    return (
      <main className={ `music-player ${isPlayList ? "show-playlist" : "hidden-playlist"}` }>
          <Panel
              songs={songs}
              playingIndex={playingIndex}
              setPlayingIndex={setPlayingIndex}
              nextIndex={nextIndex}
              setNextIndex={setNextIndex}
          />
          <PlayList
              setIfPlayList={setIsPlayList}
          />
      </main>
    );
}

export default App;
