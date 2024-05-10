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
    <div className="flex justify-center w-full">
      <div className="max-w-[800px] w-full">
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">autoplay + muted</h2>
          <div className="grid grid-cols-2 gap-4">
            {videos.map((video) => (
              <div className="w-full" key={video.videoId}>
                <Stream
                  controls={false}
                  src={video.videoId}
                  autoplay
                  loop
                  muted
                  responsive
                  height={`${video.height}px`}
                  width={`${video.width}px`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[800px] w-full">
          <h2 className="text-lg font-bold mb-4">autoplay</h2>
          <div className="grid grid-cols-2 gap-4">
            {videos.map((video) => (
              <div className="w-full" key={video.videoId}>
                <Stream
                  controls={false}
                  src={video.videoId}
                  autoplay
                  loop
                  responsive
                  height={`${video.height}px`}
                  width={`${video.width}px`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
