const axios = require('axios/dist/browser/axios.cjs');
const axios = require('axios/dist/node/axios.cjs');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgruPVMb8P5Dr3QjqTw_1fKcNFl9sgurg",
  authDomain: "uy-bor-d10ca.firebaseapp.com",
  databaseURL: "https://uy-bor-d10ca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "uy-bor-d10ca",
  storageBucket: "uy-bor-d10ca.appspot.com",
  messagingSenderId: "752972602569",
  appId: "1:752972602569:web:8d9782a6d7aefbb5178118",
  measurementId: "G-SNT535GQX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
$(function () {
  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
});
//UYLAR BOR START JSSS
function func(userVL) {
  if (userVL == "Buxoro") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_buxoro");
    document.getElementById("tuman1").innerHTML = "Buxoro tumani";
    document.getElementById("tuman2").innerHTML = "G'ijduvon tumani";
    document.getElementById("tuman3").innerHTML = "Olot tumani";
    document.getElementById("tuman4").innerHTML = "Shofirkon tumani";
    document.getElementById("tuman5").innerHTML = "Qorako'l tumani";
  }
  if (userVL == "Andijon") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_andijan");
    document.getElementById("tuman1").innerHTML = "Andijon tumani";
    document.getElementById("tuman2").innerHTML = "Asaka tumani";
    document.getElementById("tuman3").innerHTML = "Jalaquduq tumani";
    document.getElementById("tuman4").innerHTML = "Oltinko'l tumani";
    document.getElementById("tuman5").innerHTML = "Qo'rg'ontepa tumani";
  }
  if (userVL == "Farg`ona") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_fargona");
    document.getElementById("tuman1").innerHTML = "Bag'dod tumani ";
    document.getElementById("tuman2").innerHTML = "Beshariq tumani";
    document.getElementById("tuman3").innerHTML = "Furqat tumani";
    document.getElementById("tuman4").innerHTML = "Oltiariq tumani";
    document.getElementById("tuman5").innerHTML = "So'x tumani";
  }
  if (userVL == "Jizzax") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_jizzax");
    document.getElementById("tuman1").innerHTML = "Jizzax tumani";
    document.getElementById("tuman2").innerHTML = "Mirzacho'l tumani";
    document.getElementById("tuman3").innerHTML = "Forish tumani";
    document.getElementById("tuman4").innerHTML = "Baxmal tumani";
    document.getElementById("tuman5").innerHTML = "Do'stlik tumani";
  }
  if (userVL == "Xorazm") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_xorazm");
    document.getElementById("tuman1").innerHTML = "Xiva tumani";
    document.getElementById("tuman2").innerHTML = "Gurlan tumani";
    document.getElementById("tuman3").innerHTML = "Qo'shko'pir tumani";
    document.getElementById("tuman4").innerHTML = "Bog'ot tumani";
    document.getElementById("tuman5").innerHTML = "Tuproqqal'a tumani";
  }
  if (userVL == "Namangan") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_namangan");
    document.getElementById("tuman1").innerHTML = "Namangan tumani";
    document.getElementById("tuman2").innerHTML = "Chortoq tumani";
    document.getElementById("tuman3").innerHTML = "Chust tumani";
    document.getElementById("tuman4").innerHTML = "Kosonsoy tumani";
    document.getElementById("tuman5").innerHTML = "To'raqo'rg'on tumani";
  }
  if (userVL == "Navoiy") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_navoiy");
    document.getElementById("tuman1").innerHTML = "Karmana tumani";
    document.getElementById("tuman2").innerHTML = "Konimex tumani";
    document.getElementById("tuman3").innerHTML = "Navbahor tumani";
    document.getElementById("tuman4").innerHTML = "Nurota tumani";
    document.getElementById("tuman5").innerHTML = "Tomdi tumani";
  }
  if (userVL == "Qashqadaryo") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_qashqadaryo");
    document.getElementById("tuman1").innerHTML = "Qarshi tumani";
    document.getElementById("tuman2").innerHTML = "Muborak tumani";
    document.getElementById("tuman3").innerHTML = "Qamashi tumani";
    document.getElementById("tuman4").innerHTML = "Nishon tumani";
    document.getElementById("tuman5").innerHTML = "Kasbi tumani";
  }
  if (userVL == "Qoraqalpog`iston Respublikasi") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_qoraqalpogiston");
    document.getElementById("tuman1").innerHTML = "Amudaryo tumani";
    document.getElementById("tuman2").innerHTML = "Chimboy tumani";
    document.getElementById("tuman3").innerHTML = "Ellikqal'a tumani";
    document.getElementById("tuman4").innerHTML = "Qo'ng'irot tumani";
    document.getElementById("tuman5").innerHTML = "Nukus tumani";
  }
  if (userVL == "Samarqand") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_samarqand");
    document.getElementById("tuman1").innerHTML = "Bulung'ur  tumani";
    document.getElementById("tuman2").innerHTML = "Narpay tumani";
    document.getElementById("tuman3").innerHTML = "Payariq tumani";
    document.getElementById("tuman4").innerHTML = "Ishtixon tumani";
    document.getElementById("tuman5").innerHTML = "Paxtachi tumani";
  }
  if (userVL == "Sirdaryo") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_sirdaryo");
    document.getElementById("tuman1").innerHTML = "Sirdaryo tumani";
    document.getElementById("tuman2").innerHTML = "Guliston tumani";
    document.getElementById("tuman3").innerHTML = "Boyovut tumani";
    document.getElementById("tuman4").innerHTML = "Hovos tumani";
    document.getElementById("tuman5").innerHTML = "Mirzaobod tumani";
  }
  if (userVL == "Surxondaryo") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_surxondaryo");
    document.getElementById("tuman1").innerHTML = "Angor tumani";
    document.getElementById("tuman2").innerHTML = "Oltinsoy tumani";
    document.getElementById("tuman3").innerHTML = "Qiziriq tumani";
    document.getElementById("tuman4").innerHTML = "Termiz tumani";
    document.getElementById("tuman5").innerHTML = "Denov tumani";
  }
  if (userVL == "Toshkent") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_toshkent");
    document.getElementById("tuman1").innerHTML = "Qibray tumani";
    document.getElementById("tuman2").innerHTML = "Chinoz tumani";
    document.getElementById("tuman3").innerHTML = "Toshkent tumani";
    document.getElementById("tuman4").innerHTML = "Zangiota tumani";
    document.getElementById("tuman5").innerHTML = "Bo'ka tumani";
  }
  if (userVL == "Toshkent shahri") {
    document.body.classList.remove(
      "body_buxoro",
      "body_andijan",
      "body_fargona",
      "body_jizzax",
      "body_xorazm",
      "body_namangan",
      "body_navoiy",
      "body_qashqadaryo",
      "body_qoraqalpogiston",
      "body_samarqand",
      "body_sirdaryo",
      "body_surxondaryo",
      "body_toshkent",
      "body_poytaxt"
    );
    document.body.classList.add("body_poytaxt");
    document.getElementById("tuman1").innerHTML = "Bektemir tumani";
    document.getElementById("tuman2").innerHTML = "Sergeli tumani";
    document.getElementById("tuman3").innerHTML = "Olmazor tumani";
    document.getElementById("tuman4").innerHTML = "Uchtepa tumani";
    document.getElementById("tuman5").innerHTML = "Yashnobod tumani";
  }

  localStorage.setItem("userVL", userVL);
}func(localStorage.getItem("userVL"));
//🤯😩😩

var elem = document.querySelector('input[type="range"]');
var target = document.querySelector('.value');

var rangeValue = function(){
  var newValue = elem.value;
  target.innerHTML = "50000000 dan  " + newValue + " gacha";
  return newValue; 
} 
elem.addEventListener ('input', rangeValue);
