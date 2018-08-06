import React from 'react';

const  NotifySend = (props)  => {
return (
    <form onSubmit={props.getRemark}>
        <input type="text" name="remark"/>
        <button>submit</button>
    </form>
);


}

export default NotifySend;