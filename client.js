function main() {
  var report = this.data.report;

  var output = document.getElementById('output');
  if (output !== null) {
    output.innerText = JSON.stringify(report, null, 2);
  }
};