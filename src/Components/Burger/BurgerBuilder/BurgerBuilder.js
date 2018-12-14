import React, { Component } from 'react';
import Wrapper from '../../Utility/Wrapper';
import Burger from './Burger';
import BurgerControl from '../BurgerControls/BurgerControls';

class BurgerBuilder extends Component {
    state = {
        ingredient: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    }
    clickMoreIngredientHandler = (type) => {
        //console.log('Clicked More!', type, this.state.ingredient[type])
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIng = { ...this.state.ingredient };
        updatedIng[type] = updatedCount;
        this.setState({ ingredient: updatedIng });


    }
    clickLessIngredientHandler = (type) => {
        console.log('Clicked Less!', type, this.state.ingredient[type])
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount > 0 ? oldCount - 1 : oldCount;
        const updatedIng = { ...this.state.ingredient };
        updatedIng[type] = updatedCount;
        this.setState({ ingredient: updatedIng });
    }
    render() {
        let disabledInfo = { ...this.state.ingredient };
        for (let item in disabledInfo) {
            disabledInfo[item] = disabledInfo[item] <= 0;
        }

        return (
            <Wrapper>
                <Burger ingredient={this.state.ingredient}></Burger>
                <BurgerControl clickedMore={this.clickMoreIngredientHandler} clickedLess={this.clickLessIngredientHandler} disabled={disabledInfo}></BurgerControl>
            </Wrapper>
        )
    }
}
export default BurgerBuilder;