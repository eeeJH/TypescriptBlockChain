import * as CryptoJS from "crypto-js";

class Block {

    static calculateHash = (index: number, preHash: string, timestamp: number, data: string): string => 
    CryptoJS.SHA256(index + preHash + timestamp + data).toString();
    
    static validateStructure = (aBlock: Block) : boolean => 
    typeof aBlock.index === 'number' && 
    typeof aBlock.hash === 'string' && 
    typeof aBlock.preHash === 'string' &&    
    typeof aBlock.data === 'string' &&
    typeof aBlock.timestamp === 'number'


    // static 다음에 있는게 좋다.
    
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

// 최초 블록
var genesisBlock: Block = new Block(0, "1239182476189274618273", "", "Hi", 12345);

// Block arr
var blockChain: [Block] = [genesisBlock];

// 가져오기
var getBlockChain = () : Block[] => blockChain;

// 최근 블록
var getLatestBlcok = () : Block => blockChain[blockChain.length - 1];

// 시간 계산
var getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// 블록 만들고
var createBlock = (data: string): Block => {
    var preBlock: Block = getLatestBlcok();
    var newIndex: number = preBlock.index + 1;
    var newTimeStamp: number = getNewTimeStamp();
    var nextHash: string = Block.calculateHash(newIndex, preBlock.hash, newTimeStamp, data);

    var newBlock: Block = new Block(newIndex, nextHash, preBlock.hash, data, newTimeStamp);

    addBlock(newBlock);

    return newBlock;
};


// 해쉬를 얻자.
var getHashBlock = (block: Block): string => Block.calculateHash(block.index, block.preHash, block.timestamp, block.data);


// 구조 검증, 해쉬검증, 이전블록 검증, 새로운 블록 검증
var isBlockValid = (candidateBlock: Block, preBlock: Block): boolean => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    } else if (preBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if (preBlock.hash !== candidateBlock.preHash) {
        return false;
    } else if (getHashBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }


};


// 블록을 추가하자.
var addBlock = (candidateBlock: Block): void => {
    if (isBlockValid(candidateBlock, getLatestBlcok())) {
        blockChain.push(candidateBlock);
    }
};

createBlock('second Block');
createBlock('third Block');
createBlock('fourth Block');
createBlock('fifth Block');
createBlock('sixth Block');
createBlock('seventh Block');

console.log(blockChain);
/*
[
  Block {
    index: 0,
    hash: '1239182476189274618273',
    preHash: '',
    data: 'Hi',
    timestamp: 12345
  },
  Block {
    index: 1,
    hash: '310b5535c2c6261d7b0def0ec6a874d4e0f510c0a4706de29bd421c5c4d19e74',
    preHash: '1239182476189274618273',
    data: 'second Block',
    timestamp: 1618281717
  },
  Block {
    index: 2,
    hash: 'efeba2cb932653b2543d1885ab791370fb6a3c27ffb906e3aa45d24453ea1ce6',
    preHash: '310b5535c2c6261d7b0def0ec6a874d4e0f510c0a4706de29bd421c5c4d19e74',
    data: 'third Block',
    timestamp: 1618281717
  },
  Block {
    index: 3,
    hash: '64f0138fe12476e2dd0b61e073a5db58e48c7200f475e06d36f5ce4854a0fa44',
    preHash: 'efeba2cb932653b2543d1885ab791370fb6a3c27ffb906e3aa45d24453ea1ce6',
    data: 'fourth Block',
    timestamp: 1618281717
  },
  Block {
    index: 4,
    hash: '19f043512e058933ed6a08e3a0fcc39db31319b83545ae7f6ecfd2119c287a1b',
    preHash: '64f0138fe12476e2dd0b61e073a5db58e48c7200f475e06d36f5ce4854a0fa44',
    data: 'fifth Block',
    timestamp: 1618281717
  },
  Block {
    index: 5,
    hash: '5c659a61e3dd89d04448f20839e46a600eb8c204ed92550ffe61ab8afffa0eda',
    preHash: '19f043512e058933ed6a08e3a0fcc39db31319b83545ae7f6ecfd2119c287a1b',
    data: 'sixth Block',
    timestamp: 1618281717
  },
  Block {
    index: 6,
    hash: 'd8a77818f8bdaced3a4860a74cf99149690e8e4a76e32942afc33e4a64857a39',
    preHash: '5c659a61e3dd89d04448f20839e46a600eb8c204ed92550ffe61ab8afffa0eda',
    data: 'seventh Block',
    timestamp: 1618281717
  }
]
*/

export {};