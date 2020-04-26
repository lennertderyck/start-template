export class callerName {
    constructor(file) {
        this.file = file + '.js';
    }
    
    init() {
        console.log(`\n%c[service] ${this.file} running! \n` + ' ', 'color: #00d400; font-weight: bold')
    }
    
    add(funct) {
        console.log(`%c[service] ${this.file}:${funct}()`, 'font-weight: bold');
    }
    
    log(logged) {
        console.log('\t' + logged);
    }
}