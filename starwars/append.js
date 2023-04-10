let data = JSON.parse(localStorage.getItem("SingleData"));
  console.log(data.name);
  render(data);
  function render(data) {
    let Eachcontainer = document.getElementById("eachChar");
    // Eachcontainer.innerHTML = null;

    let nam = document.createElement("h2");
    nam.innerText = data.name;
    let personal = document.createElement("h3");
    personal.innerText = "Personal Info";
    let Anatomy = document.createElement("h3");
    Anatomy.innerText = "Anatomy";
    let year = document.createElement("p");
    year.innerText = "Birth Year : " + data.birth_year;
    let Height = document.createElement("p");
    Height.innerText = "Height : " + data.height;
    let HairColor = document.createElement("p");
    HairColor.innerText = "Hair Color : " + data.hair_color;
    let mass = document.createElement("p");
    mass.innerText = "Mass : " + data.mass;
    let eye = document.createElement("p");
    eye.innerText = "Eye Color : " + data.eye_color;
    let gender = document.createElement("p");
    gender.innerText = "Gender : " + data.gender;

    let btn = document.createElement("button");
    btn.innerText = "Go Back";
    btn.onclick = () => {
      window.location.href = "index.html";
    };

    let div = document.createElement("div");

    let left = document.createElement("div");
    left.setAttribute("class", "left");
    left.append(personal, year, gender, Height);

    let right = document.createElement("div");
    right.setAttribute("class", "right");
    right.append(Anatomy, eye, mass, HairColor);

    let parent = document.createElement("div");
    parent.setAttribute("class", "parent");
    parent.append(left, right);
    div.append(nam, parent, btn);
    Eachcontainer.append(div);
  }