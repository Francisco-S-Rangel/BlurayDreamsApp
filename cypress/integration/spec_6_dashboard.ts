describe('Usando o Dashboard de Vendas', () => {

  it('Cliente visita a tela de dashboard e tenta digitar uma data invalida', () => {

    cy.visit("dashboard-vendas")

    cy.get('#datainicio').type('Data invalida')


  })

  it('Cliente visita a tela de dashboard e tenta digitar uma data valida (periodo de 1 ano)', () => {

    cy.get('#datainicio').type('2021-05-13')

    cy.get('#datafim').type('2022-05-30')

    cy.get('#botaoconsulta').click()

    cy.pause()

  })

  it('Cliente visita a tela de dashboard e tenta digitar uma data valida (periodo de 6 meses)', () => {

    cy.get('#datainicio').type('2021-11-30')

    cy.get('#datafim').type('2022-05-30')

    cy.get('#botaoconsulta').click()

    cy.pause()

  })

  it('Cliente visita a tela de dashboard e tenta digitar uma data valida (periodo de 3 meses)', () => {

    cy.get('#datainicio').type('2022-04-30')

    cy.get('#datafim').type('2022-06-30')

    cy.get('#botaoconsulta').click()

    cy.pause()

  })

  it('Cliente visita a tela de dashboard e tenta digitar uma data valida (periodo de 2 meses)', () => {

    cy.get('#datainicio').type('2022-05-30')

    cy.get('#datafim').type('2022-06-30')

    cy.get('#botaoconsulta').click()

    cy.pause()

  })

})
