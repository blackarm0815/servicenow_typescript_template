// eslint-disable-next-line
var cmdbCiNetworkAdapterTester = function (networkAdapterSysIdArray) {
  // globals
  var adapterDataMain = {};
  var adapterDataConnected = {};
  var uniqueCiSysIds = {};
  var uniqueConnectedPorts = {};
  var validCiSysId = {};
  var reportData = {};
  //
  //
  //
  //
  //
  var testRemoteFieldsAlreadyCorrectlyFilled = function (adapterMainSysId, connectedPortSysId) {
    //
    var foundConnected = null;
    var foundMain = null;
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
  var testMainConnectedCiDoesNotMatchRemoteCi = function (adapterMainSysId, connectedPortSysId) {
    //
    var foundConnected = null;
    var foundMain = null;
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
  var testConnectedPortOnConnectedCi = function (connectedCISysId, connectedPortSysId) {
    //
    var connectedPortCiSysId = null;
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
  var testMainConnectedCiNotEmpty = function (connectedCISysId) {
    if (connectedCISysId !== null) {
      return true;
    }
    return false;
  };
  var testMainConnectedCiValid = function (connectedCISysId) {
    if (connectedCISysId !== null) {
      if (Object.prototype.hasOwnProperty.call(validCiSysId, connectedCISysId)) {
        return true;
      }
    }
    return false;
  };
  var testConnectedPortNotEmpty = function (connectedPortSysId) {
    if (connectedPortSysId !== null) {
      return true;
    }
    return false;
  };
  var testConnectedPortValid = function (connectedPortSysId) {
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        return true;
      }
    }
    return false;
  };
  var testRemotePortCiInvalid = function (connectedPortSysId) {
    //
    var findPortCi = null;
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
  var testRemotePortCiMissing = function (connectedPortSysId) {
    //
    var findPortCi = null;
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
  var testMainConnectedPortValid = function (connectedPortSysId) {
    if (connectedPortSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(adapterDataConnected, connectedPortSysId)) {
        return true;
      }
    }
    return false;
  };
  var testMainCiValid = function (ciSysId) {
    if (ciSysId !== null) {
      if (Object.prototype.hasOwnProperty.call(validCiSysId, ciSysId)) {
        return true;
      }
    }
    return false;
  };
  var testAdapterMain = function (adapterMainSysId) {
    //
    var ciSysId = adapterDataMain[adapterMainSysId].ciSysId;
    var connectedCISysId = adapterDataMain[adapterMainSysId].connectedCISysId;
    var connectedPortSysId = adapterDataMain[adapterMainSysId].connectedPortSysId;
    var url = '';
    //
    // get the web url
    // @ts-ignore
        url += gs.getProperty('glide.servlet.uri'); 
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
      urlNetworkAdapter: ''.concat(url, 'cmdb_ci_network_adapter.do?sys_id=').concat(adapterMainSysId),
    };
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
  var main = function () {
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
