var magnusCmdbCiNetworkAdapterReport = function (networkAdapterSysIdArray) {
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
  var testRemotePortFieldsMatchMainPortFields = function (testNetworkAdapterSysId) {
    //
    var foundMainPort = null;
    var foundRemotePort = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was it found in cmdb_ci_network_adapter)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMainPort = adapterData[testNetworkAdapterSysId];
      // does the connected port have a reference
      if (foundMainPort.connectedPortSysId !== null) {
        // does the connected port exist in adapterData (was it found in cmdb_ci_network_adapter)
        if (Object.prototype.hasOwnProperty.call(adapterData, foundMainPort.connectedPortSysId)) {
          foundRemotePort = adapterData[foundMainPort.connectedPortSysId];
          // does the remote port connected ci match the main port ci
          if (foundRemotePort.connectedCiSysId === foundMainPort.ciSysId) {
            // does the remote port connected port match the main port sys_id
            if (foundRemotePort.connectedPortSysId === testNetworkAdapterSysId) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  var testRemotePortActuallyExists = function (testNetworkAdapterSysId) {
    //
    var foundMainPort = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was it found in cmdb_ci_network_adapter)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMainPort = adapterData[testNetworkAdapterSysId];
      // does the connected port have a reference
      if (foundMainPort.connectedPortSysId !== null) {
        // does the connected port exist in adapterData (was it found in cmdb_ci_network_adapter)
        if (Object.prototype.hasOwnProperty.call(adapterData, foundMainPort.connectedPortSysId)) {
          return true;
        }
      }
    }
    return false;
  };
  var testMainPortConnectedPortIsOnConnectedCi = function (testNetworkAdapterSysId) {
    //
    var foundRemotePort = null;
    var foundMainPort = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMainPort = adapterData[testNetworkAdapterSysId];
      // does the connected port have a reference
      if (foundMainPort.connectedPortSysId !== null) {
        // does the connected port exist in adapterData
        if (Object.prototype.hasOwnProperty.call(adapterData, foundMainPort.connectedPortSysId)) {
          foundRemotePort = adapterData[foundMainPort.connectedPortSysId];
          // does the connected port have a ci reference
          if (foundRemotePort.ciSysId !== null) {
            // if the connected port ci is valid
            if (Object.prototype.hasOwnProperty.call(validCiSysId, foundRemotePort.ciSysId)) {
              // if the connected port ci matches the main adapter connected ci
              if (foundRemotePort.ciSysId === foundMainPort.connectedCiSysId) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  };
  var testMainPortConnectedPortHasValidSysId = function (testNetworkAdapterSysId) {
    //
    var foundMainPort = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMainPort = adapterData[testNetworkAdapterSysId];
      // does the connected port have a reference
      if (foundMainPort.connectedPortSysId !== null) {
        // does that reference exist in cmdb_ci_network_adapter
        if (Object.prototype.hasOwnProperty.call(adapterData, foundMainPort.connectedPortSysId)) {
          return true;
        }
      }
    }
    return false;
  };
  var testMainPortConnectedPortHasSysId = function (testNetworkAdapterSysId) {
    //
    var foundMainPort = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMainPort = adapterData[testNetworkAdapterSysId];
      // does the connected port have a reference
      if (foundMainPort.connectedPortSysId !== null) {
        return true;
      }
    }
    return false;
  };
  var testMainPortConnectedCiHasValidSysId = function (testNetworkAdapterSysId) {
    //
    var foundMainPort = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMainPort = adapterData[testNetworkAdapterSysId];
      // does the ci have a reference
      if (foundMainPort.connectedCiSysId !== null) {
        // does that reference exist in cmdb_ci
        if (Object.prototype.hasOwnProperty.call(validCiSysId, foundMainPort.connectedCiSysId)) {
          return true;
        }
      }
    }
    return false;
  };
  var testMainPortConnectedCiHasSysId = function (testNetworkAdapterSysId) {
    //
    var foundMainPort = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMainPort = adapterData[testNetworkAdapterSysId];
      // does the ci have a reference
      if (foundMainPort.connectedCiSysId !== null) {
        return true;
      }
    }
    return false;
  };
  var testMainPortCiHasValidSysId = function (testNetworkAdapterSysId) {
    //
    var foundMainPort = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMainPort = adapterData[testNetworkAdapterSysId];
      // does the ci have a reference
      if (foundMainPort.ciSysId !== null) {
        // does that reference exist in cmdb_ci
        if (Object.prototype.hasOwnProperty.call(validCiSysId, foundMainPort.ciSysId)) {
          return true;
        }
      }
    }
    return false;
  };
  var testMainPortCiHasSysId = function (testNetworkAdapterSysId) {
    //
    var foundMainPort = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMainPort = adapterData[testNetworkAdapterSysId];
      // does the ci have a reference
      if (foundMainPort.ciSysId !== null) {
        return true;
      }
    }
    return false;
  };
  var testMainPortActuallyExists = function (testNetworkAdapterSysId) {
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      return true;
    }
    return false;
  };
  var testAdapterMain = function (testNetworkAdapterSysId) {
    //
    var url = '';
    //
    url += gs.getProperty('glide.servlet.uri');
    //
    reportData[testNetworkAdapterSysId] = {
      testMainPortActuallyExists: testMainPortActuallyExists(testNetworkAdapterSysId),
      testMainPortCiHasSysId: testMainPortCiHasSysId(testNetworkAdapterSysId),
      testMainPortCiHasValidSysId: testMainPortCiHasValidSysId(testNetworkAdapterSysId),
      testMainPortConnectedCiHasSysId: testMainPortConnectedCiHasSysId(testNetworkAdapterSysId),
      testMainPortConnectedCiHasValidSysId: testMainPortConnectedCiHasValidSysId(testNetworkAdapterSysId),
      testMainPortConnectedPortHasSysId: testMainPortConnectedPortHasSysId(testNetworkAdapterSysId),
      testMainPortConnectedPortHasValidSysId: testMainPortConnectedPortHasValidSysId(testNetworkAdapterSysId),
      testMainPortConnectedPortIsOnConnectedCi: testMainPortConnectedPortIsOnConnectedCi(testNetworkAdapterSysId),
      testRemotePortActuallyExists: testRemotePortActuallyExists(testNetworkAdapterSysId),
      testRemotePortCiHasSysId: 'not coded yet',
      testRemotePortCiHasValidSysId: 'not coded yet',
      testRemotePortConnectedCiHasSysId: 'not coded yet',
      testRemotePortConnectedCiHasValidSysId: 'not coded yet',
      testRemotePortConnectedPortHasSysId: 'not coded yet',
      testRemotePortConnectedPortHasValidSysId: 'not coded yet',
      testRemotePortFieldsMatchMainPortFields: testRemotePortFieldsMatchMainPortFields(testNetworkAdapterSysId),
      urlNetworkAdapter: ''.concat(url, 'cmdb_ci_network_adapter.do?sys_id=').concat(testNetworkAdapterSysId),
    };
  };
  var adapterLoop = function () {
    networkAdapterSysIdArray.forEach(function (testNetworkAdapterSysId) {
      testAdapterMain(testNetworkAdapterSysId);
    });
  };
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
  var getValidCis = function () {
    //
    var ciSysId;
    var grHardware = null;
    //
    grHardware = new GlideRecord('cmdb_ci');
    grHardware.addQuery('sys_id', 'IN', Object.keys(uniqueCiSysIds));
    grHardware.query();
    while (grHardware.next()) {
      ciSysId = checkSysId(grHardware.getValue('sys_id'));
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
    grPortConnected = new GlideRecord('cmdb_ci_network_adapter');
    grPortConnected.addQuery('sys_id', 'IN', connectedAdaptersNeeded);
    grPortConnected.query();
    while (grPortConnected.next()) {
      adapterRemoteSysId = checkSysId(grPortConnected.getUniqueValue());
      ciSysId = checkSysId(grPortConnected.getValue('cmdb_ci'));
      connectedCiSysId = checkSysId(grPortConnected.getValue('u_switch'));
      connectedPortSysId = checkSysId(grPortConnected.getValue('u_switchport'));
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
    var testNetworkAdapterSysId;
    var ciSysId;
    var connectedCiSysId;
    var connectedPortSysId;
    var grPortMain = null;
    //
    grPortMain = new GlideRecord('cmdb_ci_network_adapter');
    grPortMain.addQuery('sys_id', 'IN', networkAdapterSysIdArray);
    grPortMain.query();
    while (grPortMain.next()) {
      testNetworkAdapterSysId = checkSysId(grPortMain.getUniqueValue());
      ciSysId = checkSysId(grPortMain.getValue('cmdb_ci'));
      connectedCiSysId = checkSysId(grPortMain.getValue('u_switch'));
      connectedPortSysId = checkSysId(grPortMain.getValue('u_switchport'));
      if (testNetworkAdapterSysId !== null) {
        adapterData[testNetworkAdapterSysId] = {
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
