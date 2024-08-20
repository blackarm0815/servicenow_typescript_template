// array of cmdb_ci_network_adapter sys_ids
var networkAdapterSysIdArray = ['4a3175791bf7b950bc47c99f034bcbcd'];

// get the results of the script include
var cmdbCiNetworkAdapterReport = magnusCmdbCiNetworkAdapterReport(networkAdapterSysIdArray);

// display the report data
// all possible questions asked
// keys are function names, with booleans from those functions
gs.print("reportData");
gs.print(cmdbCiNetworkAdapterReport.reportData);

// display the adapter data that was found
// this will include
// any network adapters found using networkAdapterSysIdArray
// any remote network adapters that are referred to by connected port
// and any further adapters referred to by the connected port on the remote object
gs.print("adapterData");
gs.print(cmdbCiNetworkAdapterReport.adapterData);