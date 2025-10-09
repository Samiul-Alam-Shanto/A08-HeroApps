const getInstalledApp = () => {
  const installedAppSTR = localStorage.getItem("appList");
  if (installedAppSTR) {
    const installedApp = JSON.parse(installedAppSTR);
    return installedApp;
  } else return [];
};

const addToInstallLS = (id) => {
  const installedApps = getInstalledApp();

  installedApps.push(id);
  const newInstalledApps = JSON.stringify(installedApps);
  localStorage.setItem("appList", newInstalledApps);
};

export { getInstalledApp, addToInstallLS };
