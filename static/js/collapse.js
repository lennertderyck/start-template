/* More info on https://github.com/lennertderyck/collapse */

(() => {
    const app = {
        initialize() {
            console.log('\n' + `%ccollapse.js ${arguments.callee.name}() running! \n` + ' ', 'color: #00d400; font-weight: bold');
            console.log(`%c${arguments.callee.name}()`, 'font-weight: bold');
            this.cached();
            this.collapseTrigger.length !== 0 ? console.log(`\tcollapse triggers available`) : console.log(`\tno collapse triggers`);

            this.collapseTrigger.forEach((trigger) => {
                trigger.addEventListener("click", (() => {
                    this.collapseDo(trigger.dataset.collapseTrigger);
                }));
    
                if (trigger.classList.contains('collapse-hidden') == false) {
                    trigger.classList.add('collapse-hidden');
                }
                
                if (trigger.classList.contains('collapse') == false) {
                    trigger.classList.add('collapse');
                }
            });
    
            this.collapseTarget.forEach((item) => {
                if (item.classList.contains('collapse') == false) {
                    item.classList.add('collapse');
                }
    
                if (item.classList.contains('collapse-hidden') == false) {
                    item.classList.add('collapse-hidden');
                }
            })

            this.collapseItemHide();
        },
    
        cached() {
            console.log(`%c${arguments.callee.name}()`, 'font-weight: bold');
    
            // Put cache elements here
            this.collapseTrigger = document.querySelectorAll('[data-collapse-trigger]');
            this.collapseTarget = document.querySelectorAll('[data-collapse-target]');
            let parent = '', targetName = '', trigger;
        },
    
        collapseDo(target) {
            console.log(`%c${arguments.callee.name}()`, 'font-weight: bold');
    
            this.targetName = target;
            target = document.querySelector(`[data-collapse-target='${target}']`);
    
            parent = target.dataset.collapseParent;
            parent = document.querySelectorAll(`[data-collapse-group="${parent}"] .collapse`);
            trigger = document.querySelector(`[data-collapse-trigger="${this.targetName}"]`);
    
            // COLLAPSE TRIGGER
            if (trigger.classList.contains('collapse-show') == false) {
                this.itemShow(trigger);

                // HIDE ALSO OTHER ELEMENTS
                parent.forEach((item) => {
                    if (item.dataset.collapseTrigger !== this.targetName) {
                        this.itemHide(item);
                    }
                });
            } else {
                this.itemHide(trigger);
            }
    
            // COLLAPSE TARGET
            if (target.classList.contains('collapse-show') == false) {
                this.itemShow(target)
            } else {
                this.itemHide(target)

                // HIDE ALSO OTHER ELEMENTS
                parent.forEach((item) => {
                    if (item.dataset.collapseTarget !== this.targetName) {
                        this.itemHide(item);
                    }
                });
            }
        },

        itemHide(input) {
            input.classList.remove('collapse-show');
            input.classList.add('collapse-hidden');
        },

        itemShow(input) {
            input.classList.add('collapse-show');
            input.classList.remove('collapse-hidden');
        },

        collapseItemHide() {
            document.body.addEventListener("click", function(event) {
                if (event.target.closest(".collapse")) {
                    return
                } else {
                    document.querySelectorAll('[data-collapse-trigger]').forEach((item) => {
                        item.classList.remove('collapse-show');
                        item.classList.add('collapse-hidden');
                    })
    
                    document.querySelectorAll('[data-collapse-target]').forEach((item) => {
                        item.classList.remove('collapse-show');
                        item.classList.add('collapse-hidden');
                    })
                }                
            });
        }        
    }
    
    app.initialize();
})()