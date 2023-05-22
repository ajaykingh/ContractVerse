import React, { useState } from 'react'

const ContractGenerator = () => {

    const standardOptions = [
        'ERC20',
        'ERC721',
        'ERC1155'
    ];

    const featureOptions = [
        'Mintable',
        'Burnable',
        'Pausable'
    ];


    const [selStandard, setSelStandard] = useState(standardOptions[0]);
    const [selFeatures, setSelFeatures] = useState([]);
    const [tokenName, setTokenName] = useState('MyToken');
    const [symbol, setSymbol] = useState('MTK');
    const [premint, setPremint] = useState(0);
    const [securityContract, setSecurityContract] = useState('')
    const [license, setLicense] = useState('MIT');


    const getCode = ({ selStandard, tokenName, license }) => `pragma solidity ^0.8.9;

    import "@openzeppelin/contracts/token/${selStandard}/${selStandard}.sol";
    
    contract ${tokenName} is ${selStandard} {
        constructor() ${selStandard}("${tokenName}", "${license}") {}
    }`



    return (
        <div>
            <div className='container'>
                <div class="card">
                    <div class="card-header">

                        <div className="d-flex">
                            {
                                standardOptions.map(standard => (
                                    <button className='btn btn-primary me-3'>{standard}</button>
                                ))
                            }
                        </div>


                        {/* <a href="#" class="btn btn-primary text-bold">ERC20</a> */}
                    </div>
                    <div className="card-body">
                        <div className="row">

                            <div className="col-md-3">
                                <h6 className="text-muted text-small">SETTINGS</h6>
                                <label className=""> Name</label>
                                <input type="text" className="form-control mb-3" onChange={e => setTokenName(e.target.value)} value={tokenName} />
                                <label className=""> Symbol</label>
                                <input type="text" className="form-control mb-3" />

                                <hr />
                                <h6 className="text-muted text-small">FEATURES</h6>
                                {
                                    featureOptions.map(feature => (
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">{feature}</label>
                                        </div>
                                    ))
                                }




                            </div>
                            <div className="col-md-9">
                                <textarea
                                    rows={20}
                                    type="text"
                                    className="form-control form-control-lg"
                                    value={getCode({ selStandard, license, tokenName })}

                                ></textarea>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card-body">

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>

    )
}

export default ContractGenerator