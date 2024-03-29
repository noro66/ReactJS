import React, {useRef} from 'react';

function AddUser({lastId, onAddUser}) {
   const fullNameRef = useRef(null);
   const countryRef = useRef(null);
    const resetValues = () =>{
        fullNameRef.current.value = '';
        countryRef.current.value = '';
    }
   const  handelSubmit = (e) =>{
       e.preventDefault();
       const fullName = fullNameRef.current.value;
       const country = countryRef.current.value;
       if (fullName && country){
           onAddUser({
               payload: {
                   id: lastId++,
                   fullName : fullName,
                   country : country
               }
           });
           resetValues();
       }



   }

    return (
        <form onSubmit={handelSubmit} >
            <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="id"
                    name="id"
                    disabled
                    value={lastId}
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    ref={fullNameRef}
                    type="text"
                    className="form-control mb-3"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                    ref={countryRef}
                    type="text"
                    className="form-control mb-3"
                    id="country"
                    name="country"
                    placeholder="Enter country"
                />
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    );
}

export default AddUser;