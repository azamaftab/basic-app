import React from 'react';

const InsertEmployee = (props) => {
    return (
        <form>
            <fieldset>
                <legend>Create Employee</legend>

                <div className="form-group">
                    <label for="empName">Employee Name</label>
                    <input type="text" className="form-control" id="empName" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label for="empDes">Employee Description</label>
                    <input type="text" className="form-control" id="empDes" aria-describedby="emailHelp" placeholder="Enter Description" />
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
            </fieldset>
        </form>)
}
export default InsertEmployee