function generateUrl() {
	var sysIdArray = getSysIdArray();
	var url = window.parent.location.origin + '/sp?id=magnusCmdbCiNetworkAdapterReport&sysIdArray='+sysIdArray;
	g_navigation.open(url);
}
	
function getSysIdArray() {
    if (typeof g_form != "undefined" && typeof g_form != "function") {
        return g_form.getUniqueValue();
    } else if (typeof g_list != "undefined") {
        return g_list.getChecked();
    }
}