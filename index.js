const express = require("express");

const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;



const developers = {
    "teammates": [
        {
            name: "Omar Virilli",
            image: "../assets/team/omar.jpg",        
            linkedin: "https://www.linkedin.com/in/omar-virili-16ba1837/",
            github: "https://github.com/odv144",
            bio: "A los 13 años desde COBOL, me inicie en el mundo de la programación. Hoy soy Técnico Electrónico, ejerciendo por más de 15 años. Sin embargo, a los 39 años decidí volver a la programación y emprender el interminable camino del aprendizaje en el desarrollo."
        },
        {
            name: "Gastón Aleman",
            image: "../assets/team/gaston.jpg",
            github: "https://github.com/ALEMANXENE",
            bio: "Ajeno al mundo del desarrollo web pero siempre informado sobre del mundo de la tecnología desde pequeño cuando me regalaron una PC 386 hoy a los 39 años con ganas de aprender algo nuevo antes de que la AI acabe con la humanidad."
        },
        {
            name: "Cristian Argañaraz",
            image: "../assets/team/cristian.jpg",
            linkedin: "https://www.linkedin.com/in/christian-arga%C3%B1araz-003396254/",
            github: "https://github.com/Argcristian",
            bio: "• Técnico reparador electronico ( con 8 años de experiencia). <br>       • Técnico reparador en pc ( instalación de sofwere y ofimática, backup y recuperación de datos, reparación y diagnósticos)."
        },
        {
            name: "Diego Guzmán",
            image: "../assets/team/carnet.jpg",
            linkedin: "https://www.linkedin.com/in/diego-guzm%C3%A1n-cerveux/",
            portfolio: "https://cerveux.dev.ar/",
            github: "https://github.com/cerveux",
            bio: "En el 2021 después de una charla con un ex compañero de ingeniería en sistemas, decidí dejar mi profesión y volver a la programación ya no como hobby sino como un trabajo de tiempo completo."
        }
    ]
}
app.use(cors())
.get("/usuarios", (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(developers));
})

app.listen(PORT, ()=>{
    console.log("Server is running")
})