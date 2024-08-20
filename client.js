function main() {
  var adapterData = this.data.adapterData;
  var reportData = this.data.reportData;

  var output = document.getElementById('output');
  if (output !== null) {
    output.innerText = JSON.stringify(reportData, null, 2);
    output.innerText += '\n\n\n\n\n\n\n\n\n\n';
    output.innerText += JSON.stringify(adapterData, null, 2);
  }
}