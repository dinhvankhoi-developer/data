(function () {
  const isOnline = navigator.onLine;
  if (isOnline) {
    console.log(`Người dùng đang online`);
    const ip = navigator.geolocation;
    const userAgent = navigator.userAgent;
    const appName = navigator.appName;
    const appVersion = navigator.appVersion;
    const platform = navigator.platform;
    const language = navigator.language;
    const cookieEnabled = navigator.cookieEnabled;
    const javaEnabled = navigator.javaEnabled();
    console.log(`
    IP: ${ip}
    UserAgent: ${userAgent}
    AppName: ${appName}
    AppVersion: ${appVersion}
    Platform: ${platform}
    Language: ${language}
    CookieEnabled: ${cookieEnabled}
    JavaEnabled: ${javaEnabled}
        
    `);
  } else {
    console.log(`Người dùng offline`);
  }
})();
