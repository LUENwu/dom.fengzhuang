const div = dom.create('<div>div</div>')
const div2 =dom.create('<div>div2</div>')
const span1 = dom.create('<span>span1</span>')
console.log(div)
dom.after(test,div)
dom.before(test,div2)
dom.append(test,span1)
dom.wrap(div,span1)

// const nodes = dom.empty(test2)
// console.log(nodes)
 dom.attr(test2,'title','_blank')
 const title =dom.attr(test2,'title')
console.log(`title:${title}`)

dom.style(test2,{border:'1px solid red',color:'blue'})
dom.style(test,'color','red')
const style1 = dom.style(test,'color')
console.log(style1)

dom.class.add(span1,'green')
dom.class.add(div,'font')

dom.class.remove(div,'font')

const have = dom.class.has(span1,'green')
console.log(have)

const fn =()=>{console.log('hello world')}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

const testDiv = dom.find('#test2')[0]
console.log(testDiv)
const x = dom.find('.red',testDiv)[0]
console.log(x)
const y = dom.siblings(dom.find('.red')[1])
console.log(y)
const z =dom.next(dom.find('.red')[0])
console.log(z)
const o = dom.pre(dom.find('.red')[1])
console.log(o)

const m=dom.find('#travel')[0]
console.log(m)
dom.each(dom.children(m),(n)=>dom.style(n,'color','red'))

const su = document.querySelector('.red3')
console.log(su)
console.log(dom.index(su))