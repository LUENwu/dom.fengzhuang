
const div =dom.create('<div id="test">test<div class="red">red</div></div>')
dom.append(document.body,div)
const div1=dom.find('#test>.red')[0]

dom.style(test2,'color','red')
const divList =dom.find('.red',test2)
console.log(divList)
dom.each(divList,(n)=>console.log(n))