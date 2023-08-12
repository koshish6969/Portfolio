import myImage from "./assets/images/koshish.jpg"
const logotext = "KOSHISH SHRESTHA";
const meta = {
    title: "Koshish Shrestha",
    description: "I’m an Computer Engineering Student",
};

const introdata = {
    title: "I’m Koshish Shrestha",
    animated: {
        first: "I am an Computer Engineering Student.",
        second: "I love coding.",
        third:"I love making videos." ,
    },
    description: "A passionate learner keen to turn imaginations into reality with the help of technology.",
    your_img_url: myImage,
};

const dataabout = {
    title: "About Koshish",
    aboutme: "Hey there, I'm Koshish Shrestha! Think of me as a computer enthusiast on a mission. I love playing with code and creating videos that tell stories. But guess what? I've got a secret passion for design too – it's like making digital art and UI/UX design! Lately, I've been getting my hands dirty with machine learning – it's all about teaching computers to be smart.  And when I'm not lost in tech, you'll find me jamming to music, diving into e-gaming adventures, or doing things that put a smile on my face.",
};

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "React.JS",
        value: 85,
    },
    {
        name: "HTML/CSS",
        value: 80,
    },
    {
        name: "C/C++",
        value: 80,
    },
    {
        name: "UI/UX Design",
        value: 50,
    },
    {
        name: "Adobe Premier Pro",
        value: 80,
    },
];


const dataportfolio = [
    {
         img: "https://static.vecteezy.com/system/resources/previews/003/731/316/original/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg",
         description: "PustakHub- An online webapp for buying/selling old books",
         link: "https://github.com/koshish6969/pustakhub-final",
     },
    {
         img: "https://static.vecteezy.com/system/resources/previews/016/878/155/original/ui-ux-design-outline-icon-design-illustration-design-and-development-symbol-on-white-background-eps-10-file-vector.jpg",
         description: "UI/UX Designs",
         link: "https://www.behance.net/gallery/123650751/UIUX-DESIGN",
     },
    {
         img: "https://i.pinimg.com/474x/64/02/78/640278db71e9352a30fc8f14b93e9f44.jpg",
         description: "Videos",
         link: "https://www.behance.net/gallery/123655799/VIDEOS",
     },
    {
         img: "https://static.vecteezy.com/system/resources/previews/004/745/655/original/shopping-ecommerce-retail-line-icons-isolated-shopping-icons-symbols-in-white-background-modern-illustration-of-commerce-for-web-page-template-print-media-cover-banner-background-free-vector.jpg",
         description: "Illustrations",
         link: "https://www.behance.net/gallery/112602087/SOME-OF-MY-ILLUSTRATIONS",
     },
    {
        img:"https://img.freepik.com/free-vector/hand-draw-astronaut-cosmonaut-space-sketch-design_1035-20320.jpg?w=740&t=st=1691823572~exp=1691824172~hmac=2ae0bfdbf3bc835aa81aced2a3bb28fe7ce494df1246fb811ef02f3f1c814a49.jpg",
         description: "Designs",
         link: "https://www.behance.net/gallery/112601841/SOME-OF-MY-DESIGNS",
     },

];

const contactConfig = {
    YOUR_EMAIL: "koshish62@gmail.com",
    YOUR_FONE: "+977-9863336676",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/koshish6969",
    linkedin: "https://www.linkedin.com/in/koshish-shrestha-133980175/",
    behance: "https://www.behance.net/koshishshrestha",
    youtube: "https://www.youtube.com/@KoshishShrestha"
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};