// eslint-disable-next-line
var cmdbCiNetworkAdapterTester = function (networkAdapterSysIdArray) {
  //
  var report = {};
  // globals
  var adapterDataMain = {};
  var adapterDataConnected = {};
  var uniqueCiSysIds = {};
  var uniqueConnectedPorts = {};
  var validCiSysId = {};
  //
  //
  //
  var createReport = function (reportResult) {
    //
    var reportMessage = '';
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
  var testRemoteFieldsAlreadyCorrectlyFilled = function (adapterMainSysId, connectedPortSysId) {
    //
    var foundConnected = null;
    var foundMain = null;
    var testPassed = false;
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
      adapterMainSysId: adapterMainSysId,
      testId: '00000090',
      testPassed: testPassed,
      testInfo: 'testRemoteFieldsAlreadyCorrectlyFilled',
    });
  };
  var testMainConnectedCiDoesNotMatchRemoteCi = function (adapterMainSysId, connectedPortSysId) {
    //
    var foundConnected = null;
    var foundMain = null;
    var testPassed = false;
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
      adapterMainSysId: adapterMainSysId,
      testId: '00000080',
      testPassed: testPassed,
      testInfo: 'testMainConnectedCiDoesNotMatchRemoteCi',
    });
  };
  var testConnectedPortNotOnConnectedCi = function (adapterMainSysId, connectedCISysId, connectedPortSysId) {
    //
    var connectedPortCiSysId = null;
    var testPassed = false;
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
      adapterMainSysId: adapterMainSysId,
      testId: '00000070',
      testPassed: testPassed,
      testInfo: 'testConnectedPortNotOnConnectedCi',
    });
  };
  var testMainConnectedCiInvalid = function (adapterMainSysId, connectedCISysId) {
    //
    var testPassed = false;
    //
    if (connectedCISysId !== null) {
      if (Object.prototype.hasOwnProperty.call(validCiSysId, connectedCISysId)) {
        testPassed = true;
      }
    }
    createReport({
      adapterMainSysId: adapterMainSysId,
      testId: '00000060',
      testPassed: testPassed,
      testInfo: 'testMainConnectedCiInvalid',
    });
  };
  var testConnectedPortNotFound = function (adapterMainSysId, connectedPortSysId) {
    //
    var testPassed = false;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        testPassed = true;
      }
    }
    createReport({
      adapterMainSysId: adapterMainSysId,
      testId: '00000050',
      testPassed: testPassed,
      testInfo: 'testConnectedPortNotFound',
    });
  };
  var testRemotePortCiInvalid = function (adapterMainSysId, connectedPortSysId) {
    //
    var findPortCi = null;
    var testPassed = false;
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
      adapterMainSysId: adapterMainSysId,
      testId: '00000040',
      testPassed: testPassed,
      testInfo: 'testRemotePortCiInvalid',
    });
  };
  var testRemotePortCiMissing = function (adapterMainSysId, connectedPortSysId) {
    //
    var findPortCi = null;
    var testPassed = false;
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
      adapterMainSysId: adapterMainSysId,
      testId: '00000030',
      testPassed: testPassed,
      testInfo: 'testRemotePortCiMissing',
    });
  };
  var testMainConnectedPortValid = function (adapterMainSysId, connectedPortSysId) {
    //
    var testPassed = false;
    //
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        testPassed = true;
      }
    }
    createReport({
      adapterMainSysId: adapterMainSysId,
      testId: '00000020',
      testPassed: testPassed,
      testInfo: 'testMainConnectedPortValid',
    });
  };
  var testMainCiValid = function (adapterMainSysId, ciSysId) {
    //
    var testPassed = false;
    //
    if (ciSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(validCiSysId, ciSysId)) {
        testPassed = true;
      }
    }
    createReport({
      adapterMainSysId: adapterMainSysId,
      testId: '00000010',
      testPassed: testPassed,
      testInfo: 'testMainCiValid',
    });
  };
  var testAdapterMain = function (adapterMainSysId) {
    var ciSysId = adapterDataMain[adapterMainSysId].ciSysId;
    var connectedCISysId = adapterDataMain[adapterMainSysId].connectedCISysId;
    var connectedPortSysId = adapterDataMain[adapterMainSysId].connectedPortSysId;
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
    // test if the  'connected ci' field on the main adapter
    // does not match the ci of the connected port
    testMainConnectedCiDoesNotMatchRemoteCi(adapterMainSysId, connectedPortSysId);
    // test if both fields on the connected port are already filled correctly
    // this is not an error. this is just something that does not need to be done
    testRemoteFieldsAlreadyCorrectlyFilled(adapterMainSysId, connectedPortSysId);
  };
  var adapterLoop = function () {
    Object.keys(adapterDataMain).forEach(function (adapterMainSysId) {
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
  var getNetworkAdaptersconnected = function () {
    //
    var adapterMainSysId;
    var ciSysId;
    var connectedCISysId;
    var connectedPortSysId;
    var grPortConnected = null;
    //
    // @ts-ignore
        grPortConnected = new GlideRecord('cmdb_ci_network_adapter'); 
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
          ciSysId: ciSysId,
          connectedCISysId: connectedCISysId,
          connectedPortSysId: connectedPortSysId,
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
  var getNetworkAdaptersMain = function () {
    var adapterMainSysId;
    var ciSysId;
    var connectedCISysId;
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
      connectedCISysId = checkString(grPortMain.getValue('u_switch'));
      // @ts-ignore
      connectedPortSysId = checkString(grPortMain.getValue('u_switchport'));
      if (adapterMainSysId !== null) {
        adapterDataMain[adapterMainSysId] = {
          ciSysId: ciSysId,
          connectedCISysId: connectedCISysId,
          connectedPortSysId: connectedPortSysId,
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
  var showReport = function () {
    var reportText = '';
    reportText += '<pre>';
    reportText += JSON.stringify(report, null, 2);
    reportText += '</pre>';
    // @ts-ignore
        gs.print(reportText); 
  };
  var main = function () {
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
var networkAdapterSysIdArray = [
  '0362cf9a2bc21ec054a41bc5a8da1574',
  '1536add64f69a200d7de15924210c7f1',
  '07dd9afc13c9845019ed30128144b06d',
];
cmdbCiNetworkAdapterTester(networkAdapterSysIdArray);
