class Block {
    public index: number;
    public hash: string;
    public preHash: string;
    public data: string;
    public timestamp: number;

    constructor(
        index: number,
        hash: string,
        preHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.preHash = preHash;
        this.data = data;
        this.timestamp = timestamp;
    }

}

var genesisBlock: Block = new Block(0, "1239182476189274618273", "", "Hi", 12345);

var blockChain: [Block] = [genesisBlock];

console.log(blockChain);

export {};