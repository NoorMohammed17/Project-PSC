let id;


async function getData() {
  let query = document.getElementById("query").value;
  let url = `https://swapi.dev/api/people/?search=${query}`;

  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  append(data.results);
  return data.results;
}


function append(data) {
  let container = document.getElementById("results");
  container.innerHTML = null;

  data.forEach(function (el) {
    console.log(data);

    let name = document.createElement("p");
    name.innerText = el.name;

    let year = document.createElement("p");
    year.innerText = el.birth_year;

    let div = document.createElement("div");
    div.setAttribute("class", "child");
    div.onclick = () => {
      console.log(el);
      localStorage.setItem("SingleData", JSON.stringify(el));
      window.location.href = "append.html";
    };

    div.append(name, year);
    container.append(div);
  });
}

//Main function
async function main() {
  let data = await getData();
  append(data);
}


//Debouncing funtion
function debouncing(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
