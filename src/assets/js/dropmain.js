
function dropdrag() {
  document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
      if (
        inputElement.files.length &&
        inputElement.files[0].type.startsWith("image/")
      ) {
        var file = inputElement.files[0];

        changeInputImage(file);
        writeInputFileInformation(file);
        writeOutputFileInformation(file);

        

        $(".hiddenElementBeforeCompress").show();

        for (i = 0; i < inputElement.files.length; i++) {
          fileAndSettingsSendToEncode(inputElement.files);
        }
      } else {
        window.alert("Lütfen geçerli dosya tipini seçiniz...");
        //dropZoneElement.classList.remove("drop-zone--over");
      }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();

      //console.log("dragover-resim sürükleniyor")

      dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });

    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();

      if (
        e.dataTransfer.files.length &&
        e.dataTransfer.files[0].type.startsWith("image/")
      ) {
        //console.log(e.dataTransfer.files);
        inputElement.files = e.dataTransfer.files;

        var file = e.dataTransfer.files[0];
        changeInputImage(file);
        fileAndSettingsSendToEncode(file);

        writeInputFileInformation(e.dataTransfer.files[0]);
        writeOutputFileInformation(e.dataTransfer.files[0]);
        $(".hiddenElementBeforeCompress").show();
        dropZoneElement.classList.remove("drop-zone--over");
      } else {
        window.alert("Lütfen geçerli dosya tipini seçiniz...");
        dropZoneElement.classList.remove("drop-zone--over");
      }

      //dropZoneElement.classList.remove("drop-zone--over");
    });
  });
}

/**
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 * @param {Buffer} buffer
 */

function prettySize(size) {
  var kilobyte = 1024;
  var megabyte = kilobyte * kilobyte;

  if (size > megabyte) {
    return (size / megabyte).toFixed(2) + " MB";
  } else if (size > kilobyte) {
    return (size / kilobyte).toFixed(2) + " KB";
  } else if (size >= 0) {
    return size + " B";
  }

  return "N/A";
}

function writeInputFileInformation(file) {
  document.getElementById("inputName").innerHTML = file.name;
  document.getElementById("inputLastModified").innerHTML = file.lastModified;
  document.getElementById("inputLastModifiedDate").innerHTML =
    file.lastModifiedDate;
  document.getElementById("inputType").innerHTML = file.type;
  //document.getElementById("inputSize").innerHTML = prettySize(file.size);
}

function writeOutputFileInformation(file) {
  document.getElementById("outputName").innerHTML = file.name;
  document.getElementById("outputLastModified").innerHTML =
    new Date().getTime();
  document.getElementById("outputLastModifiedDate").innerHTML = new Date();
  document.getElementById("outputType").innerHTML = file.type;
 // document.getElementById("outputSize").innerHTML = prettySize(file.size/1.2);
}

function fileAndSettingsSendToEncode(file) {
  var quality = document.getElementById("inputQuality");
  var selectedQuality = quality.options[quality.selectedIndex].value;
  console.log("seçilen kalite: " + selectedQuality);
  var imageData = encode(file, selectedQuality);
 // var arr = imageData.data;
  //console.log(arr);
  //console.log(content)

  //document.getElementById('outputImage').src=URL.createObjectURL(new Blob([content.buffer],{type:'image/png'}))

  console.log(file);
  //console.log(prettySize(file[0].size))

  quality.addEventListener("change", function () {
    var quality = document.getElementById("inputQuality");
    //var selectedQuality = quality.options[quality.selectedIndex].value;
    var newSelectedQuality = quality.selectedIndex * 10;
    console.log("seçilen kalite: " + newSelectedQuality);

    var imageData = encode(file, newSelectedQuality);
    console.log(imageData);

    //document.getElementById("outputImage").src = URL.createObjectURL(new Blob[imageData.buffer], {type:'image/png'});
  });
}

function changeInputImage(file) {
  var inputImage = document.getElementById("inputImage");
  var outputImage = document.getElementById("outputImage");

  var downloadInputImage = document.getElementById("downloadInputImage");
  var downloadOutputImage = document.getElementById("downloadOutputImage");

  var beforeImage = document.getElementById("beforeImage");
  var afterImage = document.getElementById("afterImage");

  var url = URL.createObjectURL(file);

  inputImage.src = url;
  //outputImage.src = url;

  var inputHeight = document.getElementById("inputHeight");
  var inputWidth = document.getElementById("inputWidth");

  inputHeight.addEventListener("change", function () {
    newInputHeight = inputHeight.value;
    if (newInputHeight) {
      console.log(newInputHeight);
      outputImage.height = newInputHeight;
      file.height = newInputHeight;
    }
  });
  inputWidth.addEventListener("change", function () {
    newInputWidth = inputWidth.value;
    if (newInputWidth) {
      console.log(newInputWidth);
      outputImage.width = newInputWidth;
      file.width = newInputWidth;
    }
  });

  beforeImage.src = url;
  afterImage.src = url;

  downloadInputImage.setAttribute("href", url);
  downloadOutputImage.setAttribute("href", url);

  downloadInputImage.setAttribute("download", file.name);
  downloadOutputImage.setAttribute("download", file.name);

  // console.log(inputImage.clientWidth);
  // console.log(inputImage.clientHeight);
}

function calculatePSNRandBPP(imageWidth, imageHeight, imageSize){
  var bpp=imageSize/(imageWidth*imageHeight);
  var bppElement = document.getElementById("bpp");
  bppElement.innerHTML()=bpp
  
}