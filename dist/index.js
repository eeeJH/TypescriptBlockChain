"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, preHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.preHash = preHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
var genesisBlock = new Block(0, "1239182476189274618273", "", "Hi", 12345);
var blockChain = [genesisBlock];
console.log(blockChain);
//# sourceMappingURL=index.js.map