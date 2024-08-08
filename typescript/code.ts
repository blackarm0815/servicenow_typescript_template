// interface ReportData {
//   testConnectedPortOnConnectedCi: boolean;
//   testConnectedPortValid: boolean;
//   testMainCiValid: boolean;
//   testMainConnectedCiDoesNotMatchRemoteCi: boolean;
//   testMainConnectedCiValid: boolean;
//   testMainConnectedPortValid: boolean;
//   testRemoteFieldsAlreadyCorrectlyFilled: boolean;
//   testRemotePortCiInvalid: boolean;
//   testRemotePortCiMissing: boolean;
// }
interface ReportData {
  testConnectedPortNotEmpty: boolean;
  testConnectedPortOnConnectedCi: boolean;
  testConnectedPortValid: boolean;
  testMainCiValid: boolean;
  testMainConnectedCiDoesNotMatchRemoteCi: boolean;
  testMainConnectedCiNotEmpty: boolean;
  testMainConnectedCiValid: boolean;
  testMainConnectedPortValid: boolean;
  testRemoteFieldsAlreadyCorrectlyFilled: boolean;
  testRemotePortCiInvalid: boolean;
  testRemotePortCiMissing: boolean;
  urlNetworkAdapter: string,
}
// eslint-disable-next-line
const cmdbCiNetworkAdapterTester = (networkAdapterSysIdArray: Array<string>) => {
  //
  interface NetworkAdapterData {
    ciSysId: string | null;
    connectedCISysId: string | null;
    connectedPortSysId: string | null;
  }
  // globals
  const adapterDataMain: Record<string, NetworkAdapterData> = {};
  const adapterDataConnected: Record<string, NetworkAdapterData> = {};
  const uniqueCiSysIds: Record<string, boolean> = {};
  const uniqueConnectedPorts: Record<string, boolean> = {};
  const validCiSysId: Record<string, boolean> = {};
  const reportData: Record<string, ReportData> = {};
  //
  //
  //
  //
  //
  const testRemoteFieldsAlreadyCorrectlyFilled = (
    adapterMainSysId: string,
    connectedPortSysId: string | null,
  ) => {
    //
    let foundConnected: NetworkAdapterData | null = null;
    let foundMain: NetworkAdapterData | null = null;
    //
    if (connectedPortSysId !== null) {
      foundConnected = adapterDataConnected[connectedPortSysId];
      foundMain = adapterDataMain[adapterMainSysId];
      if (foundConnected !== undefined && foundMain !== undefined) {
        // proceed if either field needs fixing
        if (foundConnected.connectedCISysId !== foundMain.ciSysId || foundConnected.connectedPortSysId !== adapterMainSysId) {
          return true;
        }
      }
    }
    return false;
  };
  const testMainConnectedCiDoesNotMatchRemoteCi = (
    adapterMainSysId: string,
    connectedPortSysId: string | null,
  ) => {
    //
    let foundConnected: NetworkAdapterData | null = null;
    let foundMain: NetworkAdapterData | null = null;
    //
    if (connectedPortSysId !== null) {
      foundConnected = adapterDataConnected[connectedPortSysId];
      foundMain = adapterDataMain[adapterMainSysId];
      if (foundConnected !== undefined && foundMain !== undefined) {
        // ci on the connected port should match the Main ci
        if (foundConnected.ciSysId === foundMain.connectedCISysId) {
          return true;
        }
      }
    }
    return false;
  };
  const testConnectedPortOnConnectedCi = (
    connectedCISysId: string | null,
    connectedPortSysId: string | null,
  ) => {
    //
    let connectedPortCiSysId: string | null = null;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        connectedPortCiSysId = adapterDataConnected[connectedPortSysId].ciSysId;
        if (connectedPortCiSysId === connectedCISysId) {
          return true;
        }
      }
    }
    return false;
  };
  const testMainConnectedCiNotEmpty = (
    connectedCISysId: string | null,
  ) => {
    if (connectedCISysId !== null) {
      return true;
    }
    return false;
  };
  const testMainConnectedCiValid = (
    connectedCISysId: string | null,
  ) => {
    if (connectedCISysId !== null) {
      if (Object.prototype.hasOwnProperty.call(validCiSysId, connectedCISysId)) {
        return true;
      }
    }
    return false;
  };
  const testConnectedPortNotEmpty = (
    connectedPortSysId: string | null,
  ) => {
    if (connectedPortSysId !== null) {
      return true;
    }
    return false;
  };
  const testConnectedPortValid = (
    connectedPortSysId: string | null,
  ) => {
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        return true;
      }
    }
    return false;
  };
  const testRemotePortCiInvalid = (
    connectedPortSysId: string | null,
  ) => {
    //
    let findPortCi: string | null = null;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        findPortCi = adapterDataConnected[connectedPortSysId].ciSysId;
        if (findPortCi !== null) {
          if (Object.prototype.hasOwnProperty.call(validCiSysId, findPortCi)) {
            return true;
          }
        }
      }
    }
    return false;
  };
  const testRemotePortCiMissing = (
    connectedPortSysId: string | null,
  ) => {
    //
    let findPortCi: string | null = null;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        findPortCi = adapterDataConnected[connectedPortSysId].ciSysId;
        if (findPortCi !== null) {
          return true;
        }
      }
    }
    return false;
  };
  const testMainConnectedPortValid = (
    connectedPortSysId: string | null,
  ) => {
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        return true;
      }
    }
    return false;
  };
  const testMainCiValid = (
    ciSysId: string | null,
  ) => {
    if (ciSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(validCiSysId, ciSysId)) {
        return true;
      }
    }
    return false;
  };
  const testAdapterMain = (
    adapterMainSysId: string,
  ) => {
    //
    const ciSysId = adapterDataMain[adapterMainSysId].ciSysId;
    const connectedCISysId = adapterDataMain[adapterMainSysId].connectedCISysId;
    const connectedPortSysId = adapterDataMain[adapterMainSysId].connectedPortSysId;
    let url = '';
    //
    // get the web url
    // @ts-ignore
    url += gs.getProperty('glide.servlet.uri'); // eslint-disable-line
    //
    //
    reportData[adapterMainSysId] = {
      testConnectedPortNotEmpty: testConnectedPortNotEmpty(connectedPortSysId),
      testConnectedPortOnConnectedCi: testConnectedPortOnConnectedCi(connectedCISysId, connectedPortSysId),
      testConnectedPortValid: testConnectedPortValid(connectedPortSysId),
      testMainCiValid: testMainCiValid(ciSysId),
      testMainConnectedCiDoesNotMatchRemoteCi: testMainConnectedCiDoesNotMatchRemoteCi(adapterMainSysId, connectedPortSysId),
      testMainConnectedCiNotEmpty: testMainConnectedCiNotEmpty(connectedCISysId),
      testMainConnectedCiValid: testMainConnectedCiValid(connectedCISysId),
      testMainConnectedPortValid: testMainConnectedPortValid(connectedPortSysId),
      testRemoteFieldsAlreadyCorrectlyFilled: testRemoteFieldsAlreadyCorrectlyFilled(adapterMainSysId, connectedPortSysId),
      testRemotePortCiInvalid: testRemotePortCiInvalid(connectedPortSysId),
      testRemotePortCiMissing: testRemotePortCiMissing(connectedPortSysId),
      urlNetworkAdapter: `${url}cmdb_ci_network_adapter.do?sys_id=${adapterMainSysId}`,
    };
  };
  const adapterLoop = () => {
    Object.keys(adapterDataMain).forEach((adapterMainSysId) => {
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
  const getNetworkAdaptersconnected = () => {
    //
    let adapterMainSysId: string | null;
    let ciSysId: string | null;
    let connectedCISysId: string | null;
    let connectedPortSysId: string | null;
    let grPortConnected: unknown | null = null;
    //
    // @ts-ignore
    grPortConnected = new GlideRecord('cmdb_ci_network_adapter'); // eslint-disable-line
    // @ts-ignore
    // grPortConnected.addEncodedQuery('cmdb_ciISNOTEMPTY');
    // @ts-ignore
    grPortConnected.addQuery('sys_id', 'IN', Object.keys(uniqueConnectedPorts));
    // @ts-ignore
    grPortConnected.query();
    // @ts-ignore
    while (grPortConnected.next()) {
      // @ts-ignore
      adapterMainSysId = checkString(grPortConnected.getUniqueValue());
      // @ts-ignore
      ciSysId = checkString(grPortConnected.getValue('cmdb_ci'));
      // @ts-ignore
      connectedCISysId = checkString(grPortConnected.getValue('u_switch'));
      // @ts-ignore
      connectedPortSysId = checkString(grPortConnected.getValue('u_switchport'));
      if (adapterMainSysId !== null) {
        adapterDataConnected[adapterMainSysId] = {
          ciSysId,
          connectedCISysId,
          connectedPortSysId,
        };
        // uniqueCiSysIds will be tested for validity
        if (ciSysId !== null) {
          uniqueCiSysIds[ciSysId] = true;
        }
        if (connectedCISysId !== null) {
          uniqueCiSysIds[connectedCISysId] = true;
        }
      }
    }
  };
  const getNetworkAdaptersMain = () => {
    let adapterMainSysId: string | null;
    let ciSysId: string | null;
    let connectedCISysId: string | null;
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
      connectedCISysId = checkString(grPortMain.getValue('u_switch'));
      // @ts-ignore
      connectedPortSysId = checkString(grPortMain.getValue('u_switchport'));
      if (adapterMainSysId !== null) {
        adapterDataMain[adapterMainSysId] = {
          ciSysId,
          connectedCISysId,
          connectedPortSysId,
        };
        // uniqueCiSysIds will be tested for validity
        if (ciSysId !== null) {
          uniqueCiSysIds[ciSysId] = true;
        }
        if (connectedCISysId !== null) {
          uniqueCiSysIds[connectedCISysId] = true;
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
    getNetworkAdaptersconnected();
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
