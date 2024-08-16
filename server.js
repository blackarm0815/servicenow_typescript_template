(function () {
  //
  var report = {};
  //
  var processSysIdArray = function (testSysIdArray) {
    var newArray = testSysIdArray.split(',');
    report = magnusCmdbCiNetworkAdapterReport(newArray);
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
  data.report = report;
})();
