export function Rows(props) {
    let initialValue = props.initialValue;
    let dispatch = props.dispatch;

    return <>
        {initialValue.map((value) => {
            return <>
                <div key={value.id} className="pt-5">
                    <div className="pb-5">
                        <span>{value.name}</span>
                        <button onClick={() => dispatch({ type: "DELETE" })}
                            className="float-right">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <hr />
                </div>
            </>
        })
        }
    </>
}