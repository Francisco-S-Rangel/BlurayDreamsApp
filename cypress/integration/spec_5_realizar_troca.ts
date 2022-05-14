describe('Condução de Venda (Realizar Trocas)', () => {

  it('Cliente seleciona a quantidade de produtos que deseja trocar e solicita a troca.', () => {

    cy.pause()

    cy.visit("perfil-usuario-trocas/1/1")

    cy.get('#selectTroca0').select(1)

    cy.get('#selectTroca1').select(1)

    cy.get("#solicitarTroca").click()

  })

  it('Funcionario visualiza as trocas e clica na primeira troca feita.', () => {

    cy.pause()

    cy.contains('Minha Conta').click()

    cy.get('#botFuncionario').click()

    cy.get("#botTrocas").click()

    cy.get("#troca1").click()

    cy.get("#trocaVisualizar1").click()

  })

  it('Funcionario aceita a troca e re-estoca o produto.', () => {

    cy.pause()

    cy.get('#aceitarTroca').click()

    cy.get('#restocarSim').click()

  })

  it('Funcionario visualiza as trocas e escolhe a outra feita.', () => {

    cy.pause()

    cy.get('#retornar').click()

    cy.get("#troca2").click()

    cy.get("#trocaVisualizar2").click()

  })

  it('Funcionario recusa a troca.', () => {

    cy.pause()

    cy.get('#recusarTroca').click()

  })

  it('Cliente vai em seu perfil e ve sua troca que foi aceita.', () => {

    cy.pause()

    cy.visit('/')

    cy.contains('Minha Conta').click()

    cy.get('#botPerfil').click()

    cy.get('#verPedidos').click()

    cy.get('#verDetalhesTroca1').click()

  })

  it('Cliente vai em seu perfil e ve sua troca que foi recusada.', () => {

    cy.pause()

    cy.get('#retornar').click()

    cy.get('#verDetalhesTroca2').click()

  })

})
