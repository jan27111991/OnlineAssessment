//Performs Gui Validations Data taken from excel
export default class Gui {

    validate(data){

        for(var i in data.GUI_ObjectName.split(';')){
            this.validateIndex(data,i)
        }
    }
    validateIndex(data,i){
        if(data.GUI_ObjectType!=undefined&&data.GUI_ObjectType!=""){
            var property=data.GUI_ObjectProperty.split(';')[i]
        var guiType=data.GUI_ObjectType.split(';')[i]
        var locator=data.GUI_ObjectName.split(';')[i]
        var expRes=data.GUI_ExpectedRes.split(';')[i]
        if(guiType=='WebElementDate'){
            var locator=data.GUI_ObjectName.split(';')[i]
                var expRes=data.GUI_ExpectedRes.split(';')[i]
                var property=data.GUI_ObjectProperty.split(';')[i]
              
                if(data.GUI_ObjectName.split(';')[i].includes("/")){
                    var d=new Date()
                    var d1=new Date()
            d1.setDate(d.getDate()+1)
                    if(expRes!=undefined && expRes!="")
                        cy.xpath(locator).should(property, expRes)
                    else
                        cy.xpath(locator).should(property)
                } else{
                  
                    var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
                    var month=['January','February','March','April','May','June','July','August','September','October','November','December']
                    var d=new Date()
                    var d1=new Date()
                    d1.setDate(d.getDate()+1)
        
                    expRes=day[d1.getDay()]+", "+month[d1.getMonth()]+" "+d1.getDate()

                    if(expRes!=undefined && expRes!="")
                        cy.get(locator).eq(0).should(property, expRes)
                    else
                        cy.get(locator).eq(0).should(property)
                }
            }
        else if(guiType=='WebList'){
            cy.log('inner if')
            if(!locator.includes("/")){
            cy.get(locator).its('length').then((size)=>{
                cy.log('len->'+size)
                for(var k=0;k<size;k++){
                    if(expRes!=undefined && expRes!="")
                        cy.get(locator).eq(k).should(property,expRes)
                    else
                        cy.get(locator).eq(k).should(property)
                }
            })
            
            }else{
                cy.xpath(locator).its('length').then((size)=>{
                    for(var k=0;k<size;k++)
                    cy.xpath("("+locator+")["+k+"]").should(property,expRes)
                })
            }
        }else if(guiType=='WebElement'){
            var locator=data.GUI_ObjectName.split(';')[i]
                var expRes=data.GUI_ExpectedRes.split(';')[i]
                var property=data.GUI_ObjectProperty.split(';')[i]
                // cy.log('locator->'+JSON.stringify(locator))
    
                if(data.GUI_ObjectName.split(';')[i].includes("/")){
                    if(expRes!=undefined && expRes!="")
                        cy.xpath(locator).should(property, expRes)
                    else
                        cy.xpath(locator).should(property)
                } else{
                    
                    if(expRes!=undefined && expRes!="")
                        cy.get(locator).should(property, expRes)
                    else
                        cy.get(locator).should(property)
                }
            }
        }
        
        else{
            var locator=data.GUI_ObjectName.split(';')[i]
                var expRes=data.GUI_ExpectedRes.split(';')[i]
                var property=data.GUI_ObjectProperty.split(';')[i]
                // cy.log('locator->'+JSON.stringify(locator))
    
                if(data.GUI_ObjectName.split(';')[i].includes("/")){
                    if(expRes!=undefined && expRes!="")
                        cy.xpath(locator).should(property, expRes)
                    else
                        cy.xpath(locator).should(property)
                } else{
                    
                    if(expRes!=undefined && expRes!="")
                        cy.get(locator).should(property, expRes)
                    else
                        cy.get(locator).should(property)
                }
            }
    }
}