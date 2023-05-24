

import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const ContractGenerator = () => {
  const standardOptions = [
    'ERC20',
    'ERC721',
    'ERC1155',
    'ERC777',
    'Governor',
    'Votes'
  ];

  const featureOptions = [
    'Mintable',
    'Burnable',
    'Pausable',
    'Votes',
    'Enumerable',
    'URIStorage',
    'AccessControl'
  ];

  const accessControlOptions = [
    'Ownable',
    'Roles'
  ];

  const upgradeabilityOptions = [
    'Transparent',
    'UUPS'
  ];

  const info = [
    'Security Contact',
    'License'
  ];

  

  const [selStandard, setSelStandard] = useState(standardOptions[0]);
  const [selFeatures, setSelFeatures] = useState([]);
  const [selAccessControl, setSelAccessControl] = useState('');
  const [tokenName, setTokenName] = useState('MyToken');
  const [symbol, setSymbol] = useState('MTK');
  const [premint, setPremint] = useState(0);
  const [securityContract, setSecurityContract] = useState('');
  const [license, setLicense] = useState('MIT');

  const getCode = () => {
    const contractCode = `pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/${selStandard}/${selStandard}.sol";
${selFeatures.includes('Mintable') ? `import "@openzeppelin/contracts/access/AccessControl.sol";` : ''}

contract ${tokenName} is ${selStandard} {
    constructor() ${selStandard}("${tokenName}", "${license}") {
      ${(premint) && `_mint(msg.sender, ${premint} * 10 ** decimals());`}
    }
}`;

    return contractCode;
  };

  return (
    <div>
      <div className='container bg-dark mt-3'>
        <div className="card bg-dark">
          <div className="card-headern">
            <div className="d-flex mt-3">
              {standardOptions.map(standard => (
                <button className='btn btn-primary me-3' key={standard}>{standard}</button>
              ))}
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <h6 className=" text-small text-white">SETTINGS</h6>
                <label className="text-white"> Name</label>
                <input type="text" className="form-control mb-3" onChange={e => setTokenName(e.target.value)} value={tokenName} />
                <label className="text-white"> Symbol</label>
                <input type="text" className="form-control mb-3" />

                <hr />
                <h6 className=" text-small text-white">FEATURES</h6>
                {featureOptions.map(feature => (
                  <div className="form-check" key={feature}>
                    <input className="form-check-input text-white" type="checkbox" value="" id="flexCheckDefault" onChange={e => {
                      if (e.target.checked) {
                        setSelFeatures([...selFeatures, feature]);
                      } else {
                        setSelFeatures(selFeatures.filter(feat => feat !== feature));
                      }
                    }} />
                    <label className="form-check-label text-info" htmlFor="flexCheckDefault">{feature}</label>
                  </div>
                ))}
                <hr />
                <h6 className='text-white  text-small'>ACCESS CONTROL</h6>
                {accessControlOptions.map(access => (
                  <div className="form-check" key={access}>
                    <input className="form-check-input text-white" type="radio" value="" id="flexCheckDefault" />
                    <label className="form-check-label text-danger" htmlFor="flexCheckDefault">{access}</label>
                  </div>
                ))}
                <hr />
                <h6 className='text-white text-small'>UPGRADEABILITY</h6>
                {upgradeabilityOptions.map(upgrade => (
                  <div className="form-check" key={upgrade}>
                    <input className="form-check-input text-white" type="radio" value="" id="flexCheckDefault" />
                    <label className="form-check-label text-success" htmlFor="flexCheckDefault">{upgrade}</label>
                  </div>
                ))}
                <hr />
                <div className="col-md-3"></div>
                <h6 className='text-white text-small'>info </h6>
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
                    showPrintMargin: false,
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
