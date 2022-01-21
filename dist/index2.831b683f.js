window.dom = {
    create (string) {
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    find (node) {
        return document.querySelectorAll(node);
    },
    append (parent, node) {
        return parent.appendChild(node);
    },
    class: {
        add (node, className) {
            node.classList.add(className);
        },
        remove (node, className) {
            return node.classList.remove(className);
        }
    },
    find (selector, scope) {
        return Array.from((scope || document).querySelectorAll(selector));
    },
    style (node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value;
            return node;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') return node.style[name];
            else if (name instanceof Object) {
                let object = name;
                for(let key in object)node.style[key] = object[key];
            }
        }
    },
    each (divList, fn) {
        for(let i = 0; i < divList.length; i++)fn.call(null, divList[i]);
    }
};

//# sourceMappingURL=index2.831b683f.js.map
