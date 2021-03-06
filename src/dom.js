window.dom={
   //增加
  create(string){
      const container = document.createElement('template')
      container.innerHTML=string.trim()
      return container.content.firstChild
    },
    after(node,node2){
      node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node,node2){
      node.parentNode.insertBefore(node2,node) 
    },
    append(parent,node){
      parent.appendChild(node)
      
    },
    wrap(parent,node){
      dom.before(node,parent)
      dom.append(parent,node)
    },
    remove(node){
      node.parentNode.removeChild(node)
      return node
    },
    empty(node){
     let x =node.firstChild
     const array=[]
     while(x){
       array.push(dom.remove(node.firstChild))
       x=node.firstChild
     }
     return array
    },
    //改
    attr(node,name,value){//重载
      if(arguments.length===3){
       node.setAttribute(name,value)
      }else if(arguments.length===2){
        return node.getAttribute(name)
      }
    },
    text(node,string){
      if(arguments.length===2){
        if('innerText'in node){
          node.innerText=string //ie
        }else {
          node.textContent=string //firefox ,chrome
      }
      }else if(arguments.length===1){
        if('innerText'in node){
          return node.innerText 
        }else {
          return node.textContent 
      }
      } 
      },
    html(node,string){
      if(arguments.length===2){
        node.innerHTML=string
      }else if(arguments.length===1){
        return node.innerHTML
      }
    },
    style(node,name,value){
      if(arguments.length===3){
        node.style[name]=value   
      }else if(arguments.length===2){
        if(typeof name === 'string'){
          return node.style[name]
        }else if(name instanceof Object){
          let object = name
          for(let key in object){
            node.style[key]=object[key]
          }
        }    
      }
    },
    class:{
      add(node,className){
        node.classList.add(className)
      },
      remove(node,className){
        return node.classList.remove(className)
      },
      has(node,className){
        return node.classList.contains(className)
      }
    },
    on(node,eventName,fn){
      node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
      return node.removeEventListener(eventName,fn)
    },
    find(selector,scope){
      return (scope || document).querySelectorAll(selector)
    },
    parent(node){
      return node.parentNode
    },
    children(node){
      return node.children
    },
    siblings(node){
      return Array.from(node.parentNode.children).filter(item=>item!==node)
    },
    next(node){
      return node.nextElementSibling
    },
     pre(node){
      return node.previousElementSibling
     },
     each(nodeList,fn){
      for(let i =0;i<nodeList.length;i++){
        fn.call(null,nodeList[i])
      }
     },
     index(node){
     let i = Array.from(node.parentElement.children).indexOf(node)
     return i
      }
     }

      
   
     
  

