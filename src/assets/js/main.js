window.addEventListener("DOMContentLoaded", function () {
  var Vue = window.Vue;
  var URL = window.URL || window.webkitURL;
  var XMLHttpRequest = window.XMLHttpRequest;
  var Compressor = window.Compressor;

  console.log("DOM fully loaded and parsed");
});


function myTest() {
  var vm = this;
  alert("HOŞGELDİNİZ, çok yakında...");
  return {
    options: {
      strict: true,
      checkOrientation: true,
      maxWidth: undefined,
      maxHeight: undefined,
      minWidth: 0,
      minHeight: 0,
      width: undefined,
      height: undefined,
      quality: 0.8,
      mimeType: "",
      convertSize: 5000000,
      success: function (result) {
        console.log("Output: ", result);

        if (URL) {
          vm.outputURL = URL.createObjectURL(result);
        }

        vm.output = result;
        vm.$refs.input.value = "";
      },
      error: function (err) {
        window.alert(err.message);
      },
    },
    inputURL: "",
    outputURL: "",
    input: {},
    output: {},
  };
}

$(function () {
  alert("HOŞGELDİNİZ, çok yakında...");
});
