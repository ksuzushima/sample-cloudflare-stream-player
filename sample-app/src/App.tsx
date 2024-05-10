import { Stream } from "@cloudflare/stream-react";
import "./App.css";

function App() {
  const videos = [
    {
      videoId: "a926f3a2fce2e5eb879bc2fa0271b50a",
      width: 960,
      height: 540,
    },
    {
      videoId: "68462aed1baee10578db8da17621f97b",
      width: 540,
      height: 960,
    },
  ];

  return (
    <>
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-4">React component</h2>
        <div className="grid grid-cols-2 gap-4 w-[800px]">
          {videos.map((video) => (
            <div className="w-full" key={video.videoId}>
              <Stream
                controls={false}
                src={video.videoId}
                autoplay
                loop
                muted
                height={`${video.height}px`}
                width={`${video.width}px`}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">React component</h2>
        <div className="grid grid-cols-2 gap-4 w-[800px]">
          {videos.map((video) => (
            <div className="w-full" key={video.videoId}>
              <Stream
                controls
                src={video.videoId}
                autoplay
                loop
                height={`${video.height}px`}
                width={`${video.width}px`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
