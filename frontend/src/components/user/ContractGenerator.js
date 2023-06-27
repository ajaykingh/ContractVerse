import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import { toast } from 'react-hot-toast';

const ContractGenerator = () => {
  const standardOptions = ['ERC20', 'ERC721', 'ERC1155', 'ERC777', 'Governor', 'Votes'];

  const featureOptions = ['Mintable', 'Burnable', 'Pausable', 'Permit', 'Votes', 'Flash Minting', 'Snapshots'];

  const accessControlOptions = ['Ownable', 'Roles'];

  const upgradeabilityOptions = ['Transparent', 'UUPS'];

  const info = ['Security Contact', 'License'];

  const [selStandard, setSelStandard] = useState(standardOptions[0]);
  const [selFeatures, setSelFeatures] = useState([]);
  const [selAccessControl, setSelAccessControl] = useState('');
  const [tokenName, setTokenName] = useState('MyToken');
  const [symbol, setSymbol] = useState('MTK');
  const [premint, setPremint] = useState(0);
  const [securityContract, setSecurityContract] = useState('');
  const [license, setLicense] = useState('MIT');

  const getAccessControl = () => {
    if(selAccessControl === 'Ownable'){
      return "@openzeppelin/contracts/access/AccessControl.sol";
    }else if(selAccessControl === 'Roles'){
      return "@openzeppelin/contracts/access/Ownable.sol";
    }
  }

  const getCode = () => {
    const contractCode = `pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/${selStandard}/${selStandard}.sol";
${selFeatures.includes('Burnable') ? `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";` : ''}
${selFeatures.includes('Pausable') ? `import "@openzeppelin/contracts/security/Pausable.sol";` : ''}
${selFeatures.includes('Mintable') ? getAccessControl() : ''}
${selFeatures.includes('Permit') ? `import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";` : ''}
${selFeatures.includes('Votes') ? `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";` : ''}
${selFeatures.includes('Flash Minting') ? `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";` : ''}
${selFeatures.includes('Snapshots') ? `import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Snapshot.sol";` : ''}

${selFeatures.includes('Burnable') ? `import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";` : ''}

contract ${tokenName} is ${selStandard} {
    constructor() ${selStandard}("${tokenName}", "${symbol}") {
      ${premint ? `_mint(msg.sender, ${premint} * 10 ** decimals());` : ''}
    }

    ${
      selFeatures.includes('Pausable')
        ? `
      function pause() public onlyOwner {
          _pause();
      }
  
      function unpause() public onlyOwner {
          _unpause();
      }
        `
        : ''
    }


    ${
      selFeatures.includes('Mintable')
        ? `function mint(address to, uint256 amount) public onlyOwner {
          _mint(to, amount);
      }`
        : ''
    }

    ${
      selFeatures.includes('Burnable')
        ? `function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }`
        : ''
    }
    ${
      selFeatures.includes('Votes')
        ? `function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }` : ''
    }
}`;

    return contractCode;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCode());
    toast.success("Code Copied to Clipboard");

  };

  return (
    <div style={{ backgroundImage: `url("https://e1.pxfuel.com/desktop-wallpaper/139/1017/desktop-wallpaper-ethereum-dark.jpg")` }}>
      <div className="container bg-dark pt-3">
        <div className="card bg-dark">
          <div className="card-header">
            <div className="d-flex justify-content-between">
            <div className="d-flex mt-3">
              {standardOptions.map((standard) => (
                <button
                  onClick={() => {
                    setSelStandard(standard);
                  }}
                  className={`btn ${standard === selStandard ? 'btn-primary' : 'btn-secondary'} me-3`}
                  key={standard}
                >
                  {standard}
                </button>
              ))}
            </div>
            
            <div>
                  <button className="btn btn-primary" onClick={copyToClipboard}>
                    <i class="fas fa-copy    "></i> Copy Code
                  </button>
            </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <h6 className=" text-small text-white">SETTINGS</h6>
                <label className="text-white"> Name</label>
                <input type="text" className="form-control mb-3" onChange={(e) => setTokenName(e.target.value)} value={tokenName} />
                <label className="text-white"> Symbol</label>
                <input type="text" className="form-control mb-3" onChange={(e) => setSymbol(e.target.value)} value={symbol} />
                <label className="text-white">Premint</label>
                <input type="number" className="form-control mb-3" onChange={(e) => setPremint(parseInt(e.target.value))} value={premint} />

                <hr />
                <h6 className=" text-small text-white">FEATURES</h6>
                {featureOptions.map((feature) => (
                  <div className="form-check" key={feature}>
                    <input
                      className="form-check-input text-white"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelFeatures([...selFeatures, feature]);
                        } else {
                          setSelFeatures(selFeatures.filter((feat) => feat !== feature));
                        }
                      }}
                    />
                    <label className="form-check-label text-info" htmlFor="flexCheckDefault">
                      {feature}
                    </label>
                  </div>
                ))}
                <hr />
                <h6 className="text-white  text-small">ACCESS CONTROL</h6>
                {accessControlOptions.map((access) => (
                  <div className="form-check" key={access}>
                    <input className="form-check-input text-white" type="radio" value="" id="flexCheckDefault" />
                    <label className="form-check-label text-danger" htmlFor="flexCheckDefault">
                      {access}
                    </label>
                  </div>
                ))}
                <hr />
                <h6 className="text-white text-small">UPGRADEABILITY</h6>
                {upgradeabilityOptions.map((upgrade) => (
                  <div className="form-check" key={upgrade}>
                    <input className="form-check-input text-white" type="radio" value="" id="flexCheckDefault" />
                    <label className="form-check-label text-success" htmlFor="flexCheckDefault">
                      {upgrade}
                    </label>
                  </div>
                ))}
                <hr />
                <div className="col-md-3"></div>
                <h6 className="text-white text-small">info </h6>
                <label className="text-white"> Security Contact</label>
                <input type="text" className="form-control mb-3" />
                <label className=" text-white"> License</label>
                <input type="text" className="form-control mb-3" />
              </div>
              <div className="col-md-9 bg-secondary mt-1">
                <AceEditor
                  mode="solidity"
                  theme="monokai"
                  name="code-editor"
                  //   className='mt-2'
                  fontSize={14}
                  width="100%"
                  height="850px"
                  value={getCode()}
                  readOnly={true}
                  setOptions={{
                    // enableBasicAutocompletion: true,
                    // enableLiveAutocompletion: true,
                    // enableSnippets: true,
                    // tabSize: 2,
                    showPrintMargin: false
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default ContractGenerator;
