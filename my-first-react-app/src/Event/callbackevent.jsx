export default function Callbackevent({handelClick})
{


    return <>
        <button onClick={handelClick('hello this is how we send variables to a parent Component')} type="button" name="" id="" className="btn btn-primary btn-lg btn-block">Callback</button>
    </>
}