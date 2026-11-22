import React, { useRef, useState } from "react";
import scene from "../../assets/scene.png";
import flute from "../../assets/flute.mp3";
import { Volume2, VolumeX } from "lucide-react";
import "./scene.css";

const Scene = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const fluteRef = useRef(null);

  const fluteFunction = async (e) => {
    if (isPlaying) {
      fluteRef.current.pause();
      setIsPlaying(false);
    } else {
      fluteRef.current.play();
      setIsPlaying(true);
    }
  };

  return (

      <div className="scene">
        <img src={scene} alt="ninja_scene_error" className="image" />
        <div>
          <audio
            src={flute}
            autoPlay
            loop
            ref={fluteRef}
            className="flute_sound"
          ></audio>
          <button className="audio" onClick={fluteFunction}>
            {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
          </button>
        </div>
      </div>

  );
};

export default Scene;
