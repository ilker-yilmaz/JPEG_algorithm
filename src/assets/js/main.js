var URL = window.URL || window.webkitURL;
var XMLHttpRequest = window.XMLHttpRequest;

function data() {
  var vm = this;
  
   console.log("data fonksiyonu çalıştı");

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
          console.log("URL:"+vm.outputURL);
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

function compress(file) {
  if (!file) {
    return;
  }

  console.log("Input: ", file);

  if (URL) {
    this.inputURL = URL.createObjectURL(file);
  }

  this.input = file;
  new Compressor(file, this.options);
}
function change(e) {
  this.compress(e.target.files ? e.target.files[0] : null);
}
function dragover(e) {
  e.preventDefault();
}
function drop() {
  e.preventDefault();
  console.log(e.dataTransfer.files);
  this.compress(e.dataTransfer.files ? e.dataTransfer.files[0] : null);
}

function handler() {
  this.compress(this.input);
}

function mounted() {
  if (!XMLHttpRequest) {
    return;
  }

  var vm = this;
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var blob = xhr.response;
    var date = new Date();

    blob.lastModified = date.getTime();
    blob.lastModifiedDate = date;
    blob.name = "after.jpg";
    vm.compress(blob);
  };
  xhr.open("GET", "assets/img/after.jpg");
  xhr.responseType = "blob";
  xhr.send();
}
