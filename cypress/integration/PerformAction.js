//Perfomrs action like Click/Send Keys
export default class PerformAction {

    perform(data){
        for(var i in data.PerformObjName.split(';')){
            this.performIndex(data,i)
        }
    }
    performIndex(data,i){
        var type=data.PerformObjType.split(';')[i].trim()
        var name=data.PerformObjName.split(';')[i].trim()
        var val=data.PerformObjVal.split(';')[i].trim()
        switch(type){
            case "Replace":
                if(name.includes("/")){
                    cy.xpath(name).clear()
                    cy.xpath(name).type(val)
                }else{
                    cy.get(name).clear()
                    cy.get(name).type(val)
                }
                break;
            case "Type":
                if(name.includes("/")){
                    
                    cy.xpath(name).type(val)
                }else{
                    if(name.includes(":")){
                        var index=name.split(":")[1]
                        name=name.split(":")[0]
                        cy.get(name).eq(index).type(val)
                    }else{
                    cy.get(name).type(val)
                    }
                }
                break;
            case "Click":
                if(name.includes("/")){
                    cy.xpath(name).click({force: true})
                 
                }else{
                    cy.log(JSON.stringify(name))
                    if(name.includes(":")){
                        var index=name.split(":")[1]
                        name=name.split(":")[0]
                        cy.get(name).eq(index).click()
                    }else{
                    
                    cy.get(name).click()
                    }
                }
                break
            case "Select":
                if(name.includes("/")){
                    cy.xpath(name).click({force: true})
                    if(val!="")
                    cy.xpath(name).type(val,{force: true})

                }else{
                    cy.get(name).click({force: true})
                    if(val!="")
                    cy.get(name).type(val,{force: true})

                }
                break;
            case "ContainsClick":
                cy.contains(name).click({force: true})
                break

            case "wait":               
                cy.wait(parseInt(val))
                break;    

        }
    }
}