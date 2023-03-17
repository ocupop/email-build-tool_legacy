// This page is ONLY loaded if we are viewing in the CloudCannon Live Editor

// CLOUDCANNON LIVE EDITING
// https://cloudcannon.com/documentation/articles/using-live-editing-with-vanilla-js///

CloudCannon.enableEvents();

document.addEventListener('cloudcannon:update', async function (e) {
  useNewPageProps(e.detail.CloudCannon);
});

async function useNewPageProps(CloudCannon) {
  const latestValue = await CloudCannon.value();
  console.log("LATEST",latestValue)
  console.log("TITLE",latestValue.title)


  CloudCannon.set('title', latestValue.title + " Updated!");
  CloudCannon.set('spacing.container-width', '500');

  // CloudCannon.set('spacing["gutter-width"]', '500');
  // CloudCannon.set(spacing.gutter-width-mobile, '500');

  // for (const key in latestValue) {
  //   console.log(key,latestValue[key]);
  //   CloudCannon.set(key, latestValue[key]);
  // }

}