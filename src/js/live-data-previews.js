// CLOUDCANNON LIVE EDITING
// https://cloudcannon.com/documentation/articles/using-live-editing-with-vanilla-js///
if (!window.CloudCannon) {
  document.addEventListener('cloudcannon:load', function (e) {
    onLiveEditorLoad(e.detail.CloudCannon);
  });
} else {
  onLiveEditorLoad(window.CloudCannon);
}

function onLiveEditorLoad(CloudCannon) {
  CloudCannon.enableEvents();
}

document.addEventListener('cloudcannon:update', async function (e) {
  useNewPageProps(e.detail.CloudCannon);
});

async function useNewPageProps(CloudCannon) {
  const latestValue = await CloudCannon.value();
  console.log("LATEST",latestValue)

  // These will upate frontmatter, not the preview...
  // CloudCannon.set('title', latestValue.title);
  // CloudCannon.set('spacing.container-width', '500');

  // for (const key in latestValue) {
  //   console.log(key,latestValue[key]);
  //   CloudCannon.set(key, latestValue[key]);
  // }

}