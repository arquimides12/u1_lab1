class productCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return ["img", "title", "price", "description"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
    }
  
    get template() {
      const template = document.createElement("template");
      template.innerHTML = `
        <style>
          :host {
            display: block;
            width: 280px;
            background: #ff617a;
  
            /* BORDE SUAVIZADO EN EXTREMOS */
            border-radius: 50px 40px 40px 50px / 60px 35px 35px 60px;
  
            padding: 30px 20px;
            box-sizing: border-box;
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            position: relative;
            box-shadow: 0 8px 15px rgba(0,0,0,0.2);
            transition: width 0.3s ease;
            text-align: center;
          }
  
          h2 {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 5px;
            line-height: 1.1;
            white-space: pre-line;
          }
  
          p.description {
            font-size: 0.9rem;
            margin-bottom: 25px;
            color: #fce5e8;
            text-align: center;
          }
  
          .img-container {
            width: 200px;
            height: 200px;
            margin: 0 auto 20px;
            border-radius: 50%;
            background: #ff3f61;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            box-shadow: inset 0 0 40px 15px #ff617a;
          }
  
          .img-container img {
            max-width: 130px;
            max-height: 130px;
            border-radius: 50%;
            transform: rotate(-10deg);
            transition: transform 0.3s ease;
          }
  
          .img-container img:hover {
            transform: rotate(0deg) scale(1.1);
          }
  
          .price-tag {
            position: absolute;
            top: 50%;
            right: -35px;
            transform: translateY(-50%);
            background: #fdd835;
            color: black;
            padding: 7px 15px;
            font-weight: 700;
            font-size: 1rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.25);
            user-select: none;
            white-space: nowrap;
            border-radius: 5px 0 5px 5px;
          }
  
          .price-tag::after {
            content: "";
            position: absolute;
            top: 50%;
            right: -10px;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid #fdd835;
            filter: drop-shadow(-1px 0 1px rgba(0,0,0,0.15));
          }
  
          button {
            width: 100%;
            padding: 15px 0;
            background-color: #2f3136;
            color: white;
            font-weight: 700;
            border: none;
            border-radius: 30px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
  
          button:hover {
            background-color: #474a52;
          }
  
          /* MEDIA QUERY RESPONSIVO */
          @media (max-width: 480px) {
            :host {
              width: 90vw;
  
              /* BORDE SUAVIZADO AJUSTADO PARA MÓVIL */
              border-radius: 35px 25px 25px 35px / 45px 25px 25px 45px;
  
              padding: 20px 15px;
            }
  
            h2 {
              font-size: 1.1rem;
            }
  
            p.description {
              font-size: 0.85rem;
              margin-bottom: 15px;
            }
  
            .img-container {
              width: 150px;
              height: 150px;
              margin-bottom: 15px;
              box-shadow: inset 0 0 25px 8px #ff617a;
            }
  
            .img-container img {
              max-width: 100px;
              max-height: 100px;
            }
  
            .price-tag {
              right: -30px;
              font-size: 0.9rem;
              padding: 5px 12px;
            }
  
            .price-tag::after {
              right: -8px;
              border-top: 8px solid transparent;
              border-bottom: 8px solid transparent;
              border-left: 8px solid #fdd835;
            }
  
            button {
              padding: 12px 0;
              font-size: 0.9rem;
              border-radius: 25px;
            }
          }
        </style>
  
        <h2>${this.title || 'Título del producto'}</h2>
        <p class="description">${this.description || 'Descripción del producto'}</p>
  
        <div class="img-container">
          <img src="${this.img || './img/nike.png'}" alt="${this.title || 'Producto'}" />
          <div class="price-tag">${this.price || '$0'}</div>
        </div>
  
        <button>Shop Now</button>
      `;
      return template;
    }
  
    render() {
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
  
    connectedCallback() {
      this.render();
    }
  }
  
  customElements.define("product-card", productCard);
  