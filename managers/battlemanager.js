function BattleManager() {
    this.cursor = new Cursor();
    this.grid = new Grid();
}

BattleManager.prototype.createBattle = function () {
    //do some things to create cool battles
    let spec = {
        enemies = []
        
    }
}

BattleManager.prototype.startBattle = function (spec) {
    gm.em.addEntity(this.cursor);
    gm.em.addEntity(this.grid);
    
    let battle = spec.battle;
    
    
}



BattleManager.prototype.update = function () {
    
}

function Battle(spec) {
        
}


