interface ReportData {
  testMainPortActuallyExists: boolean,
  testMainPortCiHasSysId: boolean;
  testMainPortCiHasValidSysId: boolean;
  testMainPortConnectedCiHasSysId: boolean;
  testMainPortConnectedCiHasValidSysId: boolean;
  testMainPortConnectedPortHasSysId: boolean;
  testMainPortConnectedPortHasValidSysId: boolean;
  testMainPortConnectedPortIsOnConnectedCi: boolean;
  testRemotePortActuallyExists: boolean,
  testRemotePortCiHasSysId: boolean;
  testRemotePortCiHasValidSysId: boolean;
  testRemotePortConnectedCiHasSysId: boolean;
  testRemotePortConnectedCiHasValidSysId: boolean;
  testRemotePortConnectedCiMatchesMainPortCi: boolean;
  testRemotePortConnectedPortHasSysId: boolean;
  testRemotePortConnectedPortHasValidSysId: boolean;
  testRemotePortConnectedPortMatchesMainPort: boolean;
  urlNetworkAdapter: string,
}
const magnusCmdbCiNetworkAdapterReport = (networkAdapterSysIdArray: Array<string>) => {
  //
  interface NetworkAdapterData {
    ciSysId: string | null;
    connectedCiSysId: string | null;
    connectedPortSysId: string | null;
  }
  // globals
  //
  // the data on the main network adapters, the network adapters they are connected to
  // and any other network adapters might exists on the connected ports of the connected ports
  const adapterData: Record<string, NetworkAdapterData> = {};
  // the report data that is returned at the end
  const reportData: Record<string, ReportData> = {};
  // all cmdb_ci sys_ids that will need to be tested
  const uniqueCiSysIds: Record<string, boolean> = {};
  // all of the connected ports that are found
  const uniqueConnectedPorts: Record<string, boolean> = {};
  // all of the cmdb_ci sys_ids that were found when searching with uniqueCiSysIds
  const validCiSysId: Record<string, boolean> = {};
  //
  //
  //
  //
  const testRemotePortConnectedPortMatchesMainPort = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
    let foundRemotePort: NetworkAdapterData | null = null;
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
  const testRemotePortConnectedPortHasValidSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
    let foundRemotePort: NetworkAdapterData | null = null;
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
  const testRemotePortConnectedPortHasSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
    let foundRemotePort: NetworkAdapterData | null = null;
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
  const testRemotePortConnectedCiMatchesMainPortCi = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
    let foundRemotePort: NetworkAdapterData | null = null;
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
  const testRemotePortConnectedCiHasValidSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
    let foundRemotePort: NetworkAdapterData | null = null;
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
  const testRemotePortConnectedCiHasSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
    let foundRemotePort: NetworkAdapterData | null = null;
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
  const testRemotePortCiHasValidSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
    let foundRemotePort: NetworkAdapterData | null = null;
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
  const testRemotePortCiHasSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
    let foundRemotePort: NetworkAdapterData | null = null;
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
  const testRemotePortActuallyExists = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
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
  const testMainPortConnectedPortIsOnConnectedCi = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundRemotePort: NetworkAdapterData | null = null;
    let foundMainPort: NetworkAdapterData | null = null;
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
  const testMainPortConnectedPortHasValidSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
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
  const testMainPortConnectedPortHasSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
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
  const testMainPortConnectedCiHasValidSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
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
  const testMainPortConnectedCiHasSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
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
  const testMainPortCiHasValidSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
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
  const testMainPortCiHasSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMainPort: NetworkAdapterData | null = null;
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
  const testMainPortActuallyExists = (
    testNetworkAdapterSysId: string,
  ) => {
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      return true;
    }
    return false;
  };
  const testAdapterMain = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let url = '';
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
      urlNetworkAdapter: `${url}cmdb_ci_network_adapter.do?sys_id=${testNetworkAdapterSysId}`,
    };
  };
  const adapterLoop = () => {
    networkAdapterSysIdArray.forEach((testNetworkAdapterSysId) => {
      testAdapterMain(testNetworkAdapterSysId);
    });
  };
  const checkSysId = (
    testSysId: unknown,
  ) => {
    //
    let whiteSpaceRemoved: String = '';
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
  const getValidCis = () => {
    //
    let ciSysId: string | null;
    let grHardware: unknown | null = null;
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
  const getNetworkAdapters = (
    networkAdaptersToFind: Array<string>,
  ) => {
    //
    let ciSysId: string | null;
    let connectedCiSysId: string | null;
    let connectedPortSysId: string | null;
    let grPortMain: unknown | null = null;
    let networkAdapterSysId: string | null;
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
          ciSysId,
          connectedCiSysId,
          connectedPortSysId,
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
  const areNetworkAdaptersAlreadyFound = (
    networkAdaptersToCheck: Record<string, boolean>,
  ) => {
    //
    const notFound: Array<string> = [];
    //
    Object.keys(networkAdaptersToCheck).forEach((testNetworkAdapter) => {
      // if the connected adapter is not already in the adapterData
      if (!Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapter)) {
        // store for a second gliderecord query on the network adapter table
        notFound.push(testNetworkAdapter);
      }
    });
    return notFound;
  };
  const networkAdapterSearch = () => {
    //
    let moreAdaptersNeeded: Array<string> = [];
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
  const main = () => {
    networkAdapterSearch();
    getValidCis();
    adapterLoop();
  };
  //
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
let foo: Record<string, ReportData> = {};
//
const checkSysId = (
  testSysId: unknown,
) => {
  if (typeof testSysId === 'string') {
    if (testSysId !== '') {
      return testSysId;
    }
  }
  return null;
};
const getTestData = () => {
  //
  let grTestAdapters: unknown | null = null;
  const testAdapterData: Array<string> = [];
  let checkAdapterSysId: string | null;
  //
  // @ts-ignore
  grTestAdapters = new GlideRecord('cmdb_ci_network_adapter');
  // @ts-ignore
  grTestAdapters.addEncodedQuery('cmdb_ciISHasSysId^u_switchISHasSysId^u_switchportISHasSysId');
  // @ts-ignore
  grTestAdapters.setLimit(10);
  // @ts-ignore
  grTestAdapters.query();
  // @ts-ignore
  while (grTestAdapters.next()) {
    // @ts-ignore
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
const showReport = () => {
  let reportText = '';
  reportText += '<pre>';
  reportText += JSON.stringify(foo, null, 2);
  reportText += '</pre>';
  // @ts-ignore
  gs.print(reportText);
};
const networkAdapterSysIdArray = getTestData();
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
foo = magnusCmdbCiNetworkAdapterReport(networkAdapterSysIdArray);
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
