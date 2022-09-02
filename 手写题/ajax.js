var myNewAjax = function (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && readyState == 4) {
        var json = JSON.parse(xhr.responseText);
        resolve(json);
      } else if (xhr.readyState == 4 && xhr.status != 200) {
        reject("error");
      }
    };
  });
};
