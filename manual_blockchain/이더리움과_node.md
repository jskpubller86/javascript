# 1. nodejs 콘솔에서 계약 인터페이스 만들기
node에서 배포된 계약을 사용할 때는 web3를 이용하여 계약 인터페이스를 만들어줘야 한다. 

# 1.1. nodejs 콘솔 실행 및 web3, solc 모듈 설치 
먼저 nodejs를 프로젝트 폴더를 생성하고 그 폴더로 이동한 다음 web3 모듈, solc모듈을 한다.

참고로 solc 모듈을 solidity compiler이다.

~~~bash
$ mkdir sample
$ cd sample

# 버전은 컨트렉트 버전에 맞춰준다.
$ npm install solc@0.4.25 
$ npm install web3@0.20.7

# node 콘솔로 이동
$ node   
~~~

# 1.2. 모듈을 설치한 후 solc 모듈로 계약 컴파일

~~~bash
> solc = require('solc')

# 계약 가져온다.
> souceCode = fs.readFileSync('HelloWorld.sol').toString() 
# 결과
// 버전 프라그마\n// ^0.4.25 --> 0.4.25 <= version < 0.5.0\npragma solidity ^0.4.25;\n\n// 계약 선언\ncontract HelloWorld {\n\t// 상태 변수 선언\n\tstring public greeting;\n\t\n\t// 생성자\n\tfunction HelloWorld(string _greeting){\n\t\tgreeting = _greeting;\t\n\t}\n\t\n\t// 함수 정의\n\tfunction setGreeting(string _greeting){\n\t\tgreeting = _greeting;\t\n\t}\n\tfunction say() constant returns (string){\n\t\treturn greeting;\n\t}\n} \n'

> compileCode = solc.compile(sourceCode) # 계약을 컴파일 한다.
# 결과
{ contracts:
   { ':HelloWorld':
      { assembly: [Object],
        bytecode:
         '608060405234801561001057600080fd5b50604051610514380380610514833981018060405281019080805182019291905050508060009080519060200190610049929190610050565b50506100f5565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009157805160ff19168380011785556100bf565b828001600101855582156100bf579182015b828111156100be5782518255916020019190600101906100a3565b5b5090506100cc91906100d0565b5090565b6100f291905b808211156100ee5760008160009055506001016100d6565b5090565b90565b610410806101046000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063954ab4b21461005c578063a4136862146100ec578063ef690cc014610155575b600080fd5b34801561006857600080fd5b506100716101e5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100b1578082015181840152602081019050610096565b50505050905090810190601f1680156100de5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100f857600080fd5b50610153600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610287565b005b34801561016157600080fd5b5061016a6102a1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561027d5780601f106102525761010080835404028352916020019161027d565b820191906000526020600020905b81548152906001019060200180831161026057829003601f168201915b5050505050905090565b806000908051906020019061029d92919061033f565b5050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103375780601f1061030c57610100808354040283529160200191610337565b820191906000526020600020905b81548152906001019060200180831161031a57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038057805160ff19168380011785556103ae565b828001600101855582156103ae579182015b828111156103ad578251825591602001919060010190610392565b5b5090506103bb91906103bf565b5090565b6103e191905b808211156103dd5760008160009055506001016103c5565b5090565b905600a165627a7a7230582028a545ebc64ff5aed1c041a68f360c3ac5fcd08994a0cb4d18a1fb85824b35570029',
        functionHashes: [Object],
        gasEstimates: [Object],
        interface:
         '[{"constant":true,"inputs":[],"name":"say","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greeting","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
        metadata:
         '{"compiler":{"version":"0.4.25+commit.59dbf8f1"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[],"name":"say","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greeting","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"":"HelloWorld"},"evmVersion":"byzantium","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"":{"keccak256":"0x51b33d728e620d29252937fa5feaca99b4012cfcfe8aef20c5bf3485c5783a21","urls":["bzzr://28db08066914a4d33f8679a19120584313c822303103bbe1283fdca277f64075"]}},"version":1}',
        opcodes:
         'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x514 CODESIZE SUB DUP1 PUSH2 0x514 DUP4 CODECOPY DUP2 ADD DUP1 PUSH1 0x40 MSTORE DUP2 ADD SWAP1 DUP1 DUP1 MLOAD DUP3 ADD SWAP3 SWAP2 SWAP1 POP POP POP DUP1 PUSH1 0x0 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x49 SWAP3 SWAP2 SWAP1 PUSH2 0x50 JUMP JUMPDEST POP POP PUSH2 0xF5 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x91 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xBF JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xBF JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xBE JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0xA3 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0xCC SWAP2 SWAP1 PUSH2 0xD0 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0xF2 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xEE JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0xD6 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0x410 DUP1 PUSH2 0x104 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x57 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x954AB4B2 EQ PUSH2 0x5C JUMPI DUP1 PUSH4 0xA4136862 EQ PUSH2 0xEC JUMPI DUP1 PUSH4 0xEF690CC0 EQ PUSH2 0x155 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x68 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x71 PUSH2 0x1E5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xB1 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x96 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0xDE JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xF8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x153 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP3 ADD DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY DUP3 ADD SWAP2 POP POP POP POP POP POP SWAP2 SWAP3 SWAP2 SWAP3 SWAP1 POP POP POP PUSH2 0x287 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x161 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x16A PUSH2 0x2A1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1AA JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x18F JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x1D7 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x27D JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x252 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x27D JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x260 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST DUP1 PUSH1 0x0 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x29D SWAP3 SWAP2 SWAP1 PUSH2 0x33F JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x337 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x30C JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x337 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x31A JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x380 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x3AE JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x3AE JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x3AD JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x392 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0x3BB SWAP2 SWAP1 PUSH2 0x3BF JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x3E1 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x3DD JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0x3C5 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x28 0xa5 GASLIMIT 0xeb 0xc6 0x4f 0xf5 0xae 0xd1 0xc0 COINBASE 0xa6 DUP16 CALLDATASIZE 0xc GASPRICE 0xc5 0xfc 0xd0 DUP10 SWAP5 LOG0 0xcb 0x4d XOR LOG1 CREATE2 DUP6 DUP3 0x4b CALLDATALOAD JUMPI STOP 0x29 ',
        runtimeBytecode:
         '608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063954ab4b21461005c578063a4136862146100ec578063ef690cc014610155575b600080fd5b34801561006857600080fd5b506100716101e5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100b1578082015181840152602081019050610096565b50505050905090810190601f1680156100de5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100f857600080fd5b50610153600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610287565b005b34801561016157600080fd5b5061016a6102a1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561027d5780601f106102525761010080835404028352916020019161027d565b820191906000526020600020905b81548152906001019060200180831161026057829003601f168201915b5050505050905090565b806000908051906020019061029d92919061033f565b5050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103375780601f1061030c57610100808354040283529160200191610337565b820191906000526020600020905b81548152906001019060200180831161031a57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038057805160ff19168380011785556103ae565b828001600101855582156103ae579182015b828111156103ad578251825591602001919060010190610392565b5b5090506103bb91906103bf565b5090565b6103e191905b808211156103dd5760008160009055506001016103c5565b5090565b905600a165627a7a7230582028a545ebc64ff5aed1c041a68f360c3ac5fcd08994a0cb4d18a1fb85824b35570029',
        srcmap:
         '107:311:0:-;;;196:66;8:9:-1;5:2;;;30:1;27;20:12;5:2;196:66:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;248:9;237:8;:20;;;;;;;;;;;;:::i;:::-;;196:66;107:311;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
        srcmapRuntime:
         '107:311:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;353:63;;8:9:-1;5:2;;;30:1;27;20:12;5:2;353:63:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;353:63:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;284:67;;8:9:-1;5:2;;;30:1;27;20:12;5:2;284:67:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;155:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:22:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;155:22:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;353:63;386:6;404:8;397:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;353:63;:::o;284:67::-;337:9;326:8;:20;;;;;;;;;;;;:::i;:::-;;284:67;:::o;155:22::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;107:311::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o' } },
  errors:
   [ ':11:2: Warning: Defining constructors as functions with the same name as the contract is deprecated. Use "constructor(...) { ... }" instead.\n\tfunction HelloWorld(string _greeting){\n ^ (Relevant source part starts here and spans across multiple lines).\n',
     ':11:2: Warning: No visibility specified. Defaulting to "public". \n\tfunction HelloWorld(string _greeting){\n ^ (Relevant source part starts here and spans across multiple lines).\n',
     ':16:2: Warning: No visibility specified. Defaulting to "public". \n\tfunction setGreeting(string _greeting){\n ^ (Relevant source part starts here and spans across multiple lines).\n',
     ':19:2: Warning: No visibility specified. Defaulting to "public". \n\tfunction say() constant returns (string){\n ^ (Relevant source part starts here and spans across multiple lines).\n' ],
  sourceList: [ '' ],
  sources: { '': { AST: [Object] } } }
~~~

# 1.3. 계약 배포에 필요한 ABI와 바이트코드 추출

~~~bash
> abi = JSON.parse(compileCode.contracts[':HelloWorld'].interface)
[ { constant: true,
    inputs: [],
    name: 'say',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'setGreeting',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: true,
    inputs: [],
    name: 'greeting',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { inputs: [ [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor' } ]


> byteCode = '0x' + compileCode.contracts[':HelloWorld'].bytecode
# 결과 
'0x608060405234801561001057600080fd5b50604051610514380380610514833981018060405281019080805182019291905050508060009080519060200190610049929190610050565b50506100f5565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009157805160ff19168380011785556100bf565b828001600101855582156100bf579182015b828111156100be5782518255916020019190600101906100a3565b5b5090506100cc91906100d0565b5090565b6100f291905b808211156100ee5760008160009055506001016100d6565b5090565b90565b610410806101046000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063954ab4b21461005c578063a4136862146100ec578063ef690cc014610155575b600080fd5b34801561006857600080fd5b506100716101e5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100b1578082015181840152602081019050610096565b50505050905090810190601f1680156100de5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100f857600080fd5b50610153600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610287565b005b34801561016157600080fd5b5061016a6102a1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101aa57808201518184015260208101905061018f565b50505050905090810190601f1680156101d75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561027d5780601f106102525761010080835404028352916020019161027d565b820191906000526020600020905b81548152906001019060200180831161026057829003601f168201915b5050505050905090565b806000908051906020019061029d92919061033f565b5050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103375780601f1061030c57610100808354040283529160200191610337565b820191906000526020600020905b81548152906001019060200180831161031a57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038057805160ff19168380011785556103ae565b828001600101855582156103ae579182015b828111156103ad578251825591602001919060010190610392565b5b5090506103bb91906103bf565b5090565b6103e191905b808211156103dd5760008160009055506001016103c5565b5090565b905600a165627a7a7230582028a545ebc64ff5aed1c041a68f360c3ac5fcd08994a0cb4d18a1fb85824b35570029'
~~~

# 1.4. web3를 이용한 계약 배포 및 실행

~~~bash
> Web3 = require('web3')

# 로컬호스트 8545으로 연결되는 web3 생성
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
# 결과
Web3 {
  _requestManager:
   RequestManager {
     provider:
      HttpProvider {
        host: 'http://localhost:8545',
        timeout: 0,
        user: undefined,
        password: undefined,
        headers: undefined },
     polls: {},
     timeout: null },
  currentProvider:
   HttpProvider {
     host: 'http://localhost:8545',
     timeout: 0,
     user: undefined,
     password: undefined,
     headers: undefined },
  eth:
   Eth {
     _requestManager:
      RequestManager { provider: [HttpProvider], polls: {}, timeout: null },
     getBalance:
      { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
     getStorageAt:
      { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
     getCode:
      { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
     getBlock:
      { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
     getUncle:
      { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
     getCompilers:
      { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
     getBlockTransactionCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: getBlockTransactionCountCall] },
     getBlockUncleCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: uncleCountCall] },
     getTransaction:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionByHash' },
     getTransactionFromBlock:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: transactionFromBlockCall] },
     getTransactionReceipt:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionReceipt' },
     getTransactionCount:
      { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
     call:
      { [Function: send] request: [Function: bound ], call: 'eth_call' },
     estimateGas:
      { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
     sendRawTransaction:
      { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
     signTransaction:
      { [Function: send] request: [Function: bound ], call: 'eth_signTransaction' },
     sendTransaction:
      { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
     sign:
      { [Function: send] request: [Function: bound ], call: 'eth_sign' },
     compile:
      { solidity: [Function], lll: [Function], serpent: [Function] },
     submitWork:
      { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
     getWork:
      { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
     coinbase: [Getter],
     getCoinbase: { [Function: get] request: [Function: bound ] },
     mining: [Getter],
     getMining: { [Function: get] request: [Function: bound ] },
     hashrate: [Getter],
     getHashrate: { [Function: get] request: [Function: bound ] },
     syncing: [Getter],
     getSyncing: { [Function: get] request: [Function: bound ] },
     gasPrice: [Getter],
     getGasPrice: { [Function: get] request: [Function: bound ] },
     accounts: [Getter],
     getAccounts: { [Function: get] request: [Function: bound ] },
     blockNumber: [Getter],
     getBlockNumber: { [Function: get] request: [Function: bound ] },
     protocolVersion: [Getter],
     getProtocolVersion: { [Function: get] request: [Function: bound ] },
     iban:
      { [Function: Iban]
        fromAddress: [Function],
        fromBban: [Function],
        createIndirect: [Function],
        isValid: [Function] },
     sendIBANTransaction: [Function: bound transfer] },
  db:
   DB {
     _requestManager:
      RequestManager { provider: [HttpProvider], polls: {}, timeout: null },
     putString:
      { [Function: send] request: [Function: bound ], call: 'db_putString' },
     getString:
      { [Function: send] request: [Function: bound ], call: 'db_getString' },
     putHex:
      { [Function: send] request: [Function: bound ], call: 'db_putHex' },
     getHex:
      { [Function: send] request: [Function: bound ], call: 'db_getHex' } },
  shh:
   Shh {
     _requestManager:
      RequestManager { provider: [HttpProvider], polls: {}, timeout: null },
     version:
      { [Function: send] request: [Function: bound ], call: 'shh_version' },
     info:
      { [Function: send] request: [Function: bound ], call: 'shh_info' },
     setMaxMessageSize:
      { [Function: send] request: [Function: bound ], call: 'shh_setMaxMessageSize' },
     setMinPoW:
      { [Function: send] request: [Function: bound ], call: 'shh_setMinPoW' },
     markTrustedPeer:
      { [Function: send] request: [Function: bound ], call: 'shh_markTrustedPeer' },
     newKeyPair:
      { [Function: send] request: [Function: bound ], call: 'shh_newKeyPair' },
     addPrivateKey:
      { [Function: send] request: [Function: bound ], call: 'shh_addPrivateKey' },
     deleteKeyPair:
      { [Function: send] request: [Function: bound ], call: 'shh_deleteKeyPair' },
     hasKeyPair:
      { [Function: send] request: [Function: bound ], call: 'shh_hasKeyPair' },
     getPublicKey:
      { [Function: send] request: [Function: bound ], call: 'shh_getPublicKey' },
     getPrivateKey:
      { [Function: send] request: [Function: bound ], call: 'shh_getPrivateKey' },
     newSymKey:
      { [Function: send] request: [Function: bound ], call: 'shh_newSymKey' },
     addSymKey:
      { [Function: send] request: [Function: bound ], call: 'shh_addSymKey' },
     generateSymKeyFromPassword:
      { [Function: send]
        request: [Function: bound ],
        call: 'shh_generateSymKeyFromPassword' },
     hasSymKey:
      { [Function: send] request: [Function: bound ], call: 'shh_hasSymKey' },
     getSymKey:
      { [Function: send] request: [Function: bound ], call: 'shh_getSymKey' },
     deleteSymKey:
      { [Function: send] request: [Function: bound ], call: 'shh_deleteSymKey' },
     post:
      { [Function: send] request: [Function: bound ], call: 'shh_post' } },
  net:
   Net {
     _requestManager:
      RequestManager { provider: [HttpProvider], polls: {}, timeout: null },
     listening: [Getter],
     getListening: { [Function: get] request: [Function: bound ] },
     peerCount: [Getter],
     getPeerCount: { [Function: get] request: [Function: bound ] } },
  personal:
   Personal {
     _requestManager:
      RequestManager { provider: [HttpProvider], polls: {}, timeout: null },
     newAccount:
      { [Function: send] request: [Function: bound ], call: 'personal_newAccount' },
     importRawKey:
      { [Function: send] request: [Function: bound ], call: 'personal_importRawKey' },
     unlockAccount:
      { [Function: send] request: [Function: bound ], call: 'personal_unlockAccount' },
     ecRecover:
      { [Function: send] request: [Function: bound ], call: 'personal_ecRecover' },
     sign:
      { [Function: send] request: [Function: bound ], call: 'personal_sign' },
     sendTransaction:
      { [Function: send]
        request: [Function: bound ],
        call: 'personal_sendTransaction' },
     lockAccount:
      { [Function: send] request: [Function: bound ], call: 'personal_lockAccount' },
     listAccounts: [Getter],
     getListAccounts: { [Function: get] request: [Function: bound ] } },
  bzz:
   Swarm {
     _requestManager:
      RequestManager { provider: [HttpProvider], polls: {}, timeout: null },
     blockNetworkRead:
      { [Function: send] request: [Function: bound ], call: 'bzz_blockNetworkRead' },
     syncEnabled:
      { [Function: send] request: [Function: bound ], call: 'bzz_syncEnabled' },
     swapEnabled:
      { [Function: send] request: [Function: bound ], call: 'bzz_swapEnabled' },
     download:
      { [Function: send] request: [Function: bound ], call: 'bzz_download' },
     upload:
      { [Function: send] request: [Function: bound ], call: 'bzz_upload' },
     retrieve:
      { [Function: send] request: [Function: bound ], call: 'bzz_retrieve' },
     store:
      { [Function: send] request: [Function: bound ], call: 'bzz_store' },
     get:
      { [Function: send] request: [Function: bound ], call: 'bzz_get' },
     put:
      { [Function: send] request: [Function: bound ], call: 'bzz_put' },
     modify:
      { [Function: send] request: [Function: bound ], call: 'bzz_modify' },
     hive: [Getter],
     getHive: { [Function: get] request: [Function: bound ] },
     info: [Getter],
     getInfo: { [Function: get] request: [Function: bound ] } },
  settings:
   Settings { defaultBlock: 'latest', defaultAccount: undefined },
  version:
   { api: '0.20.7',
     node: [Getter],
     getNode: { [Function: get] request: [Function: bound ] },
     network: [Getter],
     getNetwork: { [Function: get] request: [Function: bound ] },
     ethereum: [Getter],
     getEthereum: { [Function: get] request: [Function: bound ] },
     whisper: [Getter],
     getWhisper: { [Function: get] request: [Function: bound ] } },
  providers:
   { HttpProvider: [Function: HttpProvider],
     IpcProvider: [Function: IpcProvider] },
  _extend:
   { [Function: ex]
     formatters:
      { inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
        inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
        inputCallFormatter: [Function: inputCallFormatter],
        inputTransactionFormatter: [Function: inputTransactionFormatter],
        inputAddressFormatter: [Function: inputAddressFormatter],
        inputPostFormatter: [Function: inputPostFormatter],
        outputBigNumberFormatter: [Function: outputBigNumberFormatter],
        outputTransactionFormatter: [Function: outputTransactionFormatter],
        outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
        outputBlockFormatter: [Function: outputBlockFormatter],
        outputLogFormatter: [Function: outputLogFormatter],
        outputPostFormatter: [Function: outputPostFormatter],
        outputSyncingFormatter: [Function: outputSyncingFormatter] },
     utils:
      { padLeft: [Function: padLeft],
        padRight: [Function: padRight],
        toHex: [Function: toHex],
        toDecimal: [Function: toDecimal],
        fromDecimal: [Function: fromDecimal],
        toUtf8: [Function: toUtf8],
        toAscii: [Function: toAscii],
        fromUtf8: [Function: fromUtf8],
        fromAscii: [Function: fromAscii],
        transformToFullName: [Function: transformToFullName],
        extractDisplayName: [Function: extractDisplayName],
        extractTypeName: [Function: extractTypeName],
        toWei: [Function: toWei],
        fromWei: [Function: fromWei],
        toBigNumber: [Function: toBigNumber],
        toTwosComplement: [Function: toTwosComplement],
        toAddress: [Function: toAddress],
        isBigNumber: [Function: isBigNumber],
        isStrictAddress: [Function: isStrictAddress],
        isAddress: [Function: isAddress],
        isChecksumAddress: [Function: isChecksumAddress],
        toChecksumAddress: [Function: toChecksumAddress],
        isFunction: [Function: isFunction],
        isString: [Function: isString],
        isObject: [Function: isObject],
        isBoolean: [Function: isBoolean],
        isArray: [Function: isArray],
        isJson: [Function: isJson],
        isBloom: [Function: isBloom],
        isTopic: [Function: isTopic] },
     Method: [Function: Method],
     Property: [Function: Property] } }

# web3 컨트랙트 생성
> HelloWorldContract = web3.eth.contract(abi)
# 결과 
ContractFactory {
  eth:
   Eth {
     _requestManager:
      RequestManager { provider: [HttpProvider], polls: {}, timeout: null },
     getBalance:
      { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
     getStorageAt:
      { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
     getCode:
      { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
     getBlock:
      { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
     getUncle:
      { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
     getCompilers:
      { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
     getBlockTransactionCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: getBlockTransactionCountCall] },
     getBlockUncleCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: uncleCountCall] },
     getTransaction:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionByHash' },
     getTransactionFromBlock:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: transactionFromBlockCall] },
     getTransactionReceipt:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionReceipt' },
     getTransactionCount:
      { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
     call:
      { [Function: send] request: [Function: bound ], call: 'eth_call' },
     estimateGas:
      { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
     sendRawTransaction:
      { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
     signTransaction:
      { [Function: send] request: [Function: bound ], call: 'eth_signTransaction' },
     sendTransaction:
      { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
     sign:
      { [Function: send] request: [Function: bound ], call: 'eth_sign' },
     compile:
      { solidity: [Function], lll: [Function], serpent: [Function] },
     submitWork:
      { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
     getWork:
      { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
     coinbase: [Getter],
     getCoinbase: { [Function: get] request: [Function: bound ] },
     mining: [Getter],
     getMining: { [Function: get] request: [Function: bound ] },
     hashrate: [Getter],
     getHashrate: { [Function: get] request: [Function: bound ] },
     syncing: [Getter],
     getSyncing: { [Function: get] request: [Function: bound ] },
     gasPrice: [Getter],
     getGasPrice: { [Function: get] request: [Function: bound ] },
     accounts: [Getter],
     getAccounts: { [Function: get] request: [Function: bound ] },
     blockNumber: [Getter],
     getBlockNumber: { [Function: get] request: [Function: bound ] },
     protocolVersion: [Getter],
     getProtocolVersion: { [Function: get] request: [Function: bound ] },
     iban:
      { [Function: Iban]
        fromAddress: [Function],
        fromBban: [Function],
        createIndirect: [Function],
        isValid: [Function] },
     sendIBANTransaction: [Function: bound transfer] },
  abi:
   [ { constant: true,
       inputs: [],
       name: 'say',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: false,
       inputs: [Array],
       name: 'setGreeting',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: true,
       inputs: [],
       name: 'greeting',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { inputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'constructor' } ],
  new: { [Function] getData: [Function: bound ] } }


# 계정 잠금 해제
web3.personal.unlockAccount(web3.eth.accounts[0], "pass0")
# 결과 
true


# 배포
> deployedHelloWorldContract = HelloWorldContract.new(_greeting, { data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
# 결과
Contract {
  _eth:
   Eth {
     _requestManager:
      RequestManager { provider: [HttpProvider], polls: {}, timeout: null },
     getBalance:
      { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
     getStorageAt:
      { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
     getCode:
      { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
     getBlock:
      { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
     getUncle:
      { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
     getCompilers:
      { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
     getBlockTransactionCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: getBlockTransactionCountCall] },
     getBlockUncleCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: uncleCountCall] },
     getTransaction:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionByHash' },
     getTransactionFromBlock:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: transactionFromBlockCall] },
     getTransactionReceipt:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionReceipt' },
     getTransactionCount:
      { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
     call:
      { [Function: send] request: [Function: bound ], call: 'eth_call' },
     estimateGas:
      { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
     sendRawTransaction:
      { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
     signTransaction:
      { [Function: send] request: [Function: bound ], call: 'eth_signTransaction' },
     sendTransaction:
      { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
     sign:
      { [Function: send] request: [Function: bound ], call: 'eth_sign' },
     compile:
      { solidity: [Function], lll: [Function], serpent: [Function] },
     submitWork:
      { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
     getWork:
      { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
     coinbase: [Getter],
     getCoinbase: { [Function: get] request: [Function: bound ] },
     mining: [Getter],
     getMining: { [Function: get] request: [Function: bound ] },
     hashrate: [Getter],
     getHashrate: { [Function: get] request: [Function: bound ] },
     syncing: [Getter],
     getSyncing: { [Function: get] request: [Function: bound ] },
     gasPrice: [Getter],
     getGasPrice: { [Function: get] request: [Function: bound ] },
     accounts: [Getter],
     getAccounts: { [Function: get] request: [Function: bound ] },
     blockNumber: [Getter],
     getBlockNumber: { [Function: get] request: [Function: bound ] },
     protocolVersion: [Getter],
     getProtocolVersion: { [Function: get] request: [Function: bound ] },
     iban:
      { [Function: Iban]
        fromAddress: [Function],
        fromBban: [Function],
        createIndirect: [Function],
        isValid: [Function] },
     sendIBANTransaction: [Function: bound transfer] },
  transactionHash:
   '0x6ecc41af8e536661a9cddfc5d8c73ca7e31d3159f149d39a360f800753a664e0',
  address: undefined,
  abi:
   [ { constant: true,
       inputs: [],
       name: 'say',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: false,
       inputs: [Array],
       name: 'setGreeting',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: true,
       inputs: [],
       name: 'greeting',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { inputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'constructor' } ] }
       

# 현재 채굴을 하지 않아서 트랜잭션 풀에만 있다. 그래서 배포한 계약의 블록 주소가 없다. 
> deployedHelloWorldContract.address
# 결과 
undefined
~~~

계약이 블록에 없기 때문에 계약의 메소드 호출이 불가능하기 때문에 geth에서 채굴을 하여 계약을 블록에 넣어준다.

~~~bash
> miner.start(2)
~~~
블록이 생성된 후 node 콘솔에서 확인한다. 

~~~bash
> deployedHelloWorldContract.address
# 결과 
'0xe27e5c61a4f80199cde1f191e9070879f5643907'
~~~











