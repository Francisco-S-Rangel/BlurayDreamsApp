describe('Condução de Venda (manipulando o carrinho)', () => {

  it('Cliente tenta alterar a quantidade de um produto para uma quantidade invalida', () => {

    cy.visit('carrinho-compras')
    cy.wait(400)

    cy.get('input[id=1]').clear().type("5")

    cy.get('button[id=alterar1]').click()
  })

  it('Cliente altera a quantidade de um produto para uma quantidade valida', () => {

    cy.get('input[id=1]').clear().type("3")

    cy.get('button[id=alterar1]').click()
  })

  it('Cliente exclui um produto do carrinho', () => {

    cy.get('button[id=excluir3]').click()
  })

  it('Cliente digita uma quantidade superior aos seus creditos', () => {

    cy.get('#credito').click().clear().type("1000.00").blur()
  })

  it('Cliente digita uma quantidade superior ao preco do carrinho', () => {

    cy.get('#credito').click().clear().type("140.20").blur()
  })

  it('Cliente digita uma quantidade inferior ao preco do carrinho', () => {

    cy.get('#credito').click().clear().type("39.50").blur()
  })

  it('Cliente digita um cep errado para calcular o frete', () => {

    cy.get('#cep').click().type("123abc")

    cy.get('#botaoCep').click()
  })

  it('Cliente digita um cep correto para calcular o frete', () => {

    cy.get('#cep').click().clear().type("08923-429")

    cy.get('#botaoCep').click()
  })

  it('Cliente digita um cupom invalido', () => {

    cy.get('#cupom').click().type("asb333")

    cy.get('#botaoCupom').click()
  })

  it('Cliente digita um cupom valido para aplicar ao carrinho', () => {

    cy.get('#cupom').click().clear().type("abc123")

    cy.get('#botaoCupom').click()

  })

  it('Cliente clica em finalizar o pedido', () => {

    cy.get('#finalizar').click()

  })
})
