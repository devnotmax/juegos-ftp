import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Acerca de</h4>
          <p>
            Somos una plataforma dedicada a ofrecer recomendaciones de juegos
            gratuitos para todos los entusiastas del gaming. ¡Descubre tus
            nuevos juegos favoritos con nosotros!
          </p>
        </div>
        <div className="footer-section">
          <h4>Enlaces útiles</h4>
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>
            Email: <a href="mailto:support@example.com">support@example.com</a>
          </p>
          <p>
            Teléfono: <a href="tel:+123456789">+123 456 789</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TuEmpresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
