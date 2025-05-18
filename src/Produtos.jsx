import React from 'react';
import './Produtos.css'; // importe seu CSS aqui



export default function Produtos() {
  return (
    <>
      <header>
        {/* LOGOTIPO INICIAL */}
        <img src="/devstylelogo.png" alt="DevStyle Logo" className="devlogo" />
        <nav>
          <a href="#">HOME</a>
          <a href="#">CATEGORIAS</a>
          <a href="#">CONTATO</a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:contato@seudominio.com"><i className="fas fa-envelope"></i></a>
        </nav>

        {/* Caixa de busca */}
        <div className="search-box">
          <input type="text" placeholder="Buscar produtos..." />
          <button className="search-button"><i className="fas fa-search"></i></button>
        </div>
      </header>

      <div className="breadcrumb">
        PÁGINA INICIAL &gt; CAMISETAS
      </div>

      <main>
        <aside>
          <ul className="aside-list">
            <li>
              CAMISETAS
              <ul>
                <li>DIVERTIDAS</li>
                <li>CORPORATIVAS</li>
                <li>ESPAÇO GEEK</li>
              </ul>
            </li>
            <li>CANECAS</li>
            <li>GARRAFAS</li>
          </ul>
        </aside>

        <section className="content">
          <h1>CAMISETAS</h1>
          <div className="products">
            {/* Produto 1 */}
            <div className="product">
              <img src="/modelo1.png" alt="Camiseta May The Code Be With You" />
              <p>Camiseta May The Code Be With You</p>
              <span>R$59,90</span>
            </div>

            {/* Produto 2 */}
            <div className="product">
              <img src="/modelo2.png" alt="Camiseta Girl Code Lover" />
              <p>Camiseta Girl Code Lover</p>
              <span>R$54,90</span>
            </div>

            {/* Produto 3 */}
            <div className="product">
              <img src="/modelo3.png" alt='Camiseta "code is my superpower"' />
              <p>Camiseta <i>"code is my superpower"</i></p>
              <span>R$54,90</span>
            </div>

            {/* Produto 4 */}
            <div className="product">
              <img src="/modelo4.png" alt="Camiseta FULL STRACK DEV" />
              <p>Camiseta FULL STRACK DEV</p>
              <span>R$59,90</span>
            </div>

            {/* Produto 5 */}
            <div className="product">
              <img src="/modelo5.png" alt='Camiseta "everything is under control"' />
              <p>Camiseta <i>everything is under control"</i></p>
              <span>R$59,90</span>
            </div>

            {/* Produto 6 */}
            <div className="product">
              <img src="./modelo6.png" alt="Camiseta Code like a girl" />
              <p>Camiseta Code like a girl</p>
              <span>R$59,90</span>
            </div>

            {/* Produto 7 */}
            <div className="product">
              <img src="/modelo7.png" alt="Camiseta Font Style Italic" />
              <p>Camiseta Font Style Italic"</p>
              <span>R$59,90</span>
            </div>

            {/* Produto 8 */}
            <div className="product">
              <img src="/modelo8.png" alt="Camiseta I need a space" />
              <p>Camiseta I need a space</p>
              <span>R$59,90</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
