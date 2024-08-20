(function () {
  //
  var adapterData = {};
  var reportData = {};
  //
  var processSysIdArray = function (testSysIdArray) {
    gs.addInfoMessage(testSysIdArray);
    var newArray = testSysIdArray.split(',');
    gs.addInfoMessage(JSON.stringify(newArray));
    var results = magnusCmdbCiNetworkAdapterReport(newArray);
    reportData = results.reportData;
    gs.addInfoMessage(JSON.stringify(reportData));
    adapterData = results.adapterData;
    gs.addInfoMessage(JSON.stringify(adapterData));
  };
  //
  var main = function () {
    var testSysIdArray = $sp.getParameter('sysIdArray');
    // overlay hardware
    if (testSysIdArray !== null && testSysIdArray !== '') {
      processSysIdArray(testSysIdArray);
    }
  };
  //
  main();
  data.adapterData = adapterData;
  data.reportData = reportData;
})();
