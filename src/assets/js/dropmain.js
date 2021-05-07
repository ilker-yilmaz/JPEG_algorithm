
function dropdrag() {
  document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        // console.log("uzunluk var.");
        console.log(inputElement.files);
        var file =inputElement.files[0];
        updateThumbnail(dropZoneElement, file);

        //console.log(document.getElementById("outputName")) 
        writeInputFileInformation(file);
        writeOutputFileInformation(file);
        // document.getElementById("inputName").innerHTML=file.name;
        // document.getElementById("inputLastModified").innerHTML=file.lastModified;
        // document.getElementById("inputLastModifiedDate").innerHTML=file.lastModifiedDate;
        // document.getElementById("inputType").innerHTML=file.type;
        // document.getElementById("inputSize").innerHTML=prettySize(file.size);
        //writeConsole(file);
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
      // console.log("sürüklendi");

      if (e.dataTransfer.files.length) {
        console.log(e.dataTransfer.files);
        inputElement.files = e.dataTransfer.files;
        // console.log(inputElement.files);
        writeInputFileInformation(e.dataTransfer.files[0]);
        writeOutputFileInformation(e.dataTransfer.files[0]);
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
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
  // console.log(dropZoneElement);
  //console.log("updateThumbnail çalıştı");

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
    // console.log("resim dosyaları için küçük resim göster çalıştı");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log("reader onload çalıştı");

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

function changeBeforeAfter() {
  console.log("changeBeforeAfter çalıştı");
  try {
    var background = document
      .getElementById("seperador")
      .getAttribute("backgroundImage");

    document.getElementById("seperador").style.backgroundImage =
      "url('https://cdn.chip.gen.tr/images/content/20090329231925.jpg')";
  } catch (error) {
    console.log(error);
  }
}

function writeInputFileInformation(file){
  document.getElementById("inputName").innerHTML=file.name;
  document.getElementById("inputLastModified").innerHTML=file.lastModified;
  document.getElementById("inputLastModifiedDate").innerHTML=file.lastModifiedDate;
  document.getElementById("inputType").innerHTML=file.type;
  document.getElementById("inputSize").innerHTML=prettySize(file.size);
}

function writeOutputFileInformation(file){
  document.getElementById("outputName").innerHTML=file.name;
  document.getElementById("outputLastModified").innerHTML=file.lastModified;
  document.getElementById("outputLastModifiedDate").innerHTML=file.lastModifiedDate;
  document.getElementById("outputType").innerHTML=file.type;
  document.getElementById("outputSize").innerHTML=prettySize(file.size);
}


//  function writeConsole(file) {
//   var fileLastModified = file.lastModified;
//   var fileLastModifiedDate = file.lastModifiedDate;
//   var fileName = file.name;
//   var fileSize = prettySize(file.size);
//   var fileType = file.type;

//   console.log("son değişiklik: " + fileLastModified);
//   console.log("son değişiklik tarihi: " + fileLastModifiedDate);
//   console.log("isim: " + fileName);
//   console.log("türü: " + fileType);
//   console.log("boyut: " + fileSize);
// }

