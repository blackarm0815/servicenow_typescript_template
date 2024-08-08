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
        grHardware = new GlideRecord('cmdb_ci'); 
    grHardware.addQuery('sys_id', 'IN', Object.keys(uniqueCiSysIds));
    grHardware.query();
    while (grHardware.next()) {
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
        grPortConnected = new GlideRecord('cmdb_ci_network_adapter'); 
    // grPortConnected.addEncodedQuery('cmdb_ciISNOTEMPTY');
    grPortConnected.addQuery('sys_id', 'IN', Object.keys(uniqueConnectedPorts));
    grPortConnected.query();
    while (grPortConnected.next()) {
      adapterMainSysId = checkString(grPortConnected.getUniqueValue());
      ciSysId = checkString(grPortConnected.getValue('cmdb_ci'));
      connectedCISysId = checkString(grPortConnected.getValue('u_switch'));
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
        grPortMain = new GlideRecord('cmdb_ci_network_adapter'); 
    grPortMain.addQuery('sys_id', 'IN', networkAdapterSysIdArray);
    grPortMain.query();
    while (grPortMain.next()) {
      adapterMainSysId = checkString(grPortMain.getUniqueValue());
      ciSysId = checkString(grPortMain.getValue('cmdb_ci'));
      connectedCISysId = checkString(grPortMain.getValue('u_switch'));
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
    grTestAdapters = new GlideRecord('cmdb_ci_network_adapter'); 
  grTestAdapters.addEncodedQuery('cmdb_ciISNOTEMPTY^u_switchISNOTEMPTY^u_switchportISNOTEMPTY');
  grTestAdapters.setLimit(10);
  grTestAdapters.query();
  while (grTestAdapters.next()) {
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
