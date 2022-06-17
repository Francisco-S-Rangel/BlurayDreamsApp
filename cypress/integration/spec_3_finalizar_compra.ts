describe('Condução de Venda (finalizando a compra)', () => {

  it('Cliente escolhe utilizar dois cartões para a compra.', () => {

    cy.get('#selectQtd').select(1)

  })

  it('Cliente escolhe cadastrar um novo cartão.', () => {

    cy.get('input[id=radioCadastrado2]').click()

  })

  it('Cliente digita o numero do cartão.', () => {

    cy.get('#numeroCartao').type('4444 0932 8323 9931')

  })

  it('Cliente digita o nome do titular.', () => {

    cy.get('#NomeTitular').type('Matheus Ramires')

  })

  it('Cliente digita uma bandeira invalida.', () => {

    cy.get('#bandeiraCartao').type('vista')

  })

  it('Cliente digita uma bandeira valida.', () => {

    cy.get('#bandeiraCartao').clear().type('visa')

  })

  it('Cliente digita o cvv.', () => {

    cy.get('#cvv').type('431')

  })

  it('Cliente escolhe nao adicionar o cartão em sua conta.', () => {

    cy.get('input[id=radioCadastrar2]').click()

  })

  it('Cliente escolhe um cartão ja cadastrado em sua conta.', () => {

    cy.get('#escolherCartao2').select(1)

  })

  it('Cliente digita a quantidade que sera paga em cada cartão.', () => {

    cy.get('#valor').type("19.99")

    cy.get('#valor2').type("60.11")

    cy.pause()
  })

  it('Cliente Finaliza a tela de Cartões.', () => {

    cy.get('button[id=finalizarCartao]').click()

  })

  it('Cliente escolhe um endereço ja cadastrado em sua conta e finaliza o endereço de cobrança.', () => {

    cy.get('#selectEnd').select(1)

    cy.pause()

    cy.get('#finalizarEnd').click()

  })

  it('Cliente escolhe cadastrar um endereço novo.', () => {

    cy.get('input[id=radio2]').click()

  })

  it('Cliente escolhe cadastrar um endereço novo.', () => {

    cy.get('#cep').type('23042-420')

    cy.get('#TipoResidencia').type('Casa')

    cy.get('#Logradouro').type('Rua Tal')

    cy.get('#TipoLogradouro').type('Rua')

    cy.get('#bairro').type('Rodeio')

    cy.get('#Cidade').type('Mogi das Cruzes')

    cy.get('#Estado').type('SP')

    cy.get('#Pais').type('Brasil')

    cy.get('#Numero').type('823')

    cy.get('#Apelido').type('Minha casa')

    cy.get('#observacao').type('Minha casa em Mogi das Cruzes')

    cy.get('#finalizarEnd').click()

    cy.wait(300)


  })

})
