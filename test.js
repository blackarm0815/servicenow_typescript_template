var encodedQuery = 'cmdb_ciISNOTEMPTY^u_switchISNOTEMPTY^u_switchportISNOTEMPTY';
var queryLimit  = '10';
//
//
//
//
var cmdbCiNetworkAdapterReport = {};
//
//
//
//
var checkSysId = function (testSysId) {
  //
  var whiteSpaceRemoved = '';
  //
  // the type is string
  if (typeof testSysId === 'string') {
    // copy the test sys_id to a string that will have all whitespace removed
    whiteSpaceRemoved = testSysId;
    whiteSpaceRemoved.replace(' ', '');
    whiteSpaceRemoved.replace(/\t/g, '');
    // the string contains non whitespace characters
    if (whiteSpaceRemoved !== '') {
      // the string is 32 characters long. standard for a servicenow sys_id
      if (testSysId.length === 32) {
        return testSysId;
      }
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
  grTestAdapters.addEncodedQuery(encodedQuery);
  grTestAdapters.setLimit(queryLimit);
  grTestAdapters.query();
  while (grTestAdapters.next()) {
    checkAdapterSysId = checkSysId(grTestAdapters.getUniqueValue());
    if (checkAdapterSysId !== null) {
      testAdapterData.push(checkAdapterSysId);
    }
  }
  return testAdapterData;
};
var showReport = function () {
  var reportText = '';
  reportText += '<pre>';
  reportText += JSON.stringify(cmdbCiNetworkAdapterReport, null, 2);
  reportText += '</pre>';
    gs.print(reportText); 
};
var networkAdapterSysIdArray = getTestData();
//
// get report from the script include
cmdbCiNetworkAdapterReport = magnusCmdbCiNetworkAdapterReport(networkAdapterSysIdArray);
//
showReport();