import React, { Component } from 'react';
import PickOptionToggle from './pickOptionToggle';




const Modifiers = ({modifiers}) => {
    return (modifiers || []).map((modifier) => {
        console.log('modifiers is ', modifiers);
        const modifierName = modifier.name || "Advanced Options";
        let extraAdvancePickOpt = [];
        return(
            <div>
                <h4 className="options__title">{modifierName}</h4>
                <ul className="options__list" id="standard797434" data-least="1" data-most="1">
                    {
                        (modifier.pickOptions || []).map((pickOpt) => {
                            if (pickOpt.modifiers && pickOpt.modifiers.length > 1){
                                extraAdvancePickOpt.push(pickOpt.modifiers[1])
                            }
                            return(
                                <li className="optons__list-item" data-id="3688359" data-modid="797434" data-price="0" data-name="Moroccan the Boat" data-ga="">
                                    <p className="option__name">
                                        {pickOpt.name}
                                        {(pickOpt.addPrice && (<span>+ £{pickOpt.addPrice}</span> ) || null)}
                                    </p>
                                    <PickOptionToggle />
                                </li>
                            );
                        })
                    }
                </ul>
                <hr />
                {
                    extraAdvancePickOpt.length && (
                        <Modifiers modifiers={extraAdvancePickOpt} />
                    ) || null
                }
            </div>
        );
    })
};

export default Modifiers;