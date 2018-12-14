import React from 'react';
import Wrapper from '../../Utility/Wrapper'
import './IngredientControls.css'
const IngredientControl = (props) => {

    return (
        <Wrapper>
            <div className='ingredientControl'>
                <div className="alert alert-dismissible alert-secondary" style={{ 'width': '100%' }}>
                    <h6 className='ingLable'>{props.lable}:</h6>
                    <div className='btnMain'>
                        <button type="button" className="btn btn-success ingBtn" onClick={props.addedIngredient}>More</button>
                        <button type="button" className="btn btn-warning ingBtn" onClick={props.lessIndgredient} disabled={props.disabled}>Less</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default IngredientControl;