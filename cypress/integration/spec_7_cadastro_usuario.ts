describe('Cadastrando um Novo Usuário', () => {

  it('Cliente começa a cadastrar sua conta e digita seu nome.', () => {



    cy.visit("cadastrar-cliente")

    cy.get('#nome').type('Francisco Souza Rangel')


  })

  it('Cliente tenta clicar no botão proximo, mesmo com varios campos em branco.', () => {



    cy.get('#finaliza').click()

  })

  it('Cliente digita seu email, porém num formato invalido.', () => {



    cy.get('#email').type('francisco.com')


  })

  it('Cliente digita seu email, porém num formato valido.', () => {



    cy.get('#email').clear().type('francisco@gmail.com')


  })

  it('Cliente digita um valor invalido no campo de data de nascimento.', () => {



    cy.get('#nascimento').type('teste')


  })

  it('Cliente digita um valor valido no campo de data de nascimento.', () => {



    cy.get('#nascimento').type('2000-04-07')


  })

  it('Cliente digita um valor invalido (string) no campo de DDD.', () => {



    cy.get('#ddd').type('Francisco')


  })

  it('Cliente digita um valor valido no campo de DDD.', () => {



    cy.get('#ddd').type('11')


  })

  it('Cliente digita um valor valido no campo de Telefone.', () => {



    cy.get('#numero').type('971828848')


  })

  it('Cliente digita um valor valido no campo de Tipo de Telefone.', () => {



    cy.get('#tipotel').type('celular')


  })

  it('Cliente digita um valor valido no campo de CPF.', () => {



    cy.get('#cpf').type('11971828848')


  })

  it('Cliente digita um Senha com menos de 8 caracteres.', () => {



    cy.get('#senha').type('1234567')


  })

  it('Cliente digita um Senha com 8 caracteres.', () => {



    cy.get('#senha').clear().type('12345678')


  })

  it('Cliente digita no campo confirmar senha, uma senha não igual a senha original.', () => {



    cy.get('#confsenha').type('123456789')


  })

  it('Cliente tenta finalizar o cadastro, mesmo com o campo confirmar senha incorreto.', () => {



    cy.get('#finaliza').click()


  })

  it('Cliente digita corretamente a confirmação de senha', () => {



    cy.get('#confsenha').clear().type('12345678')


  })

  it('Cliente tenta finalizar o cadastro com os campos corretamente preenchidos.', () => {



    cy.get('#finaliza').click()


  })

  it('Cliente digita o campo CEP com letras.', () => {



    cy.get('#cep').type('teste')


  })

  it('Cliente digita o campo CEP com números.', () => {



    cy.get('#cep').clear().type('08900001')


  })

  it('Cliente digita todos os campos do endereço de entrega corretamente.', () => {



    cy.get('#TipoResidencia').type('Casa')

    cy.get('#Logradouro').type('Rua Tal')

    cy.get('#TipoLogradouro').type('Rua')

    cy.get('#bairro').type('Rodeio')

    cy.get('#Cidade').type('Mogi das Cruzes')

    cy.get('#Estado').type('São Paulo')

    cy.get('#Pais').type('Brasil')

    cy.get('#Numero').type('312')

    cy.get('#Apelido').type('Minha casa')

  })

  it('Cliente tenta finalizar o pedido sem ter cadastrado o endereço de cobrança.', () => {



    cy.get('#finalizaEnd').click()

  })

  it('Cliente cadastra o endereço de cobrança.', () => {



    cy.get('#cep2').type('0855520')

    cy.get('#TipoResidencia2').type('Apartamento')

    cy.get('#Logradouro2').type('Rua Teste')

    cy.get('#TipoLogradouro2').type('Rua')

    cy.get('#bairro2').type('Rodeio')

    cy.get('#Cidade2').type('Mogi das Cruzes')

    cy.get('#Estado2').type('São Paulo')

    cy.get('#Pais2').type('Brasil')

    cy.get('#Numero2').type('312')

  })

  it('Cliente tenta finalizar o pedido sem ter cadastrado o campo observação (opcional).', () => {



    cy.get('#finalizaEnd').click()

  })

  it('Cliente cadastra o número de cartão.', () => {



    cy.get('#numeroCartao').type('4012 4123 2231 4122')

  })

  it('Cliente cadastra a bandeira do cartão, com uma bandeira não aceita pelo sistema.', () => {



    cy.get('#bandeiraCartao').type('elost')

  })

  it('Cliente cadastra a bandeira do cartão, com uma bandeira não aceita pelo sistema.', () => {



    cy.get('#bandeiraCartao').clear().type('visa')

  })

  it('Cliente cadastra o CVV.', () => {



    cy.get('#cvv').type('231')

  })

  it('Cliente finaliza o seu cadastro.', () => {



    cy.get('#finalizar').click()

  })

})
