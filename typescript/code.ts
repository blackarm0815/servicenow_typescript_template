interface ReportResult {
  adapterMainSysId: string;
  testId: string;
  testInfo: string;
  testPassed: boolean;
}
// eslint-disable-next-line
const cmdbCiNetworkAdapterTester = (networkAdapterSysIdArray: Array<string>) => {
  //
  const report: Record<string, Array<string>> = {};
  interface Main {
    ciSysId: string | null;
    connectedCISysId: string | null;
    connectedPortSysId: string | null;
  }
  // globals
  const adapterDataMain: Record<string, Main> = {};
  const adapterDataConnected: Record<string, Main> = {};
  const uniqueCiSysIds: Record<string, boolean> = {};
  const uniqueConnectedPorts: Record<string, boolean> = {};
  const validCiSysId: Record<string, boolean> = {};
  //
  //
  //
  const createReport = (
    reportResult: ReportResult,
  ) => {
    //
    let reportMessage = '';
    //
    // create the network adapter sys_id key if it does not exist
    if (!Object.prototype.hasOwnProperty.call(report, reportResult.adapterMainSysId)) {
      report[reportResult.adapterMainSysId] = [];
    }
    reportMessage += reportResult.testId;
    reportMessage += ' ';
    if (reportResult.testPassed) {
      reportMessage += 'true';
    } else {
      reportMessage += 'false';
    }
    reportMessage += ' ';
    reportMessage += reportResult.testInfo;
    report[reportResult.adapterMainSysId].push(reportMessage);
  };
  const testRemoteFieldsAlreadyCorrectlyFilled = (
    adapterMainSysId: string,
    connectedPortSysId: string | null,
  ) => {
    //
    let foundConnected: Main | null = null;
    let foundMain: Main | null = null;
    let testPassed = false;
    //
    if (connectedPortSysId !== null) {
      foundConnected = adapterDataConnected[connectedPortSysId];
      foundMain = adapterDataMain[adapterMainSysId];
      if (foundConnected !== undefined && foundMain !== undefined) {
        // proceed if either field needs fixing
        if (foundConnected.connectedCISysId !== foundMain.ciSysId || foundConnected.connectedPortSysId !== adapterMainSysId) {
          testPassed = true;
        }
      }
    }
    // both fields are already correctly filled, so no need to proceed
    createReport({
      adapterMainSysId,
      testId: '00000090',
      testPassed,
      testInfo: 'testRemoteFieldsAlreadyCorrectlyFilled',
    });
  };
  const testMainConnectedCiDoesNotMatchRemoteCi = (
    adapterMainSysId: string,
    connectedPortSysId: string | null,
  ) => {
    //
    let foundConnected: Main | null = null;
    let foundMain: Main | null = null;
    let testPassed = false;
    //
    if (connectedPortSysId !== null) {
      foundConnected = adapterDataConnected[connectedPortSysId];
      foundMain = adapterDataMain[adapterMainSysId];
      if (foundConnected !== undefined && foundMain !== undefined) {
        // ci on the connected port should match the Main ci
        if (foundConnected.ciSysId === foundMain.connectedCISysId) {
          testPassed = true;
        }
      }
    }
    createReport({
      adapterMainSysId,
      testId: '00000080',
      testPassed,
      testInfo: 'testMainConnectedCiDoesNotMatchRemoteCi',
    });
  };
  const testConnectedPortNotOnConnectedCi = (
    adapterMainSysId: string,
    connectedCISysId: string | null,
    connectedPortSysId: string | null,
  ) => {
    //
    let connectedPortCiSysId: string | null = null;
    let testPassed = false;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        connectedPortCiSysId = adapterDataConnected[connectedPortSysId].ciSysId;
        if (connectedPortCiSysId === connectedCISysId) {
          testPassed = true;
        }
      }
    }
    createReport({
      adapterMainSysId,
      testId: '00000070',
      testPassed,
      testInfo: 'testConnectedPortNotOnConnectedCi',
    });
  };
  const testMainConnectedCiInvalid = (
    adapterMainSysId: string,
    connectedCISysId: string | null,
  ) => {
    //
    let testPassed = false;
    //
    if (connectedCISysId !== null) {
      if (Object.prototype.hasOwnProperty.call(validCiSysId, connectedCISysId)) {
        testPassed = true;
      }
    }
    createReport({
      adapterMainSysId,
      testId: '00000060',
      testPassed,
      testInfo: 'testMainConnectedCiInvalid',
    });
  };
  const testConnectedPortNotFound = (
    adapterMainSysId: string,
    connectedPortSysId: string | null,
  ) => {
    //
    let testPassed = false;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        testPassed = true;
      }
    }
    createReport({
      adapterMainSysId,
      testId: '00000050',
      testPassed,
      testInfo: 'testConnectedPortNotFound',
    });
  };
  const testRemotePortCiInvalid = (
    adapterMainSysId: string,
    connectedPortSysId: string | null,
  ) => {
    //
    let findPortCi: string | null = null;
    let testPassed = false;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        findPortCi = adapterDataConnected[connectedPortSysId].ciSysId;
        if (findPortCi !== null) {
          if (Object.prototype.hasOwnProperty.call(validCiSysId, findPortCi)) {
            testPassed = true;
          }
        }
      }
    }
    createReport({
      adapterMainSysId,
      testId: '00000040',
      testPassed,
      testInfo: 'testRemotePortCiInvalid',
    });
  };
  const testRemotePortCiMissing = (
    adapterMainSysId: string,
    connectedPortSysId: string | null,
  ) => {
    //
    let findPortCi: string | null = null;
    let testPassed = false;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        findPortCi = adapterDataConnected[connectedPortSysId].ciSysId;
        if (findPortCi !== null) {
          testPassed = true;
        }
      }
    }
    createReport({
      adapterMainSysId,
      testId: '00000030',
      testPassed,
      testInfo: 'testRemotePortCiMissing',
    });
  };
  const testMainConnectedPortValid = (
    adapterMainSysId: string,
    connectedPortSysId: string | null,
  ) => {
    //
    let testPassed = false;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        testPassed = true;
      }
    }
    createReport({
      adapterMainSysId,
      testId: '00000020',
      testPassed,
      testInfo: 'testMainConnectedPortValid',
    });
  };
  const testMainCiValid = (
    adapterMainSysId: string,
    ciSysId: string | null,
  ) => {
    //
    let testPassed = false;
    //
    if (ciSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(validCiSysId, ciSysId)) {
        testPassed = true;
      }
    }
    createReport({
      adapterMainSysId,
      testId: '00000010',
      testPassed,
      testInfo: 'testMainCiValid',
    });
  };
  const testAdapterMain = (
    adapterMainSysId: string,
  ) => {
    const ciSysId = adapterDataMain[adapterMainSysId].ciSysId;
    const connectedCISysId = adapterDataMain[adapterMainSysId].connectedCISysId;
    const connectedPortSysId = adapterDataMain[adapterMainSysId].connectedPortSysId;
    // test if ci is invalid
    testMainCiValid(adapterMainSysId, ciSysId);
    // test if the connected port reference is invalid
    testMainConnectedPortValid(adapterMainSysId, connectedPortSysId);
    // test if the connected ci reference is invalid
    testMainConnectedCiInvalid(adapterMainSysId, connectedCISysId);
    // test if connected port not found
    testConnectedPortNotFound(adapterMainSysId, connectedPortSysId);
    // test if remote port ci is missing
    testRemotePortCiMissing(adapterMainSysId, connectedPortSysId);
    // test if remote port ci is not valid
    testRemotePortCiInvalid(adapterMainSysId, connectedPortSysId);
    // test if connected port is not on connected ci
    testConnectedPortNotOnConnectedCi(adapterMainSysId, connectedCISysId, connectedPortSysId);
    // test if the  "connected ci" field on the main adapter
    // does not match the ci of the connected port
    testMainConnectedCiDoesNotMatchRemoteCi(adapterMainSysId, connectedPortSysId);
    // test if both fields on the connected port are already filled correctly
    // this is not an error. this is just something that does not need to be done
    testRemoteFieldsAlreadyCorrectlyFilled(adapterMainSysId, connectedPortSysId);
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
  const showReport = () => {
    let reportText = '';
    reportText += '<pre>';
    reportText += JSON.stringify(report, null, 2);
    reportText += '</pre>';
    // @ts-ignore
    gs.print(reportText); // eslint-disable-line
  };
  const main = () => {
    getNetworkAdaptersMain();
    getNetworkAdaptersconnected();
    getValidCis();
    adapterLoop();
    showReport();
  };
  main();
};
// end of script include
// remove everything below this before putting it in the script include
const networkAdapterSysIdArray = [
  '0362cf9a2bc21ec054a41bc5a8da1574',
  '1536add64f69a200d7de15924210c7f1',
  '07dd9afc13c9845019ed30128144b06d',
];
cmdbCiNetworkAdapterTester(networkAdapterSysIdArray);
