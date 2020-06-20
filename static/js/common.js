export class callerName {
    constructor(file) {
        this.file = file + '.js';
        this.pauseLogging = false;
    }
    
    pause() {
        this.pauseLogging = true
    }
    
    init() {
        if (this.pauseLogging == false) console.log(`\n%c[service] ${this.file} running! \n` + ' ', 'color: #00d400; font-weight: bold')
    }
    
    add(funct) {
        if (this.pauseLogging == false) console.log(`%c[service] ${this.file}:${funct}()`, 'font-weight: bold');
    }
    
    log(logged) {
        if (this.pauseLogging == false) console.log('\t' + logged);
    }
}

export class Element {
    constructor(tagname) {
        if (typeof tagname != 'string') throw new Error('The tagname of this new element is not of the type string')
        try {this.el = document.createElement(tagname);}
        catch (err) {
            console.error('Something went wrong when creating a new element. We logged the error message for you convenience:');
            console.log(err);
        }
    }
    
    class(array) {
        if (typeof array != 'object') throw new Error('You should use an array for adding classes to an element')
        try {array.map(i => this.el.classList.add(i))}
        catch (err) {
            console.error('Something went wrong when adding classes. We logged this element and the error message for you convenience:');
            console.log(err);
            console.log(this.el);
        }
    }
    
    attributes(array) {
        if (typeof array != 'object') throw new Error('You should use an array for adding attributes to an element')
        try {array.map(i => this.el.setAttribute(i[0], i[1]))}
        catch (err) {
            console.error('Something went wrong when adding attribtues. We logged this element and the error message for you convenience:');
            console.log(err);
            console.log(this.el);
        }
    }
    
    innerHTML(input) {
        this.el.innerHTML = input;
    }
    
    log() {
        console.log(this.el);
    }
    
    append(node = 'html body', type = 'selector') {
        if (typeof node == 'string') node = document.querySelector(node)
        else if (typeof node == 'object') node = node
        
        try {node.appendChild(this.el);}
        catch (err) {
            console.error('Something went wrong when adding an element. You\'ve probably entered a wrong selector or node element. We logged this element and the error message for you convenience:');
            console.log(err);
            console.log(this.el);
        }
    }
    
    return() {
        return this.el;
    }
}