function changeColor() {
  let h1Ref = document.querySelector("h1");
  h1Ref.style.color = "red";
}

function changeColorUsingJQuery() {
  $("h1").css("color", "green").css("background", "yellow");
}

async function makeApiCall() {
  let url = "https://jsonplaceholder.typicode.com/posts/1";
  let res = await fetch(url);

  let result = await res.json();
  console.log(result);
}

function makeApiCallLegacy() {
  let url = "https://jsonplaceholder.typicode.com/posts/1";
  let xhr = new XMLHttpRequest();
  xhr.onload = () => {
    console.log(xhr.status, xhr.responseText);
    if (xhr.status == "200") {
      let result = JSON.parse(xhr.responseText);
      console.log(result);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function makeApiCallUsingJQuery() {
  let url = "https://jsonplaceholder.typicode.com/posts/1";
  $.get(url).done((data) => {
    console.log(data);
    // dom manipulation
  });
}

function makeApiCallUsingJQueryV1() {
  let url = "https://jsonplaceholder.typicode.com/posts/1";
  let jqxhr = $.get(url);
  jqxhr.done((data) => console.log(data));
}
