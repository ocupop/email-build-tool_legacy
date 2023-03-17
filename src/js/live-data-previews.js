// This page is ONLY loaded if we are viewing in the CloudCannon Live Editor

// CLOUDCANNON LIVE EDITING
// https://cloudcannon.com/documentation/articles/using-live-editing-with-vanilla-js///

CloudCannon.enableEvents();

document.addEventListener('cloudcannon:update', async function (e) {
  useNewPageProps(e.detail.CloudCannon);
});
document.addEventListener('cloudcannon:save', async function (e) {
  console.log("Saved")
});

async function useNewPageProps(CloudCannon) {
  const latestValue = await CloudCannon.value();
  console.log("LATEST",latestValue)
  console.log("TITLE",latestValue.title)


  // CloudCannon.set('title', latestValue.title);
  // CloudCannon.set('spacing.container-width', '500');

  // for (const key in latestValue) {
  //   console.log(key,latestValue[key]);
  //   CloudCannon.set(key, latestValue[key]);
  // }

}