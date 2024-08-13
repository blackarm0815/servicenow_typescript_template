var foo = {};
//
var checkSysId = function (testSysId) {
  if (typeof testSysId === 'string') {
    if (testSysId !== '') {
      return testSysId;
    }
  }
  return null;
};
var getTestData = function () {
  //
  var grTestAdapters;
  var testAdapterData = [];
  var checkAdapterSysId;
  //
  grTestAdapters = new GlideRecord('cmdb_ci_network_adapter'); 
  grTestAdapters.addEncodedQuery('cmdb_ciISNOTEMPTY^u_switchISNOTEMPTY^u_switchportISNOTEMPTY');
  grTestAdapters.setLimit(10);
  grTestAdapters.query();
  while (grTestAdapters.next()) {
    checkAdapterSysId = checkSysId(grTestAdapters.getUniqueValue());
    if (checkAdapterSysId !== null) {
      testAdapterData.push(checkAdapterSysId);
    }
  }
  return testAdapterData;
};
//
//
// remove everything below this before putting it in the script include
var showReport = function () {
  var reportText = '';
  reportText += '<pre>';
  reportText += JSON.stringify(foo, null, 2);
  reportText += '</pre>';
    gs.print(reportText); 
};
var networkAdapterSysIdArray = getTestData();
//
// get report from the script include
foo = magnusCmdbCiNetworkAdapterReport(networkAdapterSysIdArray);
//
showReport();