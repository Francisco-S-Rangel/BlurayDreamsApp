describe('Condução de Venda (adição de produtos)', () => {

  it('Visita a pagina inicial e clica no primeiro produto', () => {
    cy.visit('/')
    cy.wait(400)

    cy.get('#1').click()
  })

  it('Cliente tenta escolher uma quantidade maior que o estoque.', () => {

    cy.get('input[name="quantidade"]').clear().type("9")

    cy.get('button[name="comprar"]').click()

  })

  it('Cliente tenta colar uma quantidade invalida (zero ou números negativos)', () => {

    cy.get('input[name="quantidade"]').clear().type("-3")

    cy.get('button[name="comprar"]').click()
  })

  it('Cliente digita uma quantidade valida', () => {

    cy.get('input[name="quantidade"]').clear().type("2")

    cy.get('button[name="comprar"]').click()
  })

  it('Volta a pagina inicial e clica/adiciona outro produto', () => {

    cy.visit('/')

    cy.get('#2').click()

    cy.get('input[name="quantidade"]').clear().type("2")

    cy.get('button[name="comprar"]').click()
  })

  it('Volta a pagina inicial e clica/adiciona um produto ja presente no carrinho', () => {

    cy.visit('/')

    cy.get('#2').click()

    cy.get('input[name="quantidade"]').clear().type("1")

    cy.get('button[name="comprar"]').click()

  })

  it('Volta a pagina inicial e clica/adiciona outro produto', () => {

    cy.visit('/')

    cy.get('#3').click()

    cy.get('input[name="quantidade"]').clear().type("1")

    cy.get('button[name="comprar"]').click()
  })

})
