// https://godaddydev.service-now.com/now/nav/ui/classic/params/target/cmdb_ci_network_adapter_list.do%3Fsysparm_query%3Dcmdb_ciISNOTEMPTY%255Eu_switchISNOTEMPTY%255Eu_switchportISNOTEMPTY
//
//
//
//
var encodedQuery = 'sys_id=4a3175791bf7b950bc47c99f034bcbcd';
//
//
//
//
var report = function (cmdbCiNetworkAdapterReport) {
  gs.print(cmdbCiNetworkAdapterReport.reportData);
  gs.print(cmdbCiNetworkAdapterReport.adapterData);
};
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
  grTestAdapters.addEncodedQuery(encodedQuery);
  //
  //
  grTestAdapters.setLimit('10');
  //
  //
  grTestAdapters.query();
  while (grTestAdapters.next()) {
    checkAdapterSysId = checkSysId(grTestAdapters.getUniqueValue());
    if (checkAdapterSysId !== null) {
      testAdapterData.push(checkAdapterSysId);
    }
  }
  return testAdapterData;
};
// gather some cmdb_ci_network_adapters sys_ids for testing
var networkAdapterSysIdArray = getTestData();
//
// get report data from the script include
var cmdbCiNetworkAdapterReport = magnusCmdbCiNetworkAdapterReport(networkAdapterSysIdArray);
//
report(cmdbCiNetworkAdapterReport); 