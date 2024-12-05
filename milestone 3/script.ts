
let myname: any = document.getElementById("name");
let desig: any = document.getElementById("desig");
let phone: any = document.getElementById("phone");
let email: any = document.getElementById("email");
let Address: any = document.getElementById("Address");
let passing: any = document.getElementById("Passing");
let Education: any = document.getElementById("Education");
let institute: any = document.getElementById("institute");
let skills1: any = document.getElementById("skills1");
let skills2: any = document.getElementById("skills2");
let skills3: any = document.getElementById("skills3");
let lang: any = document.getElementById("lang");
let lang2: any = document.getElementById("lang2");
let styear: any = document.getElementById("styear");
let endyear: any = document.getElementById("endyear");
let company: any = document.getElementById("company");
let Job: any = document.getElementById("Job");
let submitbtn = document.getElementById("submitbtn");
let form = document.getElementById("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("myname", myname.value);
  localStorage.setItem("desig", desig.value);
  localStorage.setItem("phone", phone.value); 
  localStorage.setItem("email", email.value);
  localStorage.setItem("Address", Address.value);
   localStorage.setItem("passing", passing.value);
   localStorage.setItem("Education", Education.value);
   localStorage.setItem("institute", institute.value);
   localStorage.setItem("skills1", skills1.value);
   localStorage.setItem("skills2", skills2.value);
   localStorage.setItem("skills3", skills3.value);
   localStorage.setItem("lang", lang.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("styear", styear.value);
   localStorage.setItem("endyear", endyear.value);
   localStorage.setItem("company", company.value);
   localStorage.setItem("Job", Job.value);



});
