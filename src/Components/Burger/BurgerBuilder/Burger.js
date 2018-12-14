import React from 'react';
import BurgerIngredient from '../BurgerIngredient/Ingredient';
import Wrapper from '../../Utility/Wrapper';
import ProptTypes from 'prop-types'

const Burger = (props) => {
    let makeBurger = null
    if (props.ingredient !== undefined) {
        makeBurger = Object.keys(props.ingredient).map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
            })
        })
    } else {
        makeBurger = <h6 style={{ margin: '2% auto', 'textAlign': 'center' }}>No Ingredient Found!</h6>
    }

    return (
        <Wrapper>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {makeBurger}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </Wrapper>
    )
}
Burger.propTypes = {
    ingredient: ProptTypes.object.isRequired
}
export default Burger;