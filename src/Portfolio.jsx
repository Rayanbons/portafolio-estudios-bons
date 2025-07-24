
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "es";
  });

  const content = {
    es: {
      title: "Hola, soy Brayan Robles Miranda",
      intro: "Animador digital apasionado por dar vida a ideas cuadro a cuadro.",
      aboutTitle: "Sobre mí",
      aboutText: `Apasionado por la animación y la creación de contenido visual, con un fuerte compromiso por el aprendizaje y la excelencia. Actualmente, estudio Animación Digital en la UDLAP, donde he desarrollado proyectos de animación destacados incluso antes de cursar materias especializadas en el área. Con un enfoque autodidacta y una sólida base en ilustración, me especializo en el uso de software como Photoshop, Autodesk Maya 3D, Illustrator, InDesign, Adobe Premiere, Adobe Audition y Toon Boom Harmony. Estoy buscando ampliar mis conocimientos en más software.

Además de mis habilidades técnicas, cuento con experiencia en ventas y atención al cliente durante cuatro años, lo que me ha permitido desarrollar excelentes habilidades sociales, trabajo en equipo y liderazgo organizacional. También tengo experiencia en facturación electrónica, lo que me ha brindado disciplina y atención al detalle.

Mi objetivo es crear contenido animado con impacto, ya sea en cortos, películas, series o anuncios. Busco oportunidades que me permitan crecer en la industria y aportar mi creatividad y pasión al mundo de la animación.`,
      portfolio: "Portafolio",
      portfolioText: "Aquí aparecerán tus proyectos. Puedes añadir videos más adelante.",
      exampleTitle: "Proyecto 1",
      exampleText: "Puedes reemplazar este bloque con un video y su descripción.",
      contact: "Contacto",
      contactText: "¿Quieres trabajar conmigo o tienes preguntas? ¡Escríbeme!",
      contactBtn: "Enviar correo",
      footer: "Todos los derechos reservados."
    },
    en: {
      title: "Hi, I'm Brayan Robles Miranda",
      intro: "Digital animator passionate about bringing ideas to life frame by frame.",
      aboutTitle: "About Me",
      aboutText: `Passionate about animation and visual content creation, with a strong commitment to learning and excellence. I am currently studying Digital Animation at UDLAP, where I have developed standout animation projects even before taking specialized courses in the field. With a self-taught approach and a solid foundation in illustration, I specialize in using software such as Photoshop, Autodesk Maya 3D, Illustrator, InDesign, Adobe Premiere, Adobe Audition, and Toon Boom Harmony. I am actively seeking to expand my knowledge in additional software tools.

In addition to my technical skills, I have four years of experience in sales and customer service, which has allowed me to develop strong social skills, teamwork abilities, and organizational leadership. I also have experience in electronic invoicing, which has taught me discipline and attention to detail.

My goal is to create impactful animated content whether in short films, movies, series, or advertisements. I am looking for opportunities that will allow me to grow within the industry and contribute my creativity and passion to the world of animation.`,
      portfolio: "Portfolio",
      portfolioText: "Your projects will appear here. You can add videos later.",
      exampleTitle: "Project 1",
      exampleText: "You can replace this block with a video and description.",
      contact: "Contact",
      contactText: "Want to work with me or have questions? Write to me!",
      contactBtn: "Send email",
      footer: "All rights reserved."
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-10 font-sans">
      {/* Botón de cambio de idioma */}
      <div className="flex justify-end mb-4">
        <Button variant="outline" onClick={() => {
          const newLang = lang === "es" ? "en" : "es";
          setLang(newLang);
          localStorage.setItem("lang", newLang);
        }}>🌐 {lang === "es" ? "English" : "Español"}</Button>
      </div>

      {/* Inicio */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{content[lang].title}</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          {content[lang].intro}
        </p>
      </section>

      {/* Sobre mí */}
      <section className="mb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{content[lang].aboutTitle}</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
          {content[lang].aboutText}
        </p>
      </section>

      {/* Portafolio */}
      <section className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">{content[lang].portfolio}</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          {content[lang].portfolioText}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-4">
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Video de ejemplo</span>
              </div>
              <h3 className="mt-4 text-lg font-medium">{content[lang].exampleTitle}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {content[lang].exampleText}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacto */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">{content[lang].contact}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{content[lang].contactText}</p>
        <Button asChild>
          <a href="mailto:brayanroblesm778@gmail.com">{content[lang].contactBtn}</a>
        </Button>
      </section>

      <footer className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} Estudios Bons. {content[lang].footer}
      </footer>
    </main>
  );
}
