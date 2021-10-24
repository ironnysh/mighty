const videos = document.querySelectorAll(".player");

for (const player of videos) {
  const coverImage = document.createElement("img");
  player.appendChild(coverImage);
  coverImage.width = "345";
  coverImage.height = "260";
  coverImage.src = `https://i.ytimg.com/vi/${player.id}/0.jpg`;
  coverImage.loading = "lazy";
  coverImage.alt = `${player.dataset.title}`;

  player.addEventListener("click", addIframe);

  function addIframe() {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${this.id}?autoplay=1&modestbranding=1&rel=0`;
		iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture";
		iframe.allowFullscreen = true;
		iframe.title = `Videos I produced for ${this.dataset.title}`;
		this.parentNode.replaceChild(iframe, this);
	};
};