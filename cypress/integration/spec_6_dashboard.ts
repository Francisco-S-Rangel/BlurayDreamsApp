describe('Usando o Dashboard de Vendas', () => {

  it('Cliente visita a tela de dashboard e tenta digitar uma data invalida', () => {

    cy.pause()

    cy.visit("dashboard-vendas")

    cy.get('#datainicio').type('Data invalida')


  })

  it('Cliente visita a tela de dashboard e tenta digitar uma data valida (periodo de 1 ano)', () => {

    cy.pause()

    cy.get('#datainicio').type('2021-05-13')

    cy.get('#datafim').type('2022-05-30')

    cy.get('#botaoconsulta').click()

  })

  it('Cliente visita a tela de dashboard e tenta digitar uma data valida (periodo de 6 meses)', () => {

    cy.pause()

    cy.get('#datainicio').type('2021-11-30')

    cy.get('#datafim').type('2022-05-30')

    cy.get('#botaoconsulta').click()

  })

  it('Cliente visita a tela de dashboard e tenta digitar uma data valida (periodo de 3 meses)', () => {

    cy.pause()

    cy.get('#datainicio').type('2022-04-30')

    cy.get('#datafim').type('2022-06-30')

    cy.get('#botaoconsulta').click()

  })

  it('Cliente visita a tela de dashboard e tenta digitar uma data valida (periodo de 2 meses)', () => {

    cy.pause()

    cy.get('#datainicio').type('2022-05-30')

    cy.get('#datafim').type('2022-06-30')

    cy.get('#botaoconsulta').click()

  })

})
