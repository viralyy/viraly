let videos = JSON.parse(localStorage.getItem('videos') || '{}');

function uid() {
  return Math.random().toString(36).substr(2, 8);
}

function addVideo() {
  const id = uid();
  videos[id] = {
    title: title.value,
    stream: stream.value,
    download: download.value
  };
  localStorage.setItem('videos', JSON.stringify(videos));
  render();
}

function render() {
  list.innerHTML = '';
  for (let id in videos) {
    list.innerHTML += `
      <div class="card">
        <b>${videos[id].title}</b><br>
        <small>watch.html?v=${id}</small>
      </div>
    `;
  }
}

render();
