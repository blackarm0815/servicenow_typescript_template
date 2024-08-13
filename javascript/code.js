// eslint-disable-next-line
var cmdbCiNetworkAdapterTester = function (networkAdapterSysIdArray) {
  // globals
  var adapterData = {};
  var uniqueCiSysIds = {};
  var uniqueConnectedPorts = {};
  var validCiSysId = {};
  var reportData = {};
  //
  //
  //
  //
  // const testConnectedPortFieldsAlreadyMatchMainFields = (
  //   adapterMainSysId: string,
  // ) => {
  //   //
  //   let foundConnected: NetworkAdapterData | null = null;
  //   let foundMain: NetworkAdapterData | null = null;
  //   //
  //   if (connectedPortSysId !== null) {
  //     foundConnected = adapterData[connectedPortSysId];
  //     foundMain = adapterData[adapterMainSysId];
  //     if (foundConnected !== undefined && foundMain !== undefined) {
  //       // proceed if either field needs fixing
  //       if (foundConnected.connectedCiSysId !== foundMain.ciSysId || foundConnected.connectedPortSysId !== adapterMainSysId) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };
  var testMainConnectedCiValid = function (adapterMainSysId) {
    //
    var foundMain = null;
    //
    // does adapterMainSysId exist in adapterData
    if (Object.prototype.hasOwnProperty.call(adapterData, adapterMainSysId)) {
      foundMain = adapterData[adapterMainSysId];
      // does the ci have a reference
      if (foundMain.connectedCiSysId !== null) {
        // does that reference exist in cmdb_ci
        if (Object.prototype.hasOwnProperty.call(validCiSysId, foundMain.connectedCiSysId)) {
          return true;
        }
      }
    }
    return false;
  };
  var testMainConnectedCiNotEmpty = function (adapterMainSysId) {
    //
    var foundMain = null;
    //
    // does adapterMainSysId exist in adapterData
    if (Object.prototype.hasOwnProperty.call(adapterData, adapterMainSysId)) {
      foundMain = adapterData[adapterMainSysId];
      // does the ci have a reference
      if (foundMain.connectedCiSysId !== null) {
        return true;
      }
    }
    return false;
  };
  var testMainCiValid = function (adapterMainSysId) {
    //
    var foundMain = null;
    //
    // does adapterMainSysId exist in adapterData
    if (Object.prototype.hasOwnProperty.call(adapterData, adapterMainSysId)) {
      foundMain = adapterData[adapterMainSysId];
      // does the ci have a reference
      if (foundMain.ciSysId !== null) {
        // does that reference exist in cmdb_ci
        if (Object.prototype.hasOwnProperty.call(validCiSysId, foundMain.ciSysId)) {
          return true;
        }
      }
    }
    return false;
  };
  var testMainCiNotEmpty = function (adapterMainSysId) {
    //
    var foundMain = null;
    //
    // does adapterMainSysId exist in adapterData
    if (Object.prototype.hasOwnProperty.call(adapterData, adapterMainSysId)) {
      foundMain = adapterData[adapterMainSysId];
      // does the ci have a reference
      if (foundMain.ciSysId !== null) {
        return true;
      }
    }
    return false;
  };
  var testMainConnectedPortValid = function (adapterMainSysId) {
    //
    var foundMain = null;
    //
    // does adapterMainSysId exist in adapterData
    if (Object.prototype.hasOwnProperty.call(adapterData, adapterMainSysId)) {
      foundMain = adapterData[adapterMainSysId];
      // does the connected port have a reference
      if (foundMain.connectedPortSysId !== null) {
        // does that reference exist in cmdb_ci_network_adapter
        if (Object.prototype.hasOwnProperty.call(adapterData, foundMain.connectedPortSysId)) {
          return true;
        }
      }
    }
    return false;
  };
  var testMainConnectedPortNotEmpty = function (adapterMainSysId) {
    //
    var foundMain = null;
    //
    // does adapterMainSysId exist in adapterData
    if (Object.prototype.hasOwnProperty.call(adapterData, adapterMainSysId)) {
      foundMain = adapterData[adapterMainSysId];
      // does the connected port have a reference
      if (foundMain.connectedPortSysId !== null) {
        return true;
      }
    }
    return false;
  };
  var testMainConnectedCiMatchesConnectedPortCi = function (adapterMainSysId) {
    //
    var foundConnected = null;
    var foundMain = null;
    //
    // does adapterMainSysId exist in adapterData
    if (Object.prototype.hasOwnProperty.call(adapterData, adapterMainSysId)) {
      foundMain = adapterData[adapterMainSysId];
      // does the connected port have a reference
      if (foundMain.connectedPortSysId !== null) {
        // does the connected port exist in adapterData
        if (Object.prototype.hasOwnProperty.call(adapterData, foundMain.connectedPortSysId)) {
          foundConnected = adapterData[foundMain.connectedPortSysId];
          // does the connected port have a ci reference
          if (foundConnected.ciSysId !== null) {
            // if the connected port ci is valid
            if (Object.prototype.hasOwnProperty.call(validCiSysId, foundConnected.ciSysId)) {
              // if the connected port ci matches the main adapter connected ci
              if (foundConnected.ciSysId === foundMain.connectedCiSysId) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  };
  var testAdapterMain = function (adapterMainSysId) {
    //
    var url = '';
    //
    // @ts-ignore
        url += gs.getProperty('glide.servlet.uri'); 
    //
    reportData[adapterMainSysId] = {
      testMainCiNotEmpty: testMainCiNotEmpty(adapterMainSysId),
      testMainCiValid: testMainCiValid(adapterMainSysId),
      testMainConnectedCiMatchesConnectedPortCi: testMainConnectedCiMatchesConnectedPortCi(adapterMainSysId),
      testMainConnectedCiNotEmpty: testMainConnectedCiNotEmpty(adapterMainSysId),
      testMainConnectedCiValid: testMainConnectedCiValid(adapterMainSysId),
      testMainConnectedPortNotEmpty: testMainConnectedPortNotEmpty(adapterMainSysId),
      testMainConnectedPortValid: testMainConnectedPortValid(adapterMainSysId),
      testConnectedPortFieldsAlreadyMatchMainFields: false,
      testConnectedPortCiNotEmpty: false,
      testConnectedPortCiValid: false,
      testConnectedPortConnectedCiNotEmpty: false,
      testConnectedPortConnectedCiValid: false,
      testConnectedPortConnectedPortNotEmpty: false,
      testConnectedPortConnectedPortValid: false,
      urlNetworkAdapter: ''.concat(url, 'cmdb_ci_network_adapter.do?sys_id=').concat(adapterMainSysId),
    };
  };
  var adapterLoop = function () {
    networkAdapterSysIdArray.forEach(function (adapterMainSysId) {
      testAdapterMain(adapterMainSysId);
    });
  };
  var checkString = function (testVariable) {
    if (typeof testVariable === 'string') {
      if (testVariable !== '') {
        return testVariable;
      }
    }
    return null;
  };
  var getValidCis = function () {
    //
    var ciSysId;
    var grHardware = null;
    //
    // @ts-ignore
        grHardware = new GlideRecord('cmdb_ci'); 
    // @ts-ignore
    grHardware.addQuery('sys_id', 'IN', Object.keys(uniqueCiSysIds));
    // @ts-ignore
    grHardware.query();
    // @ts-ignore
    while (grHardware.next()) {
      // @ts-ignore
      ciSysId = checkString(grHardware.getValue('sys_id'));
      if (ciSysId !== null) {
        validCiSysId[ciSysId] = true;
      }
    }
  };
  var getNetworkAdaptersconnected = function (connectedAdaptersNeeded) {
    //
    var adapterRemoteSysId;
    var ciSysId;
    var connectedCiSysId;
    var connectedPortSysId;
    var grPortConnected = null;
    //
    // @ts-ignore
        grPortConnected = new GlideRecord('cmdb_ci_network_adapter'); 
    // @ts-ignore
    grPortConnected.addQuery('sys_id', 'IN', connectedAdaptersNeeded);
    // @ts-ignore
    grPortConnected.query();
    // @ts-ignore
    while (grPortConnected.next()) {
      // @ts-ignore
      adapterRemoteSysId = checkString(grPortConnected.getUniqueValue());
      // @ts-ignore
      ciSysId = checkString(grPortConnected.getValue('cmdb_ci'));
      // @ts-ignore
      connectedCiSysId = checkString(grPortConnected.getValue('u_switch'));
      // @ts-ignore
      connectedPortSysId = checkString(grPortConnected.getValue('u_switchport'));
      if (adapterRemoteSysId !== null) {
        adapterData[adapterRemoteSysId] = {
          ciSysId: ciSysId,
          connectedCiSysId: connectedCiSysId,
          connectedPortSysId: connectedPortSysId,
        };
        // uniqueCiSysIds will be tested for validity
        if (ciSysId !== null) {
          uniqueCiSysIds[ciSysId] = true;
        }
        if (connectedCiSysId !== null) {
          uniqueCiSysIds[connectedCiSysId] = true;
        }
      }
    }
  };
  var testConnectedAdaptersNeeded = function () {
    //
    var connectedAdaptersNeeded = [];
    //
    Object.keys(uniqueConnectedPorts).forEach(function (connectedPortSysId) {
      // if the connected adapter is not already in the adapterData
      if (!Object.prototype.hasOwnProperty.call(adapterData, connectedPortSysId)) {
        // store for a second gliderecord query on the network adapter table
        connectedAdaptersNeeded.push(connectedPortSysId);
      }
    });
    //
    // if any connected ports do not exist in adapterData, get them
    if (connectedAdaptersNeeded.length > 0) {
      getNetworkAdaptersconnected(connectedAdaptersNeeded);
    }
  };
  var getNetworkAdaptersMain = function () {
    var adapterMainSysId;
    var ciSysId;
    var connectedCiSysId;
    var connectedPortSysId;
    var grPortMain = null;
    //
    // @ts-ignore
        grPortMain = new GlideRecord('cmdb_ci_network_adapter'); 
    // @ts-ignore
    grPortMain.addQuery('sys_id', 'IN', networkAdapterSysIdArray);
    // @ts-ignore
    grPortMain.query();
    // @ts-ignore
    while (grPortMain.next()) {
      // @ts-ignore
      adapterMainSysId = checkString(grPortMain.getUniqueValue());
      // @ts-ignore
      ciSysId = checkString(grPortMain.getValue('cmdb_ci'));
      // @ts-ignore
      connectedCiSysId = checkString(grPortMain.getValue('u_switch'));
      // @ts-ignore
      connectedPortSysId = checkString(grPortMain.getValue('u_switchport'));
      if (adapterMainSysId !== null) {
        adapterData[adapterMainSysId] = {
          ciSysId: ciSysId,
          connectedCiSysId: connectedCiSysId,
          connectedPortSysId: connectedPortSysId,
        };
        // uniqueCiSysIds will be tested for validity
        if (ciSysId !== null) {
          uniqueCiSysIds[ciSysId] = true;
        }
        if (connectedCiSysId !== null) {
          uniqueCiSysIds[connectedCiSysId] = true;
        }
        // these are gathered for the getNetworkAdaptersconnected function
        if (connectedPortSysId !== null) {
          uniqueConnectedPorts[connectedPortSysId] = true;
        }
      }
    }
  };
  var main = function () {
    getNetworkAdaptersMain();
    testConnectedAdaptersNeeded();
    getValidCis();
    adapterLoop();
  };
  main();
  return reportData;
};
// end of script include
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var foo = {};
//
var checkString = function (testVariable) {
  if (typeof testVariable === 'string') {
    if (testVariable !== '') {
      return testVariable;
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
  // @ts-ignore
    grTestAdapters = new GlideRecord('cmdb_ci_network_adapter'); 
  // @ts-ignore
  grTestAdapters.addEncodedQuery('cmdb_ciISNOTEMPTY^u_switchISNOTEMPTY^u_switchportISNOTEMPTY');
  // @ts-ignore
  grTestAdapters.setLimit(10);
  // @ts-ignore
  grTestAdapters.query();
  // @ts-ignore
  while (grTestAdapters.next()) {
    // @ts-ignore
    checkAdapterSysId = checkString(grTestAdapters.getUniqueValue());
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
  // @ts-ignore
    gs.print(reportText); 
};
var networkAdapterSysIdArray = getTestData();
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
foo = cmdbCiNetworkAdapterTester(networkAdapterSysIdArray);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
showReport();
