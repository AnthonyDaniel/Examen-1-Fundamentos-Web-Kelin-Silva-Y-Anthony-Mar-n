var Blog = {
    url: "https://responsivedesign.is/wp-content/uploads/2016/12/Ethan-Marcotte-RWD.jpg",
    title: "¿Un mundo “Responsive” es posible en pleno 2020?",
    description: "Se hablan de las distintas formas en las que podemos enfrentar el mundo, desde los ojos de un 'Front-End'",
    content1: "Hoy en día existen un millón de dispositivos móviles, cada vez más dispositivos en la calle, con resoluciones distintas, desde dispositivos muy pequeños como los relojes inteligentes con resoluciones de 200px de ancho, a pantallas con unas resoluciones exageradas, de hasta 16K, entonces el panorama para los desarrolladores Front-End de considerar todas estas resoluciones se nos vuelve un desafío día a día, porque si tienes una aplicación Web E-Commerce, tienes que hacer que se vea bien en la mayoría de dispositivos, ya que muchas veces llegamos a los clientes, por la comodidad y estética de nuestras aplicaciones, que por sus funcionalidades.",
    url2: "5",
    content2: "6",
    url3: "7",
    urlvideo: "8"
}

loadPreBlog();

function loadPreBlog() {

    var title, description, content1, urlImg;

    title = document.getElementById("title");
    title.innerHTML = Blog.title;

    description = document.getElementById("description");
    description.innerHTML = Blog.description;

    content1 = document.getElementById("content1");
    content1.innerHTML = Blog.content1;

    urlImg = document.getElementById("img");
    urlImg.innerHTML = `<img id="img" src="`+ Blog.url+`" alt="" />`;
}
