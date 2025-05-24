# u1_lab1

 attributeChangedCallback(name, oldValue, newValue) {
    // Solo renderizamos, no asignamos this[name] para evitar loop infinito
    this.render();
  }

  get template() {
// dentro del template ponemos esto para evitar el error del loop 
    // Tomamos valores directamente desde los atributos
    const title = this.getAttribute('title') || 'Título del producto';
    const price = this.getAttribute('price') || '$0';
    const img = this.getAttribute('img') || './img/nike.png';
    const description = this.getAttribute('description') || 'Descripción del producto';
