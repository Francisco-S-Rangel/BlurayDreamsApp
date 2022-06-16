describe('Condução de Venda (Manipular pedidos)', () => {

  it('Funcionario consulta pedidos do cliente que realizou a compra.', () => {

    cy.visit('/')

    cy.contains('Minha Conta').click()

    cy.get('#botFuncionario').click()

    cy.get('#botCliente').click()

    cy.get('#cli1').click()

    cy.get('#cliVisualizar1').click()

    cy.get('#cliPedidos').click()

  })

  it('Funcionario seleciona pedido realizado do cliente e valida a compra.', () => {

    cy.get('#pedido1').click()

    cy.get("#aceitarPedido").click()

  })

  it('Funcionario envia o produto para entrega.', () => {

    cy.get('#enviarEntrega').click()

  })

  it('Funcionario finaliza a entrega.', () => {

    cy.get('#finalizarEntrega').click()

  })

  it('Cliente vai em seu perfil e ve seus pedidos.', () => {

    cy.visit('/')

    cy.contains('Minha Conta').click()

    cy.get('#botPerfil').click()

    cy.get('#verPedidos').click()

  })

  it('Cliente clica em detalhes do seu pedido.', () => {

    cy.get('#verDetalhesPedido1').click()

  })
})
