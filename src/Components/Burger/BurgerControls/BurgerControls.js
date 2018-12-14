import React from 'react';
import Wrapper from '../../Utility/Wrapper';
import IngredientControl from './IngredientControls';
const controls = [
    { lable: 'Cheese', type: 'cheese' },
    { lable: 'Bacon', type: 'bacon' },
    { lable: 'Salad', type: 'salad' },
    { lable: 'Meat', type: 'meat' },
];
const BurgerControl = (props) => {

    const ingredientCtrl = controls.map((ctrl, i) => {
        return (
            <IngredientControl
                key={i} lable={ctrl.lable}
                addedIngredient={() => props.clickedMore(ctrl.type)}
                lessIndgredient={() => props.clickedLess(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        )
    })
    return (
        <Wrapper>
            {ingredientCtrl}
        </Wrapper>
    )
}
export default BurgerControl;