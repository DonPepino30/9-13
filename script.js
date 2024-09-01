function iniciar(){
    var elementoCentro = document.querySelector(".contenedor .centro");
    elementoCentro.addEventListener("mousemove", girarGirasol);
}

const elementoPetalo1=document.querySelector(".contenedor .petalo");
const elementoPetalo2=document.querySelector(".contenedor .petalo2");
const elementoPetalo3=document.querySelector(".contenedor .petalo3");
const elementoPetalo4=document.querySelector(".contenedor .petalo4");
const elementoPetalo5=document.querySelector(".contenedor .petalo5");
const elementoPetalo6=document.querySelector(".contenedor .petalo6");
const elementoPetalo7=document.querySelector(".contenedor .petalo7");
const elementoPetalo8=document.querySelector(".contenedor .petalo8");

var duracionAnimacion=500;

const animacionPetalo1=[
    {transform: "rotateZ(0deg)",left:"20%",background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",offset: 0},
    {transform: "rotateZ(90deg)",left:"47%", top:"15%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .25},
    {transform: "rotateZ(180deg)",left:"47%",top:"30%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset:.50},
    {transform: "rotateZ(270deg)",left:"20%",top:"30%",background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",offset: .75},
    {transform: "rotateZ(360deg)",left:"20%",top:"15%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 1},
];

const propiedadAnimacionP1={
    duration:duracionAnimacion,
    easing: "linear",
};  

const elementPetalo2 =document.querySelector(".petalo2");
const animacionPetalo2=[
    {transform: "rotateZ(0deg)",left:"47%",top:"15%", background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",offset: 0},
    {transform: "rotateZ(90deg)",left:"47%",top:"30%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .25},
    {transform: "rotateZ(180deg)",left:"20%",top:"30%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset:.50},
    {transform: "rotateZ(270deg)",left:"20%",top:"15%",background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",offset: .75},
    {transform: "rotateZ(360deg)",left:"47%",top:"15%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 1},
];

const propiedadAnimacionP2={
    duration:duracionAnimacion,
    easing: "linear",
};

const elementPetalo3 =document.querySelector(".petalo3");

const animacionPetalo3=[
    {transform: "rotateZ(0deg)",left:"20%",top:"30%", background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",offset: 0},
    {transform: "rotateZ(90deg)",left:"20%",top:"15%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .25},
    {transform: "rotateZ(180deg)",left:"47%",top:"15%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset:.50},
    {transform: "rotateZ(270deg)",left:"47%",top:"30%",background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",offset: .75},
    {transform: "rotateZ(360deg)",left:"20%",top:"30%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 1},
];

const propiedadAnimacionP3={
    duration:duracionAnimacion,
    easing: "linear",
};

const elementPetalo4 =document.querySelector(".petalo4");

const animacionPetalo4=[
    {transform: "rotateZ(0deg)",left:"47%", background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",offset: 0},
    {transform: "rotateZ(90deg)",left:"20%",top:"30%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .25},
    {transform: "rotateZ(180deg)",left:"20%",top:"15%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset:.50},
    {transform: "rotateZ(270deg)",left:"47%",top:"15%",background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",offset: .75},
    {transform: "rotateZ(360deg)",left:"47%",top:"30%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 1},
];

const propiedadAnimacionP4={
    duration:duracionAnimacion,
    easing: "linear",
};
const elementPetalo5 =document.querySelector(".petalo5");

const animacionPetalo5=[
    {transform: "rotateZ(0deg)",left:"32.7%",top:"12%", background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 0},
    {transform: "rotateZ(90deg)",left:"52%",top:"23%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .25},
    {transform: "rotateZ(180deg)",left:"33.4%",top:"34%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset:.50},
    {transform: "rotateZ(270deg)",left:"14%",top:"23%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .75},
    {transform: "rotateZ(360deg)",left:"32.7%",top:"12%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 1},
];

const propiedadAnimacionP5={
    duration:duracionAnimacion,
    easing: "linear",
};

const elementPetalo6 =document.querySelector(".petalo6");

const animacionPetalo6=[
    {transform: "rotateZ(0deg)",left:"52%",top:"23%", background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 0},
    {transform: "rotateZ(90deg)",left:"33.4%",top:"34%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .25},
    {transform: "rotateZ(180deg)",left:"14%",top:"23%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset:.50},
    {transform: "rotateZ(270deg)",left:"32.7%",top:"12%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .75},
    {transform: "rotateZ(360deg)",left:"52%",top:"23%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 1},
];

const propiedadAnimacionP6={
    duration:duracionAnimacion,
    easing: "linear",
};

const elementPetalo7 =document.querySelector(".petalo7");

const animacionPetalo7=[
    {transform: "rotateZ(0deg)",left:"32.7%",top:"12%", background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 0},
    {transform: "rotateZ(90deg)",left:"52%",top:"23%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .25},
    {transform: "rotateZ(180deg)",left:"33.4%",top:"34%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset:.50},
    {transform: "rotateZ(270deg)",left:"14%",top:"23%",background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",offset: .75},
    {transform: "rotateZ(360deg)",left:"32.7%",top:"12%",background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",offset: 1},
];

const propiedadAnimacionP7={
    duration:duracionAnimacion,
    easing: "linear",
};

const elementPetalo8 =document.querySelector(".petalo8");