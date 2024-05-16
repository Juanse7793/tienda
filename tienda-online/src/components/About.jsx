import JuanTerno from "../assets/images/JuanTerno.jpeg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-about-bg bg-cover bg-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center max-w-md">
        <img
          src={JuanTerno}
          alt="Juan Sebastian Sotomayor"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Sobre Mí</h1>
        <p className="text-lg mb-4">
          Hola, soy Juan Sebastian Sotomayor, un apasionado desarrollador de
          software con experiencia en crear soluciones innovadoras y eficientes.
        </p>
        <p className="text-lg mb-4">
          Me especializo en el desarrollo web full stack y disfruto trabajando
          en proyectos que desafían mis habilidades y me permiten crecer
          profesionalmente.
        </p>
      </div>
    </div>
  );
};

export default About;
