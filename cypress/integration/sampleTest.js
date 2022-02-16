// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })

  describe('My First Test', () => {
    it('User can add Sub', () => {
     cy.visit('http://localhost:3000/')
     cy.findByRole('button', {  name: /add/i}).click()
     cy.get('#root > div > div:nth-child(2) > div:nth-child(5) > div > form > div > div:nth-child(1)').clear().type(240)
     cy.get('#root > div > div:nth-child(2) > div:nth-child(5) > div > form > div > div:nth-child(2)').clear().type("Amazon Prime Test")
     cy.get('#root > div > div:nth-child(2) > div:nth-child(5) > div > form > div > div:nth-child(3)').clear().type("To get things fast")
     cy.get('#root > div > div:nth-child(2) > div:nth-child(5) > div > form > div > div:nth-child(4)').click()
     cy.get('[id="billingPeriodDate"]').type(22)
     cy.get('[id="billingPeriodFrequency"]').click()
     
     cy.get('[data-value="Day"]').click()
     cy.get('[placeholder="mm/dd/yyyy"]').type("12/12/2012")
     cy.get('[id="colourpickerbutton"]').click()
     cy.get('[id="#03a9f4"]').click()
     cy.get('[id="saveSubscription"]').click()

     cy.findByText(`Amazon Prime Test`).should('be.visible')


    })
  })

//   describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(false)
//     })
//   })