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
        //updateThumbnail(dropZoneElement, file);

        

        changeInputImage(file);
        writeInputFileInformation(file);
        writeOutputFileInformation(file);

        fileAndSettingsSendToEncode(file);
        
      } else {
        window.alert("Lütfen geçerli dosya tipini seçiniz...");
        dropZoneElement.classList.remove("drop-zone--over");
      }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();

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
        console.log(e.dataTransfer.files);
        inputElement.files = e.dataTransfer.files;

        var file = e.dataTransfer.files[0];
        changeInputImage(file);
        fileAndSettingsSendToEncode(file);

        writeInputFileInformation(e.dataTransfer.files[0]);
        writeOutputFileInformation(e.dataTransfer.files[0]);
        //updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);

        dropZoneElement.classList.remove("drop-zone--over");
      } else {
        window.alert("Lütfen geçerli dosya tipini seçiniz...");
        dropZoneElement.classList.remove("drop-zone--over");
      }

      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
}

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    //console.log("ilk şart sağlandı");
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // resim dosyaları için küçük resim göster
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}

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

function beforeAfter() {
  document.getElementById("separador").style.width =
    document.getElementById("deslizador").value + "%";
}

function writeInputFileInformation(file) {
  document.getElementById("inputName").innerHTML = file.name;
  document.getElementById("inputLastModified").innerHTML = file.lastModified;
  document.getElementById("inputLastModifiedDate").innerHTML =
    file.lastModifiedDate;
  document.getElementById("inputType").innerHTML = file.type;
  document.getElementById("inputSize").innerHTML = prettySize(file.size);
}

function writeOutputFileInformation(file) {
  document.getElementById("outputName").innerHTML = file.name;
  document.getElementById(
    "outputLastModified"
  ).innerHTML = new Date().getTime();
  document.getElementById("outputLastModifiedDate").innerHTML = new Date();
  document.getElementById("outputType").innerHTML = file.type;
  document.getElementById("outputSize").innerHTML = prettySize(file.size);
}

function fileAndSettingsSendToEncode(file) {
  var quality = document.getElementById("inputQuality");
  var selectedQuality = quality.options[quality.selectedIndex].value;
  // console.log("seçilen kalite: " + selectedQuality);
  var imageData = encode(file, selectedQuality);
  console.log(imageData);

  quality.addEventListener("change", function () {
    var quality = document.getElementById("inputQuality");
    //var selectedQuality = quality.options[quality.selectedIndex].value;
    var newSelectedQuality = quality.selectedIndex * 10;
    console.log("seçilen kalite: " + newSelectedQuality);

    var imageData = encode(file, newSelectedQuality);
    console.log(imageData);
  });
}

function changeInputImage(file) {
  var inputImage = document.getElementById("inputImage");
  var outputImage = document.getElementById("outputImage");

  var downloadInputImage = document.getElementById("downloadInputImage");
  var downloadOutputImage = document.getElementById("downloadOutputImage");

  var beforeImage = document.getElementById("beforeImage")
  var afterImage = document.getElementById("afterImage")

  inputImage.src = URL.createObjectURL(file);
  outputImage.src = URL.createObjectURL(file);

  beforeImage.src= URL.createObjectURL(file);
  afterImage.src = URL.createObjectURL(file);

  downloadInputImage.setAttribute("href", inputImage.src);
  downloadOutputImage.setAttribute("href", inputImage.src);

  downloadInputImage.setAttribute("download", file.name);
  downloadOutputImage.setAttribute("download", file.name + "-compressed");

  console.log(inputImage.clientWidth);
  console.log(inputImage.clientHeight);
}
