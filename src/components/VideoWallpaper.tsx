export function VideoWallpaper() {
  return (
    <div className="video-wallpaper" aria-hidden="true">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="video-wallpaper__media"
      >
        <source src="/campfire-pc.mp4" type="video/mp4" />
      </video>
      <div className="video-wallpaper__overlay" />
    </div>
  );
}
