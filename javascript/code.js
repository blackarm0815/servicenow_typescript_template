var magnusCmdbCiNetworkAdapterReport = function (networkAdapterSysIdArray) {
  // globals
  //
  // the data on the main network adapters, the network adapters they are connected to
  // and any other network adapters might exists on the connected ports of the connected ports
  var adapterData = {};
  // the report data that is returned at the end
  var reportData = {};
  // all cmdb_ci sys_ids that will need to be tested
  var uniqueCiSysIds = {};
  // all of the connected ports that are found
  var uniqueConnectedPorts = {};
  // all of the cmdb_ci sys_ids that were found when searching with uniqueCiSysIds
  var validCiSysId = {};
  //
  //
  //
  //
  var testRemotePortConnectedPortMatchesMainPort = function (testNetworkAdapterSysId) {
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
  var testRemotePortConnectedPortHasValidSysId = function (testNetworkAdapterSysId) {
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
          // does the remote port connected port have a sys_id
          if (foundRemotePort.connectedPortSysId !== null) {
            // does the remote port connected port exist in adapterData
            if (Object.prototype.hasOwnProperty.call(adapterData, foundRemotePort.connectedPortSysId)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  var testRemotePortConnectedPortHasSysId = function (testNetworkAdapterSysId) {
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
          // does the remote port connected port have a sys_id
          if (foundRemotePort.connectedPortSysId !== null) {
            return true;
          }
        }
      }
    }
    return false;
  };
  var testRemotePortConnectedCiMatchesMainPortCi = function (testNetworkAdapterSysId) {
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
            return true;
          }
        }
      }
    }
    return false;
  };
  var testRemotePortConnectedCiHasValidSysId = function (testNetworkAdapterSysId) {
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
          // does the remote port connected ci have a sys_id
          if (foundRemotePort.connectedCiSysId !== null) {
            // is the remote port connected ci sys_id valid
            if (Object.prototype.hasOwnProperty.call(validCiSysId, foundRemotePort.connectedCiSysId)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  var testRemotePortConnectedCiHasSysId = function (testNetworkAdapterSysId) {
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
          // does the remote port ci have a sys_id
          if (foundRemotePort.connectedCiSysId !== null) {
            return true;
          }
        }
      }
    }
    return false;
  };
  var testRemotePortCiHasValidSysId = function (testNetworkAdapterSysId) {
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
          // does the remote port ci have a sys_id
          if (foundRemotePort.ciSysId !== null) {
            // is the remote port ci sys_id valid
            if (Object.prototype.hasOwnProperty.call(validCiSysId, foundRemotePort.ciSysId)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  var testRemotePortCiHasSysId = function (testNetworkAdapterSysId) {
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
          // does the remote port ci have a sys_id
          if (foundRemotePort.ciSysId !== null) {
            return true;
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
    // @ts-ignore
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
      testRemotePortCiHasSysId: testRemotePortCiHasSysId(testNetworkAdapterSysId),
      testRemotePortCiHasValidSysId: testRemotePortCiHasValidSysId(testNetworkAdapterSysId),
      testRemotePortConnectedCiHasSysId: testRemotePortConnectedCiHasSysId(testNetworkAdapterSysId),
      testRemotePortConnectedCiHasValidSysId: testRemotePortConnectedCiHasValidSysId(testNetworkAdapterSysId),
      testRemotePortConnectedCiMatchesMainPortCi: testRemotePortConnectedCiMatchesMainPortCi(testNetworkAdapterSysId),
      testRemotePortConnectedPortHasSysId: testRemotePortConnectedPortHasSysId(testNetworkAdapterSysId),
      testRemotePortConnectedPortHasValidSysId: testRemotePortConnectedPortHasValidSysId(testNetworkAdapterSysId),
      testRemotePortConnectedPortMatchesMainPort: testRemotePortConnectedPortMatchesMainPort(testNetworkAdapterSysId),
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
    // @ts-ignore
    grHardware = new GlideRecord('cmdb_ci');
    // @ts-ignore
    grHardware.addQuery('sys_id', 'IN', Object.keys(uniqueCiSysIds));
    // @ts-ignore
    grHardware.query();
    // @ts-ignore
    while (grHardware.next()) {
      // @ts-ignore
      ciSysId = checkSysId(grHardware.getValue('sys_id'));
      if (ciSysId !== null) {
        validCiSysId[ciSysId] = true;
      }
    }
  };
  var getNetworkAdapters = function (networkAdaptersToFind) {
    //
    var ciSysId;
    var connectedCiSysId;
    var connectedPortSysId;
    var grPortMain = null;
    var networkAdapterSysId;
    //
    // @ts-ignore
    grPortMain = new GlideRecord('cmdb_ci_network_adapter');
    // @ts-ignore
    grPortMain.addQuery('sys_id', 'IN', networkAdaptersToFind);
    // @ts-ignore
    grPortMain.query();
    // @ts-ignore
    while (grPortMain.next()) {
      // @ts-ignore
      networkAdapterSysId = checkSysId(grPortMain.getUniqueValue());
      // @ts-ignore
      ciSysId = checkSysId(grPortMain.getValue('cmdb_ci'));
      // @ts-ignore
      connectedCiSysId = checkSysId(grPortMain.getValue('u_switch'));
      // @ts-ignore
      connectedPortSysId = checkSysId(grPortMain.getValue('u_switchport'));
      if (networkAdapterSysId !== null) {
        adapterData[networkAdapterSysId] = {
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
  var areNetworkAdaptersAlreadyFound = function (networkAdaptersToCheck) {
    //
    var notFound = [];
    //
    Object.keys(networkAdaptersToCheck).forEach(function (testNetworkAdapter) {
      // if the connected adapter is not already in the adapterData
      if (!Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapter)) {
        // store for a second gliderecord query on the network adapter table
        notFound.push(testNetworkAdapter);
      }
    });
    return notFound;
  };
  var networkAdapterSearch = function () {
    //
    var moreAdaptersNeeded = [];
    //
    // get the main network adapters
    getNetworkAdapters(networkAdapterSysIdArray);
    //
    // the main adapters may have connected ports that need to be found to
    // check for these and collect them too if needed
    moreAdaptersNeeded = areNetworkAdaptersAlreadyFound(uniqueConnectedPorts);
    if (moreAdaptersNeeded.length > 0) {
      getNetworkAdapters(moreAdaptersNeeded);
    }
    //
    // the remote ports might have connected ports that are not the main port
    // check for these and collect them too if needed
    moreAdaptersNeeded = areNetworkAdaptersAlreadyFound(uniqueConnectedPorts);
    if (moreAdaptersNeeded.length > 0) {
      getNetworkAdapters(moreAdaptersNeeded);
    }
  };
  var main = function () {
    networkAdapterSearch();
    getValidCis();
    adapterLoop();
  };
    //
  main();
  return reportData;
};
