// interface ReportData {
//   testConnectedPortCiNotEmpty: boolean;
//   testConnectedPortCiValid: boolean;
//   testConnectedPortConnectedCiNotEmpty: boolean;
//   testConnectedPortConnectedCiValid: boolean;
//   testConnectedPortConnectedPortNotEmpty: boolean;
//   testConnectedPortConnectedPortValid: boolean;
//   testConnectedPortFieldsAlreadyMatchMainFields: boolean;
//   testMainCiNotEmpty: boolean;
//   testMainCiValid: boolean;
//   testMainConnectedCiMatchesConnectedPortCi: boolean;
//   testMainConnectedCiNotEmpty: boolean;
//   testMainConnectedCiValid: boolean;
//   testMainConnectedPortNotEmpty: boolean;
//   testMainConnectedPortValid: boolean;
//   urlNetworkAdapter: string,
// }
interface ReportData {
  testConnectedPortCiNotEmpty: boolean;
  testConnectedPortCiValid: boolean;
  testConnectedPortConnectedCiNotEmpty: boolean;
  testConnectedPortConnectedCiValid: boolean;
  testConnectedPortConnectedPortNotEmpty: boolean;
  testConnectedPortConnectedPortValid: boolean;
  testConnectedPortFieldsAlreadyMatchMainFields: boolean;
  testMainCiNotEmpty: boolean;
  testMainCiValid: boolean;
  testMainConnectedCiMatchesConnectedPortCi: boolean;
  testMainConnectedCiNotEmpty: boolean;
  testMainConnectedCiValid: boolean;
  testMainConnectedPortNotEmpty: boolean;
  testMainConnectedPortValid: boolean;
  urlNetworkAdapter: string,
}
// eslint-disable-next-line
const cmdbCiNetworkAdapterTester = (networkAdapterSysIdArray: Array<string>) => {
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
  const testMainConnectedCiValid = (
    adapterMainSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
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
  const testMainConnectedCiNotEmpty = (
    adapterMainSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
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
  const testMainCiValid = (
    adapterMainSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
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
  const testMainCiNotEmpty = (
    adapterMainSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
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
  const testMainConnectedPortValid = (
    adapterMainSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
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
  const testMainConnectedPortNotEmpty = (
    adapterMainSysId: string,
  ) => {
    //
    let foundMain: NetworkAdapterData | null = null;
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
  const testMainConnectedCiMatchesConnectedPortCi = (
    adapterMainSysId: string,
  ) => {
    //
    let foundConnected: NetworkAdapterData | null = null;
    let foundMain: NetworkAdapterData | null = null;
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
  const testAdapterMain = (
    adapterMainSysId: string,
  ) => {
    //
    let url = '';
    //
    // @ts-ignore
    url += gs.getProperty('glide.servlet.uri'); // eslint-disable-line
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
      urlNetworkAdapter: `${url}cmdb_ci_network_adapter.do?sys_id=${adapterMainSysId}`,
    };
  };
  const adapterLoop = () => {
    networkAdapterSysIdArray.forEach((adapterMainSysId) => {
      testAdapterMain(adapterMainSysId);
    });
  };
  const checkString = (
    testVariable: unknown,
  ) => {
    if (typeof testVariable === 'string') {
      if (testVariable !== '') {
        return testVariable;
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
    grHardware = new GlideRecord('cmdb_ci'); // eslint-disable-line
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
    grPortConnected = new GlideRecord('cmdb_ci_network_adapter'); // eslint-disable-line
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
    let adapterMainSysId: string | null;
    let ciSysId: string | null;
    let connectedCiSysId: string | null;
    let connectedPortSysId: string | null;
    let grPortMain: unknown | null = null;
    //
    // @ts-ignore
    grPortMain = new GlideRecord('cmdb_ci_network_adapter'); // eslint-disable-line
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
const checkString = (
  testVariable: unknown,
) => {
  if (typeof testVariable === 'string') {
    if (testVariable !== '') {
      return testVariable;
    }
  }
  return null;
};
const getTestData = () => {
  //
  let grTestAdapters: unknown;
  const testAdapterData: Array<string> = [];
  let checkAdapterSysId: string | null;
  //
  // @ts-ignore
  grTestAdapters = new GlideRecord('cmdb_ci_network_adapter'); // eslint-disable-line
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
const showReport = () => {
  let reportText = '';
  reportText += '<pre>';
  reportText += JSON.stringify(foo, null, 2);
  reportText += '</pre>';
  // @ts-ignore
  gs.print(reportText); // eslint-disable-line
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
