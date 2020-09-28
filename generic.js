var Blog = {
    url: "https://responsivedesign.is/wp-content/uploads/2016/12/Ethan-Marcotte-RWD.jpg",
    title: "¿Un mundo “Responsive” es posible en pleno 2020?",
    description: "Se hablan de las distintas formas en las que podemos enfrentar el mundo, desde los ojos de un 'Front-End'",
    content1: "Hoy en día existen un millón de dispositivos móviles, cada vez más dispositivos en la calle, con resoluciones distintas, desde dispositivos muy pequeños como los relojes inteligentes con resoluciones de 200px de ancho, a pantallas con unas resoluciones exageradas, de hasta 16K, entonces el panorama para los desarrolladores Front-End de considerar todas estas resoluciones se nos vuelve un desafío día a día, porque si tienes una aplicación Web E-Commerce, tienes que hacer que se vea bien en la mayoría de dispositivos, ya que muchas veces llegamos a los clientes, por la comodidad y estética de nuestras aplicaciones, que por sus funcionalidades.",
    url2: "https://firebasestorage.googleapis.com/v0/b/trip-9357d.appspot.com/o/screencapture-www-tiendasekono-com-costarica-1601172597180.png?alt=media&token=541a6dcd-9630-458f-87b7-71f612e806be",
    content2: "Entonces básicamente tenemos que buscar maneras de que nuestras aplicaciones sean “responsive” lo máximo posible, para esto hacemos uso de librerías de estilos, como; “Material Design, Bootstrap, Semantic UI, entre otras librerías”, estas librerías tienen unos sistemas de “Grid” que facilitan el hacer una aplicación “Responsive”, pero no es suficiente para que nuestra aplicación se vea bien, veamos el siguiente ejemplo: ",
    url3: "https://firebasestorage.googleapis.com/v0/b/trip-9357d.appspot.com/o/Captura%20de%20Pantalla%202020-09-27%20a%20la(s)%2018.18.26.png?alt=media&token=e73b757c-1cd7-41e3-9248-028446172c4f",
    content3: "Esta imagen es de un E-Commerce en una resolución de 8K, y se ve terrible, a pesar de usar librerías de estilos, de tener un buen uso de “Grid”, se ve mal, no es legible, y realmente no es útil, entonces, que hacemos en estos casos, para que nuestro sitio sea legible, el programador “Anthony Marín Bolívar de la empresa de Decimo, de Costa Rica” ideo un Script muy simple, que puede hacer un sitio escalable en casi cualquier resoluciones, de una manera rápida y sencilla, haciendo el uso del Zoom de css, haciendo un evento “resize listen”, en el cual llama una un función súper simple, que solo verifica el ancho de la pantalla y regula el zoom, en base al ancho actual de la ventana, sería muy similar al siguiente código: ",
    url4:"https://firebasestorage.googleapis.com/v0/b/trip-9357d.appspot.com/o/screencapture-mimercadito-cr-1599828414533.png?alt=media&token=2075d56b-9e9b-4843-b46a-75adb47a743b",
    content4:"Una de las paginas que usa una logica similar, pero con una versión de este metodo mejorado es el mejor E-Commerce de Costa Rica, ",
    content5: "Este sitio MiMercadito, esta en una resolución de 8K, y si lo comparamos con el E-Commerce pasado, podemos notar una gran diferencia en la legibilidad del sitio. Los invito a mejorar este metodo y usarlos en sus proximos proyectos. ",
    urlvideo: "8"
}

loadBlog();

function loadBlog() {

    var title, description, content1, urlImg, urlImg2, urlImg3, urlImg4, content3, content5, content4;

    urlImg = document.getElementById("img");
    urlImg.innerHTML = `<img id="img" src="` + Blog.url + `" alt="" />`;

    title = document.getElementById("title");
    title.innerHTML = Blog.title;

    description = document.getElementById("description");
    description.innerHTML = Blog.description;

    content1 = document.getElementById("content1");
    content1.innerHTML = Blog.content1;

    content2 = document.getElementById("content2");
    content2.innerHTML = Blog.content2;

    content3 = document.getElementById("content3");
    content3.innerHTML = Blog.content3;

    content4 = document.getElementById("content4");
    content4.innerHTML = Blog.content4 + "<a href='https://mimercadito.cr'>Mi Mercadito</a>";

    content5 = document.getElementById("content5");
    content5.innerHTML = Blog.content5;

    urlImg2 = document.getElementById("img2");
    urlImg2.innerHTML = `<img class="img-fluid" id="img" src="` + Blog.url2 + `" alt="" />`;

    urlImg3 = document.getElementById("img3");
    urlImg3.innerHTML = `<img class="img-fluid" style="width:33%" id="img" src="` + Blog.url3 + `" alt="" />`;

    urlImg4 = document.getElementById("img4");
    urlImg4.innerHTML = `<img class="img-fluid" id="img" src="` + Blog.url4 + `" alt="" />`;


}
