export function Rows(props) {
    let initialValue = props.initialValue;
    return <>
        {initialValue.map((value, index) => {
            return <>
                <div key={value.id} className="pt-5">
                    <div className="pb-5">
                        <span>{value.text}</span>
                        <button className="float-right">
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