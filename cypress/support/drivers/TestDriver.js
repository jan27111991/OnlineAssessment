import Gui from "../../integration/Gui";
// import ;
export default class TestDriver {

    testDriver(data) {
        // require('cypress-image-compare')
        cy.visit("https://www.google.com/")
        cy.get('input[name=q]').type(data.data)

        // cy.get("div[jsname='aajZCb']").matchImage("sample", { update: true });
        cy.matchImageSnapshot('sample')
        // cy.compareSnapshot('sample')
        // cy.xpath("//input[@name='name']").type(data.columnName)
       /* for(var i=0;i<data.TestScenario.split(';').length;i++) {
        switch(data.TestScenario.split(';')[i]) {
            case "Login":
                

                
            break;
            case "Logout":
                break;
            case "Gui":
                var gui = new Gui()
                gui.validate(data)
                break
           
        }}*/
    

 
    }
}


