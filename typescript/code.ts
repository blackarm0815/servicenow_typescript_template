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
  testRemotePortCiHasSysId: string;
  testRemotePortCiHasValidSysId: string;
  testRemotePortConnectedCiHasSysId: string;
  testRemotePortConnectedCiHasValidSysId: string;
  testRemotePortConnectedPortHasSysId: string;
  testRemotePortConnectedPortHasValidSysId: string;
  testRemotePortFieldsMatchMainFields: string;
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
  const adapterData: Record<string, NetworkAdapterData> = {};
  const uniqueCiSysIds: Record<string, boolean> = {};
  const uniqueConnectedPorts: Record<string, boolean> = {};
  const validCiSysId: Record<string, boolean> = {};
  const reportData: Record<string, ReportData> = {};
  //
  //
  //
  //
  // const testRemotePortFieldsMatchMainFields = (
  //   testNetworkAdapterSysId: string,
  // ) => {
  //   //
  //   let foundConnected: NetworkAdapterData | null = null;
  //   let foundMain: NetworkAdapterData | null = null;
  //   //
  //   if (connectedPortSysId !== null) {
  //     foundConnected = adapterData[connectedPortSysId];
  //     foundMain = adapterData[testNetworkAdapterSysId];
  //     if (foundConnected !== undefined && foundMain !== undefined) {
  //       // proceed if either field needs fixing
  //       if (foundConnected.connectedCiSysId !== foundMain.ciSysId || foundConnected.connectedPortSysId !== testNetworkAdapterSysId) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };
  const testMainPortConnectedCiHasValidSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMain = adapterData[testNetworkAdapterSysId];
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
  const testMainPortConnectedCiHasSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMain = adapterData[testNetworkAdapterSysId];
      // does the ci have a reference
      if (foundMain.connectedCiSysId !== null) {
        return true;
      }
    }
    return false;
  };
  const testMainPortCiHasValidSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMain = adapterData[testNetworkAdapterSysId];
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
  const testMainPortCiHasSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMain = adapterData[testNetworkAdapterSysId];
      // does the ci have a reference
      if (foundMain.ciSysId !== null) {
        return true;
      }
    }
    return false;
  };
  const testMainPortConnectedPortHasValidSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMain = adapterData[testNetworkAdapterSysId];
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
  const testMainPortConnectedPortHasSysId = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMain = adapterData[testNetworkAdapterSysId];
      // does the connected port have a reference
      if (foundMain.connectedPortSysId !== null) {
        return true;
      }
    }
    return false;
  };
  const testMainPortConnectedPortIsOnConnectedCi = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundConnected: NetworkAdapterData | null = null;
    let foundMain: NetworkAdapterData | null = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was the network adapter sys_id even found)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMain = adapterData[testNetworkAdapterSysId];
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
  const testRemotePortActuallyExists = (
    testNetworkAdapterSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
    //
    // does testNetworkAdapterSysId exist in adapterData (was it found in cmdb_ci_network_adapter)
    if (Object.prototype.hasOwnProperty.call(adapterData, testNetworkAdapterSysId)) {
      foundMain = adapterData[testNetworkAdapterSysId];
      // does the connected port have a reference
      if (foundMain.connectedPortSysId !== null) {
        // does the connected port exist in adapterData (was it found in cmdb_ci_network_adapter)
        if (Object.prototype.hasOwnProperty.call(adapterData, foundMain.connectedPortSysId)) {
          return true;
        }
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
      testRemotePortCiHasSysId: 'not coded yet',
      testRemotePortCiHasValidSysId: 'not coded yet',
      testRemotePortConnectedCiHasSysId: 'not coded yet',
      testRemotePortConnectedCiHasValidSysId: 'not coded yet',
      testRemotePortConnectedPortHasSysId: 'not coded yet',
      testRemotePortConnectedPortHasValidSysId: 'not coded yet',
      testRemotePortFieldsMatchMainFields: 'not coded yet',
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
  const getNetworkAdaptersconnected = (
    connectedAdaptersNeeded: Array<string>,
  ) => {
    //
    let adapterRemoteSysId: string | null;
    let ciSysId: string | null;
    let connectedCiSysId: string | null;
    let connectedPortSysId: string | null;
    let grPortConnected: unknown | null = null;
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
      adapterRemoteSysId = checkSysId(grPortConnected.getUniqueValue());
      // @ts-ignore
      ciSysId = checkSysId(grPortConnected.getValue('cmdb_ci'));
      // @ts-ignore
      connectedCiSysId = checkSysId(grPortConnected.getValue('u_switch'));
      // @ts-ignore
      connectedPortSysId = checkSysId(grPortConnected.getValue('u_switchport'));
      if (adapterRemoteSysId !== null) {
        adapterData[adapterRemoteSysId] = {
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
      }
    }
  };
  const testConnectedAdaptersNeeded = () => {
    //
    const connectedAdaptersNeeded: Array<string> = [];
    //
    Object.keys(uniqueConnectedPorts).forEach((connectedPortSysId) => {
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
  const getNetworkAdaptersMain = () => {
    let testNetworkAdapterSysId: string | null;
    let ciSysId: string | null;
    let connectedCiSysId: string | null;
    let connectedPortSysId: string | null;
    let grPortMain: unknown | null = null;
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
      testNetworkAdapterSysId = checkSysId(grPortMain.getUniqueValue());
      // @ts-ignore
      ciSysId = checkSysId(grPortMain.getValue('cmdb_ci'));
      // @ts-ignore
      connectedCiSysId = checkSysId(grPortMain.getValue('u_switch'));
      // @ts-ignore
      connectedPortSysId = checkSysId(grPortMain.getValue('u_switchport'));
      if (testNetworkAdapterSysId !== null) {
        adapterData[testNetworkAdapterSysId] = {
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
  const main = () => {
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
