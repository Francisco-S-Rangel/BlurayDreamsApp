describe('Cadastrando um Novo Usuário', () => {

  it('Cliente começa a cadastrar sua conta e digita seu nome.', () => {

    cy.pause()

    cy.visit("cadastrar-cliente")

    cy.get('#nome').type('Francisco Souza Rangel')


  })

  it('Cliente tenta clicar no botão proximo, mesmo com varios campos em branco.', () => {

    cy.pause()

    cy.get('#finaliza').click()

  })

  it('Cliente digita seu email, porém num formato invalido.', () => {

    cy.pause()

    cy.get('#email').type('francisco.com')


  })

  it('Cliente digita seu email, porém num formato valido.', () => {

    cy.pause()

    cy.get('#email').clear().type('francisco@gmail.com')


  })

  it('Cliente digita um valor invalido no campo de data de nascimento.', () => {

    cy.pause()

    cy.get('#nascimento').type('teste')


  })

  it('Cliente digita um valor valido no campo de data de nascimento.', () => {

    cy.pause()

    cy.get('#nascimento').type('2000-04-07')


  })

  it('Cliente digita um valor invalido (string) no campo de DDD.', () => {

    cy.pause()

    cy.get('#ddd').type('Francisco')


  })

  it('Cliente digita um valor valido no campo de DDD.', () => {

    cy.pause()

    cy.get('#ddd').type('11')


  })

  it('Cliente digita um valor valido no campo de Telefone.', () => {

    cy.pause()

    cy.get('#numero').type('971828848')


  })

  it('Cliente digita um valor valido no campo de Tipo de Telefone.', () => {

    cy.pause()

    cy.get('#tipotel').type('celular')


  })

  it('Cliente digita um valor valido no campo de CPF.', () => {

    cy.pause()

    cy.get('#cpf').type('11971828848')


  })

  it('Cliente digita um Senha com menos de 8 caracteres.', () => {

    cy.pause()

    cy.get('#senha').type('1234567')


  })

  it('Cliente digita um Senha com 8 caracteres.', () => {

    cy.pause()

    cy.get('#senha').clear().type('12345678')


  })

  it('Cliente digita no campo confirmar senha, uma senha não igual a senha original.', () => {

    cy.pause()

    cy.get('#confsenha').type('123456789')


  })

  it('Cliente tenta finalizar o cadastro, mesmo com o campo confirmar senha incorreto.', () => {

    cy.pause()

    cy.get('#finaliza').click()


  })

  it('Cliente digita corretamente a confirmação de senha', () => {

    cy.pause()

    cy.get('#confsenha').clear().type('12345678')


  })

  it('Cliente tenta finalizar o cadastro com os campos corretamente preenchidos.', () => {

    cy.pause()

    cy.get('#finaliza').click()


  })

})
